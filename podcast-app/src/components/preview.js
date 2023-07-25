import React, { useState, useEffect } from 'react';

function Show({ onPodcastClick }) {
    const [podcasts, setPodcasts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [sortOption, setSortOption] = useState('');
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedGenre, setSelectedGenre] = useState(''); // Track the selected genre option

    const genreMap = {
        1: "Personal Growth",
        2: "True Crime and Investigative Journalism",
        3: "History",
        4: "Comedy",
        5: "Entertainment",
        6: "Business",
        7: "Fiction",
        8: "News",
        9: "Kids & Family"
    };

    useEffect(() => {
        // Fetch data from the API
        fetch('https://podcast-api.netlify.app/shows')
            .then((response) => response.json())
            .then((data) => {
                //console.log(data); // Check if you're receiving the expected data
                setPodcasts(data);
                setLoading(false);
            })
            .catch((error) => console.log(error));
    }, []);

    // Function to handle clicking on a podcast
    const handlePodcastClick = (podcastId, genre) => {
        console.log(`Clicked on podcast with ID: ${podcastId}`);
        // Add your logic here to handle the click event
        // For example, you can open a modal or navigate to a specific podcast page.
        onPodcastClick(podcastId, genre);
    };

    
    useEffect(() => {
        if (sortOption === 'A-Z') {
            setPodcasts([...podcasts.sort((a, b) => a.title.localeCompare(b.title))]);
        } else if (sortOption === 'Z-A') {
            setPodcasts([...podcasts.sort((a, b) => b.title.localeCompare(a.title))]);
        } else if (sortOption === 'Oldest') {
            setPodcasts([...podcasts.sort((a, b) => new Date(a.updated) - new Date(b.updated))]);
        } else if (sortOption === 'Newest') {
            setPodcasts([...podcasts.sort((a, b) => new Date(b.updated) - new Date(a.updated))]);
        }
    }, [sortOption, podcasts]);

    // Function to handle filtering based on the search query and genre when the search button is clicked
    const handleSearch = (e) => {
        e.preventDefault();
        if (searchQuery.trim() !== '' || selectedGenre !== '') {
            const filteredPodcasts = podcasts.filter((podcast) => {
                const matchesSearchQuery = searchQuery.trim() === '' || podcast.title.toLowerCase().includes(searchQuery.toLowerCase());
                const matchesGenre = selectedGenre === '' || (podcast.genres && podcast.genres.includes(parseInt(selectedGenre)));
                return matchesSearchQuery && matchesGenre;
            });
            setPodcasts(filteredPodcasts);
        }
    };

    if (loading) {
        return <div className='loadingState'>Loading...</div>;
    }

    return (
        <div className="previewPodcast">
            <form className='form'>
                <div>
                    <input
                        type="text"
                        className='form-search'
                        placeholder="Search by title..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <select
                        className='form-search'
                        onChange={(e) => setSelectedGenre(e.target.value)}
                        value={selectedGenre}
                    >
                        <option value="">All Genres</option>
                        {Object.entries(genreMap).map(([genreId, genreName]) => (
                            <option key={genreId} value={genreId}>{genreName}</option>
                        ))}
                    </select>
                </div>
                <button className='form-search' onClick={handleSearch}>Search</button>
                <div>
                    <select className='form-search' onChange={(e) => setSortOption(e.target.value)}>
                        <option value="">Sort By</option>
                        <option value="A-Z">A-Z</option>
                        <option value="Z-A">Z-A</option>
                        <option value="Oldest">Oldest</option>
                        <option value="Newest">Newest</option>
                    </select>
                </div>
            </form>

            {podcasts.map((podcast) => (
                <div key={podcast.id} className="podcastImage" onClick={() => onPodcastClick(podcast.id, podcast.genres)}>
                    <div className="imgDiv">
                        <img src={podcast.image} className="img" alt="podcastimage" />
                    </div>
                    <div>
                        <h4>{podcast.title}</h4>
                        <p>Season: {podcast.seasons}</p>
                        <p>
                            Genre: {podcast.genres && podcast.genres.length > 0
                                ? podcast.genres.map((genreId) => genreMap[genreId]).join(', ')
                                : 'N/A'}
                        </p>
                        <p>Updated: {new Date(podcast.updated).toLocaleDateString("en-US", { day: "numeric", month: "long", year: "numeric" })}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Show;




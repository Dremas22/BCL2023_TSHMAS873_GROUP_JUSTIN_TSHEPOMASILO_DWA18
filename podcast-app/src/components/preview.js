
// import React, { useState, useEffect } from 'react';

// function Show({ onPodcastClick }) {
//     const [podcasts, setPodcasts] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [sortOption, setSortOption] = useState(''); // Track the selected sorting option
//     const [searchQuery, setSearchQuery] = useState(''); // Track the search query entered by the user

//     useEffect(() => {
//         // Fetch data from the API
//         fetch('https://podcast-api.netlify.app/shows')
//             .then((response) => response.json())
//             .then((data) => {
//                 console.log(data); // Check if you're receiving the expected data
//                 setPodcasts(data);
//                 setLoading(false);
//             })
//             .catch((error) => console.log(error));
//     }, []);

//     // Function to handle clicking on a podcast (you can implement this according to your requirement)
//     const handlePodcastClick = (podcastId) => {
//         console.log(`Clicked on podcast with ID: ${podcastId}`);
//         // Add your logic here to handle the click event
//         // For example, you can open a modal or navigate to a specific podcast page.
//     };

//     // Function to handle sorting based on the selected option
//     useEffect(() => {
//         if (sortOption === 'A-Z') {
//             setPodcasts([...podcasts.sort((a, b) => a.title.localeCompare(b.title))]);
//         } else if (sortOption === 'Z-A') {
//             setPodcasts([...podcasts.sort((a, b) => b.title.localeCompare(a.title))]);
//         } else if (sortOption === 'Oldest') {
//             setPodcasts([...podcasts.sort((a, b) => new Date(a.updated) - new Date(b.updated))]);
//         } else if (sortOption === 'Newest') {
//             setPodcasts([...podcasts.sort((a, b) => new Date(b.updated) - new Date(a.updated))]);
//         }
//     }, [sortOption, podcasts]);

//     // Function to handle filtering based on the search query
//     useEffect(() => {
//         if (searchQuery !== '') {
//             const filteredPodcasts = podcasts.filter((podcast) =>
//                 podcast.title.toLowerCase().includes(searchQuery.toLowerCase())
//             );
//             setPodcasts(filteredPodcasts);
//         }
//     }, [searchQuery, podcasts]);

//     if (loading) {
//         return <div>Loading...</div>; // Display a loading state while waiting for the API response
//     }

//     return (
//         <div className="previewPodcast">
//             <div className='form'>
//                 <div>
//                     <input
//                         type="text"
//                         className='form-search'
//                         placeholder="Search by title..."
//                         value={searchQuery}
//                         onChange={(e) => setSearchQuery(e.target.value)}
//                     />
//                 </div>
//                 <button className='form-search' id="submit-search">Search</button>
//                 <div>
//                     <select className='form-search' onChange={(e) => setSortOption(e.target.value)}>
//                         <option value="">Sort By</option>
//                         <option value="A-Z">A-Z</option>
//                         <option value="Z-A">Z-A</option>
//                         <option value="Oldest">Oldest</option>
//                         <option value="Newest">Newest</option>
//                     </select>
//                 </div>
//             </div>

//             {podcasts.map((podcast) => (
//                 <div key={podcast.id} className="podcastImage" onClick={() => onPodcastClick(podcast.id)}>
//                     <div className="imgDiv">
//                         <img src={podcast.image} className="img" alt="podcastimage" />
//                     </div>
//                     <div>
//                         <h4>{podcast.title}</h4>
//                         <p>Season: {podcast.seasons}</p>
//                         <p>Genre: {podcast.genre}</p>
//                         <p>Updated: {new Date(podcast.updated).toLocaleDateString("en-US", { day: "numeric", month: "long", year: "numeric" })}</p>
//                     </div>
//                 </div>
//             ))}
//         </div>
//     );
// }

// export default Show;

import React, { useState, useEffect } from 'react';

function Show({ onPodcastClick }) {
    const [podcasts, setPodcasts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [sortOption, setSortOption] = useState(''); // Track the selected sorting option
    const [searchQuery, setSearchQuery] = useState(''); // Track the search query entered by the user

    useEffect(() => {
        // Fetch data from the API
        fetch('https://podcast-api.netlify.app/shows')
            .then((response) => response.json())
            .then((data) => {
                console.log(data); // Check if you're receiving the expected data
                setPodcasts(data);
                setLoading(false);
            })
            .catch((error) => console.log(error));
    }, []);

    // Function to handle clicking on a podcast (you can implement this according to your requirement)
    const handlePodcastClick = (podcastId) => {
        console.log(`Clicked on podcast with ID: ${podcastId}`);
        // Add your logic here to handle the click event
        // For example, you can open a modal or navigate to a specific podcast page.
    };

    // Function to handle sorting based on the selected option
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

    // Function to handle filtering based on the search query when the search button is clicked
    const handleSearch = () => {
        if (searchQuery.trim() !== '') {
            const filteredPodcasts = podcasts.filter((podcast) =>
                podcast.title.toLowerCase().includes(searchQuery.toLowerCase())
            );
            setPodcasts(filteredPodcasts);
        }
    };

    if (loading) {
        return <div>Loading...</div>; // Display a loading state while waiting for the API response
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
                    />
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
                <div key={podcast.id} className="podcastImage" onClick={() => onPodcastClick(podcast.id)}>
                    <div className="imgDiv">
                        <img src={podcast.image} className="img" alt="podcastimage" />
                    </div>
                    <div>
                        <h4>{podcast.title}</h4>
                        <p>Season: {podcast.seasons}</p>
                        <p>Genre: {podcast.genre}</p>
                        <p>Updated: {new Date(podcast.updated).toLocaleDateString("en-US", { day: "numeric", month: "long", year: "numeric" })}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Show;









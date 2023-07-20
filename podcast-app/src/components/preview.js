import React from 'react'

function Show() {
    const [podcasts, setPodcasts] = React.useState([]);
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
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

    if (loading) {
        return <div>Loading...</div>; // Display a loading state while waiting for the API response
    }

    return (

        <div className="previewPodcast">
            {podcasts.map((podcast) => (
                <div key={podcast.id} className="podcastImage">
                    <div className='imgDiv'>
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




// import React from 'react'

// function PreviewPodcast({ podcastId }) {
//     const [podcastDetails, setPodcastDetails] = React.useState(null);
//     const [loading, setLoading] = React.useState(true);

//     React.useEffect(() => {
//         fetch(`https://podcast-api.netlify.app/${podcastId}/`)
//             .then((response) => response.json())
//             .then((data) => {
//                 setPodcastDetails(data);
//                 setLoading(false);
//             })
//             .catch((error) => console.log(error));
//     }, [podcastId]);

//     if (loading) {
//         return <p>Loading podcast details...</p>;
//     }

//     if (!podcastDetails) {
//         return null; // Return null if there are no podcast details
//     }

//     return (
//         <div>
//             {/* Render the podcast details */}
//             <p>Title: {podcastDetails.title}</p>
//             <p>Description: {podcastDetails.description}</p>
//             {/* Add more details as needed */}
//         </div>
//     );
// }
// export default PreviewPodcast;
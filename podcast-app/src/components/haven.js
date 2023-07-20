//------PREVIEW JS -------//

// import React, { useState, useEffect } from 'react';

// function Show({ onPodcastClick }) {
//     const [podcasts, setPodcasts] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [sortOption, setSortOption] = useState(''); // Track the selected sorting option

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

//     if (loading) {
//         return <div>Loading...</div>; // Display a loading state while waiting for the API response
//     }

//     return (
//         <div className="previewPodcast">
//             <div className='form'>

//                 <div>
//                     <input type="text" className='form-search' />
//                 </div>

//                 <button className='form-search' id="submit-search">search</button>
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

//------NAV.JS-------//

// import React from 'react'
// import video from './videos/BG1.mp4';
// import './App.css';
// import NavBar from './components/nav';
// import Show from './components/preview';
// import SinglePodcastPreview from './components/showaudio';

// function App() {
//   const [selectedPodcastId, setSelectedPodcastId] = React.useState(null);
//   const [showShowComponent, setShowShowComponent] = React.useState(true);

//   const handlePodcastClick = (podcastId) => {
//     setSelectedPodcastId(podcastId);
//     setShowShowComponent(false); 
//   };

//   const handleHomeClick = () => {
//     setSelectedPodcastId(null);
//     setShowShowComponent(true);
//   };

//   return (
//     <div>
//       <NavBar handleHomeButtonClick={handleHomeClick} />
//       <video src={video} autoPlay muted loop id="video-background" />
//       {showShowComponent ? (
//         <Show onPodcastClick={handlePodcastClick} />
//       ) : selectedPodcastId ? (
//         <SinglePodcastPreview podcastId={selectedPodcastId} />
//       ) : (
//         <div>Home page content here</div> // You can replace this with your homepage content
//       )}
//     </div>
//   );
// }

// export default App;
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

//------APP.JS-------//

// import React from 'react';
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

//   const navigateToHomePage = () => {

//     setShowShowComponent(true);
//     window.location.href = "http://localhost:3000/";
//   };

//   return (
//     <div>
//       <NavBar handleHomeButtonClick={navigateToHomePage} />
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

//-------SHOWAUDIO.JS---------//

// import React from 'react';
// import axios from 'axios';

// const SinglePodcastPreview = ({ podcastId }) => {
//   const [podcastData, setPodcastData] = React.useState(null);

//   React.useEffect(() => {
//     axios.get(`https://podcast-api.netlify.app/id/${podcastId}`)
//       .then(response => {
//         setPodcastData(response.data);
//       })
//       .catch(error => {
//         console.log('Error fetching podcast details:', error);
//       });
//   }, [podcastId]);

//   if (!podcastData) {
//     return <div className='loadingState'>Loading...</div>;
//   }

//   const { image, title, genre, seasons } = podcastData;

//   return (


//     <div className='podcastImage'>
//       <h1>{title}</h1>
//       <img className='img' src={image} alt={title} />
//       <p>Genre: {genre}</p>


//       <h2 className='h2-seasons'>Seasons</h2>

//       {seasons.map((season, index) => (

//         <div key={index} className='.audio'>
//           <h3>{season.title}</h3>
//           <p>Number of Episodes: {season.episodes.length}</p>
//           <ul>
//             {season.episodes.map((episode, eIndex) => (
//               <li key={eIndex}>
//                 {episode.title}
//                 <audio controls>
//                   <source src={episode.file} type="audio/mpeg" />
//                   Your browser does not support the audio element.
//                 </audio>
//               </li>
//             ))}
//           </ul>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default SinglePodcastPreview;

//-----USERFAVOURITES.JS--------//

// import React from 'react';

// const User = () => {
//   const [favorites, setFavorites] = React.useState([]);
//   const [newFavorite, setNewFavorite] = React.useState('');
//   const [sortingType, setSortingType] = React.useState('name'); // 'name' or 'date'
//   const [sortingOrder, setSortingOrder] = React.useState('ascending'); // 'ascending' or 'descending'

//   const handleAddFavorite = () => {
//     if (newFavorite.trim() === '') return;

//     // Check if the newFavorite already exists in the favorites list
//     if (!favorites.some((fav) => fav.name === newFavorite)) {
//       const newFav = {
//         name: newFavorite,
//         date: new Date(), // Store the date as a JavaScript Date object
//       };
//       setFavorites([...favorites, newFav]);
//       setNewFavorite('');
//     }
//   };

//   const handleRemoveFavorite = (favorite) => {
//     const updatedFavorites = favorites.filter((item) => item.name !== favorite.name);
//     setFavorites(updatedFavorites);
//   };

//   const handleSortingTypeChange = (e) => {
//     setSortingType(e.target.value);
//   };

//   const handleSortingOrderChange = (e) => {
//     setSortingOrder(e.target.value);
//   };

//   const formatDate = (date) => {
//     // Format the date to a simple readable format (e.g., "YYYY-MM-DD HH:MM")
//     const year = date.getFullYear();
//     const month = String(date.getMonth() + 1).padStart(2, '0');
//     const day = String(date.getDate()).padStart(2, '0');
//     const hours = String(date.getHours()).padStart(2, '0');
//     const minutes = String(date.getMinutes()).padStart(2, '0');

//     return `${year}-${month}-${day} ${hours}:${minutes}`;
//   };

//   const sortedFavorites = favorites.slice().sort((a, b) => {
//     if (sortingType === 'name') {
//       if (sortingOrder === 'ascending') {
//         return a.name.localeCompare(b.name);
//       } else {
//         return b.name.localeCompare(a.name);
//       }
//     } else {
//       if (sortingOrder === 'ascending') {
//         return a.date - b.date;
//       } else {
//         return b.date - a.date;
//       }
//     }
//   });

//   return (
//     <div>
//       <h2 className="h2-favourites">User Favorites</h2>
//       <div className="add-favorites">
//         <input
//           type="text"
//           className="input-favours"
//           value={newFavorite}
//           onChange={(e) => setNewFavorite(e.target.value)}
//           placeholder="Enter favorite item"
//         />
//         <button onClick={handleAddFavorite} className="btn-favours">
//           Add Favorite
//         </button>
//       </div>

//       <div className='sort-items'>
//         <label htmlFor="sortingType">Sort by:</label>
//         <select
//           id="sortingType"
//           name="sortingType"
//           value={sortingType}
//           onChange={handleSortingTypeChange}
//         >
//           <option value="name">Name</option>
//           <option value="date">Date</option>
//         </select>

//         <label htmlFor="sortingOrder">Order:</label>
//         <select
//           id="sortingOrder"
//           name="sortingOrder"
//           value={sortingOrder}
//           onChange={handleSortingOrderChange}
//         >
//           <option value="ascending">Ascending</option>
//           <option value="descending">Descending</option>
//         </select>
//       </div>

//       <ul className="ul-favours">
//         {sortedFavorites.map((favorite, index) => (
//           <li key={index} className="li-favours">
//             {favorite.name} (Added on {formatDate(favorite.date)}){' '}
//             <button onClick={() => handleRemoveFavorite(favorite)} className="btn-favours">
//               Remove
//             </button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default User;


















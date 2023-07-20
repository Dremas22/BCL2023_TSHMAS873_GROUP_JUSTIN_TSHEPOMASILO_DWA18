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

//   const handleHomeClick = () => {
//     setSelectedPodcastId(null);
//     setShowShowComponent(true); // Set showShowComponent to true to reload the Show component
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

import React from 'react';
import video from './videos/BG1.mp4';
import './App.css';
import NavBar from './components/nav';
import Show from './components/preview';
import SinglePodcastPreview from './components/showaudio';

function App() {
  const [selectedPodcastId, setSelectedPodcastId] = React.useState(null);
  const [showShowComponent, setShowShowComponent] = React.useState(true);


  const handlePodcastClick = (podcastId) => {
    setSelectedPodcastId(podcastId);
    setShowShowComponent(false);
  };

  // const handleHomeClick = () => {
  //   setSelectedPodcastId(null);
  //   setShowShowComponent(true);
  // };

  const navigateToHomePage = () => {
    // Set showShowComponent to true to reload the Show component
    setShowShowComponent(true);

    // Scroll to the top of the page (optional)
    window.location.href = "http://localhost:3000/";
  };

  

  return (
    <div>
      <NavBar handleHomeButtonClick={navigateToHomePage} />
      <video src={video} autoPlay muted loop id="video-background" />
      {showShowComponent ? (
        <Show onPodcastClick={handlePodcastClick} />
      ) : selectedPodcastId ? (
        <SinglePodcastPreview podcastId={selectedPodcastId} />
      ) : (
        <div>Home page content here</div> // You can replace this with your homepage content
      )}
    </div>
  );
}

export default App;




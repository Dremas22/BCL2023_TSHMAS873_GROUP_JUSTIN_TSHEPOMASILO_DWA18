import React from 'react'
import video from './videos/BG1.mp4';
import './App.css';
import NavBar from './components/nav';
import Show from './components/preview';
import SinglePodcastPreview from './components/showaudio';

// function App() {
//   const [showShowComponent, setShowShowComponent] = React.useState(false);

//   const handleHomeButtonClick = () => {
//     setShowShowComponent(true);
//   };

//   return (

//     <div>
//       <NavBar handleHomeButtonClick={handleHomeButtonClick} />
//       <div className='overlay'></div>
//       <video src={video} autoPlay muted loop id="video-background" />
//       <div className='preview-show'>
//         {showShowComponent && <Show />}
//       </div>
//       <div>
//         {/* <SingleShow showId={showId} /> */}
//       </div>

//     </div>
//   );
// }

function App() {
  const [selectedPodcastId, setSelectedPodcastId] = React.useState(null);
  const [showShowComponent, setShowShowComponent] = React.useState(false);

  const handleHomeButtonClick = () => {
    setSelectedPodcastId(null); // Reset selectedPodcastId when going back to the homepage
    setShowShowComponent(true);
  };

  const handlePodcastClick = (podcastId) => {
    setSelectedPodcastId(podcastId);
    setShowShowComponent(false); // Hide the Show component when a podcast is selected
  };

  return (
    <div>
      <NavBar handleHomeButtonClick={handleHomeButtonClick} />
      <div className='overlay'></div>
      <video src={video} autoPlay muted loop id="video-background" />
      {showShowComponent ? (
        <Show onPodcastClick={handlePodcastClick} />
      ) : (
        <SinglePodcastPreview podcastId={selectedPodcastId} />
      )}
    </div>
  );
}
export default App;

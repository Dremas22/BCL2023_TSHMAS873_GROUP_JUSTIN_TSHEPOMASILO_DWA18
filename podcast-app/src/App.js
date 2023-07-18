import React from 'react'
import video from './videos/BG1.mp4';
import './App.css';
import NavBar from './components/nav';
import Show from './components/preview'
// import PreviewPodcast from './components/showaudio';

function App() {
  const [showShowComponent, setShowShowComponent] = React.useState(false);

  const handleHomeButtonClick = () => {
    setShowShowComponent(true);
  };

  return (
    <div>
      <NavBar handleHomeButtonClick={handleHomeButtonClick} />
      <div className='overlay'></div>
      <video src={video} autoPlay muted loop id="video-background" />
      <div className='preview-show'>
        {showShowComponent && <Show />}
      </div>
      
    </div>
  );
}

export default App;

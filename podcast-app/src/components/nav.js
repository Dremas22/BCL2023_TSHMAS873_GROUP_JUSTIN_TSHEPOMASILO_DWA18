import React from "react" 

export default function NavBar({ handleHomeButtonClick }) {
    const [showNavContainer, setShowNavContainer] = React.useState(false);
  
    const handleMouseLeave = () => {
      setShowNavContainer(false);
    };
  
    const handleMouseEnter = () => {
      setShowNavContainer(true);
    };
  
    return (
      <nav className="nav-cast" onMouseLeave={handleMouseLeave}>
        <div className="title-btn" onMouseEnter={handleMouseEnter}>
          <h3>Try me!</h3>
          <img src="./images/microphone.png" className="mic" alt="mic" />
        </div>
        {showNavContainer && (
          <div className="navContainer">
            <button className="btn-nav" onClick={handleHomeButtonClick}>
              Home
            </button>
            <button className="btn-nav">News</button>
            <button className="btn-nav">Business</button>
            <button className="btn-nav">History</button>
            <button className="btn-nav">Comedy</button>
            <button className="btn-nav">Kids & Family</button>
            <button className="btn-nav">Fiction</button>
          </div>
        )}
        
      </nav>
    );
  }




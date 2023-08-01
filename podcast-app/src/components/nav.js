import React from "react"


export default function NavBar({ handleHomeButtonClick }) {
  const [showNavContainer, setShowNavContainer] = React.useState(false);
  
  const handleMouseLeave = () => {
    setShowNavContainer(false);
  };

  const handleMouseEnter = () => {
    setShowNavContainer(true);
  };

  const handleHomeButtonClickInternal = () => {
    handleHomeButtonClick();
  };

  return (
    <nav className="nav-cast" onMouseLeave={handleMouseLeave}>
      <div className="title-btn" onMouseEnter={handleMouseEnter}>
        <h3>Try me!</h3>
        <img src="./images/microphone.png" className="mic" alt="mic" />
      </div>
      {showNavContainer && (
        <div className="navContainer">
          <button className="btn-nano"></button>  
          <button className="btn-small"></button>
          <button className="btn-medium"></button>
          <button className="btn-nav" onClick={handleHomeButtonClickInternal}>
            Home
          </button>
          
        </div>
      )}
    </nav>
  );
}


import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SinglePodcastPreview = ({ podcastId }) => {
  const [podcastData, setPodcastData] = useState(null);

  useEffect(() => {
    axios.get(`https://podcast-api.netlify.app/id/${podcastId}`)
      .then(response => {
        setPodcastData(response.data);
      })
      .catch(error => {
        console.log('Error fetching podcast details:', error);
      });
  }, [podcastId]);

  if (!podcastData) {
    return <div>Loading...</div>;
  }

  const { image, title, genre, seasons } = podcastData;

  return (
    <div className='show-podcast'>
      <h1>{title}</h1>
      <img className='imgPodcast' src={image} alt={title} />
      <p>Genre: {genre}</p>

      <h2>Seasons</h2>
      {seasons.map((season, index) => (
        <div key={index}>
          <h3>{season.title}</h3>
          <p>Number of Episodes: {season.episodes.length}</p>
          <ul>
            {season.episodes.map((episode, eIndex) => (
              <li key={eIndex}>
                {episode.title}
                <audio controls>
                  <source src={episode.file} type="audio/mpeg" />
                  Your browser does not support the audio element.
                </audio>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default SinglePodcastPreview;

// import React from 'react';
// import axios from 'axios';

// const SinglePodcastPreview = ({ podcastId }) => {
//     const [podcastData, setPodcastData] = React.useState(null);

//     React.useEffect(() => {
//         axios.get(`https://podcast-api.netlify.app/id/${podcastId}`)
//             .then(response => {
//                 setPodcastData(response.data);
//             })
//             .catch(error => {
//                 console.error('Error fetching podcast details:', error);
//             });
//     }, [podcastId]);

//     if (!podcastData) {
//         return <div>Loading...</div>;
//     }

//     const { image, title, genre, seasons } = podcastData;
    
//     return (
//         <div className="podcastImage">
//             <img className='img' src={image} alt={title} />
//             <p>Genre: {genre}</p>

//             <h4>Seasons</h4>
//             {seasons.map((season, index) => (
//                 <div key={index} className='audioDiv'>
//                     <h4>{season.title}</h4>
//                     <p>Number of Episodes: {season.episodes.length}</p>
//                     <div className='wrapper'>
//                         <ul className='audio'>
//                             {season.episodes.map((episode, eIndex) => (
//                                 <li key={eIndex}>
//                                     {episode.title}
//                                     <audio controls>
//                                         <source src={episode.file} type="audio/mpeg" />
//                                         Your browser does not support the audio element.
//                                     </audio>
//                                 </li>
//                             ))}
//                         </ul>
//                     </div>
//                 </div>
//             ))}
//         </div>
//     );
// };

// export default SinglePodcastPreview;



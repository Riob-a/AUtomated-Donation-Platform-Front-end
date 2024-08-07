// import React from 'react';
// import Card from './Card';
// import backgroundimage from '/MainAfter.png';

// function Home() {
//   return (
//     <div className="home">
//       <header className="header">
//         <h1>Fund Girls</h1>
//         <p>Home of the charities</p>
//       </header>
//       <div className="cards-container" style={{ backgroundimage: `url(${backgroundimage})`}}>
//         <Card 
//           title="Charity" 
//           text="Body text for whatever you'd like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story."
//           buttonText="Create"
//         />
//         <Card 
//           title="Donor" 
//           text="Body text for whatever you'd like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story."
//           buttonText="Donate"
//         />
//       </div>
//     </div>
//   );
// }

// export default Home;

import React from 'react';
import Card from './Card';
import backgroundimage from '../image/77bf82886e7e6154f4905c791643185c.jpg'; // Adjust path based on where you place the image
import './Home.css'

function Home() {
  return (
    <div className="home">
      <header className="header">
        <h1>Fund Girls</h1>
        <p>Home of the charities</p>
      </header>
      <div 
        className="background-image"
        style={{ 
          backgroundImage: `url(${backgroundimage})`, // Use backgroundImage with capital I
          backgroundSize: 'cover', // Optional: Adjust background image size
          backgroundPosition: 'center', // Optional: Center the background image
          backgroundRepeat: 'no-repeat', // Optional: Prevent background image from repeating
        }}
      />
      <div className="cards-container">
        <div className='cards'>
          <Card 
            title="Charity" 
            text="Body text for whatever you'd like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story."
            buttonText="Create"
          />
          <Card 
            title="Donor" 
            text="Body text for whatever you'd like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story."
            buttonText="Donate"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;

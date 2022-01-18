// // 1. Import *useState* and *useEffect*
// import React, { useState, useEffect } from "react";

// function Test() {
//   // 2. Create our *dogImage* variable as well as the *setDogImage* function via useState
//   // We're setting the default value of dogImage to null, so that while we wait for the
//   // fetch to complete, we dont attempt to render the image
//   let [dogImage, setDogImage] = useState(null);

//   // 3. Create out useEffect function
//   useEffect(() => {
//     fetch("https://dog.ceo/api/breeds/image/random")
//       .then((response) => response.json())
//       // 4. Setting *dogImage* to the image url that we received from the response above
//       .then((data) => setDogImage(data.message));
//   }, []);

//   return (
//     <div className="test">
//       {/* 5. Using *dogImage as* the *src* for our image*/}
//       {dogImage && <img src={dogImage}></img>}
//     </div>
//   );
// }

// export default Test;

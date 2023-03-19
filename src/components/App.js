import React, { useEffect } from "react";

function App() {
  const [dogImg, setDogImg] = React.useState(null);

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((res) => res.json())
      .then((data) => {
        setDogImg(data.message);
      });
  }, []);

  return (
    <div>
      {dogImg ? <img src={dogImg} alt="A Random Dog" /> : <p>Loading...</p>}
    </div>
  );
}

export default App

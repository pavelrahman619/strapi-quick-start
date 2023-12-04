import axios from "axios";
import { useEffect, useState } from "react";
import RestaurantList from "./components/RestaurantList";

const App = () => {
  const [error, setError] = useState(null);
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:1337/api/restaurants")
      .then(({ data }) => setRestaurants(data.data))
      .catch((error) => setError(error));
  }, []);

  if (error) {
    // Print errors if any
    return <div>An error occured: {error.message}</div>;
  }

  console.log(restaurants);

  return (
    <div className="App">
      <RestaurantList restaurants={restaurants}></RestaurantList>
    </div>
  );
};

export default App;

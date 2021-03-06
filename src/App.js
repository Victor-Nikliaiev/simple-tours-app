import { useState, useEffect } from "react";

import Loading from "./Loading";
import Tours from "./Tours";
import Footer from "./Footer";

const url = "https://course-api.com/react-tours-project";

const App = () => {
  const [tours, setTours] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showFooter, setShowFooter] = useState(true);

  const fetchTours = async () => {
    setIsLoading(true);
    try {
      const res = await fetch(url);
      const tours = await res.json();
      setTours(tours);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };

  const closeFooter = () => {
    setShowFooter(false);
  };

  useEffect(() => {
    fetchTours();
  }, []);
  if (isLoading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }
  if (tours.length === 0) {
    return (
      <main className="container">
        <h1>No Tours</h1>
        <button
          className="btn btn-success btn-lg refresh-btn"
          onClick={fetchTours}
        >
          Refresh
        </button>
        {showFooter && <Footer closeFooter={closeFooter} />}
      </main>
    );
  }
  return (
    <main>
      <Tours tours={tours} removeTour={removeTour} />
      {showFooter && <Footer closeFooter={closeFooter} />}
    </main>
  );
};

export default App;

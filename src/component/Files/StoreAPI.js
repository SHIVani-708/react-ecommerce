import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import "./Store.css";
import StoreApiItem from "./StoreApiItem";
import "./StoreAPI.css";

function Store() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // State variables for form inputs
  const [formData, setFormData] = useState({
    title: "",
    desc: "",
    date: "",
  });

  function SubmitForm(e) {
    e.preventDefault(); // Prevent the default form submission behavior

    // Access form data from the state variables
    const { title, desc, date } = formData;

    // Log the form data to the console
    console.log("Title:", title);
    console.log("Description:", desc);
    console.log("Releasing Date:", date);

    // You can also perform other actions with the form data here, such as sending it to an API.
  }

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        const response = await fetch("https://swapi.dev/api/films");
        const data = await response.json();
        setMovies(data.results);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData(); // Call the fetchData function when the component mounts.
  }, []);

  async function ApiHandler() {
    setIsLoading(true);
    const res = await fetch("https://swapi.dev/api/films");
    const data = await res.json();
    setMovies(data.results);
    setIsLoading(false);
  }

  const movieList = movies.map((item) => (
    <StoreApiItem
      key={item.episode_id}
      id={item.episode_id}
      title={item.title}
      description={item.opening_crawl}
      date={item.release_date}
    />
  ));

  // Event handler to update form input state when the user types
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div>
      <h1>Fetch Your Movies From API</h1>
      <form onSubmit={SubmitForm}>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          name="title"
          id="title"
          value={formData.title}
          onChange={handleInputChange}
        />
        <label htmlFor="desc">Description</label>
        <input
          type="text"
          name="desc"
          id="desc"
          value={formData.desc}
          onChange={handleInputChange}
        />
        <label htmlFor="date">Releasing Date</label>
        <input
          type="date"
          name="date"
          id="date"
          value={formData.date}
          onChange={handleInputChange}
        />
        <input type="submit" value="Submit" />
      </form>
      <Button variant="success" onClick={ApiHandler}>
        Fetch Data
      </Button>
      <div className="container">
        <Table striped bordered hover>
          <tbody>
            {!isLoading && movieList}
            {isLoading && <h3>Loading....</h3>}
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default Store;

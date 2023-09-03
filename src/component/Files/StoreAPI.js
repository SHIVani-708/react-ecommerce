import React, { useState,useEffect } from "react";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import "./Store.css";
import StoreApiItem from "./StoreApiItem";

function Store() {
  const [movies, setMovies] = useState([]);
  const [isLoading,setIsLoading] = useState(false);

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
    const res= await fetch("https://swapi.dev/api/films");
    const data = await res.json();
    setMovies(data.results);
    setIsLoading(false);
  }
  const movieList=movies.map((item) => (
    <StoreApiItem
      id={item.episode_id}
      title={item.title}
      description={item.opening_crawl}
      date={item.release_date}
    />
  ))
  return (
    <div>
      <h1>API Store</h1>
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

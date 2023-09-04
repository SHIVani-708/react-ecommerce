import React, { useState, useEffect,useCallback } from "react";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import "../Files/Store.css";
import StoreApiItem from "./StoreApiItem";
import "./StoreAPI.css";
import AddMovie from "./AddMovie";

function Store() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const APIHandler = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await fetch('https://ecommerce-28246-default-rtdb.firebaseio.com/movies.json');
      if (!response.ok) {
        throw new Error('Something went wrong!');
      }

      const data = await response.json();

      const loadedMovies =[];
      for(const key in data){
        loadedMovies.push({
          episode_id: key,
          title: data[key].title,
          opening_crawl: data[key].openingText,
          release_date: data[key].releaseDate
        })
      }

      setMovies(loadedMovies);
    } catch (error) {
      console.log(error.message);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    APIHandler(); // Call the fetchData function when the component mounts.
  }, [APIHandler]);

 
  const movieList = movies.map((item) => (
    <StoreApiItem
      key={item.episode_id}
      id={item.episode_id}
      title={item.title}
      description={item.opening_crawl}
      date={item.release_date}
    />
  )); 

  async function addMovieHandler(movie){
    const res=await fetch('https://ecommerce-28246-default-rtdb.firebaseio.com/movies.json',{
      method: 'POST',
      body: JSON.stringify(movie),
      headers:{
        'Content-Type': 'application/json'
      }
    });
    const data = await res.json();
    console.log(data)
    setIsLoading(true);

    APIHandler();
  }
  let content = <p>Found no movies.</p>;

  

  if (isLoading) {
    content = <p>Loading...</p>; 
  }
  if (!isLoading) {
    content = <p></p>;
  }

  return (
    <div>
      <h1>Fetch Your Movies From API</h1>
      <AddMovie onAddMovie={addMovieHandler}/>
      <Button variant="success" onClick={APIHandler}>
        Fetch Data
      </Button>
      <div className="container">
        <Table striped bordered hover>
          <tbody>
            {!isLoading && movieList}
            <section>{content}</section>
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default Store;

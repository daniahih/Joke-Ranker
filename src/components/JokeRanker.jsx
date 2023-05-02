import { useEffect, useState } from "react";
import "./JokeRanker.css";
import { AiOutlineLike } from "react-icons/ai";
import { AiOutlineDislike } from "react-icons/ai";
export default function JokeRanker() {
  const [joke, setJoke] = useState([]);
  const fetchJoke = () => {
    fetch("https://api.api-ninjas.com/v1/jokes?limit=1", {
      method: "GET",
      headers: { "X-Api-Key": "hP/aoODS/d6JKlt7xpfvBw==vs16p5dcvHogrHFN" },
      contentType: "application/json",
    })
      .then((response) => response.json())
      .then((data) => {
        setJoke([...data]);
        console.log(data); // Add this line to see the data in console log
      });
  };
  useEffect(() => {
    fetchJoke();
  }, []);
  return (
    <>
      <h1>Welcome to JokeRanker App</h1>
      <div className="contanier">
        <div>
          <div className="Joke">
            {joke.map((e) => {
              return <>{e.joke}</>;
            })}
          </div>
          <div className="Button">
            <button>
              <AiOutlineLike />
            </button>
            <button>
              <AiOutlineDislike />
            </button>
          </div>

          <span>Likes: Dislikes:</span>
        </div>
      </div>
    </>
  );
}

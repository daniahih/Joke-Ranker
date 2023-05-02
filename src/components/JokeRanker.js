import React, { useState } from "react";

const JokeRanker = () => {
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);

  const handleLike = () => {
    setLikes(likes + 1);
  };

  const handleDislike = () => {
    setDislikes(dislikes + 1);
  };

  return (
    <div>
      <button onClick={handleLike}>Like</button>
      <button onClick={handleDislike}>Dislike</button>
      <br />
      <p>Likes: {likes}</p>
      <p>Dislikes: {dislikes}</p>
    </div>
  );
};

export default JokeRanker;

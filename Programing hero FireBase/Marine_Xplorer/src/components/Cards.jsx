import React, { useEffect, useState } from "react";
import Card from "./Card";

const Cards = () => {
  const [allcards, setAllCards] = useState([]);
  useEffect(() => {
    fetch("/card.json")
      .then((res) => res.json())
      .then((data) => setAllCards(data.adventures));
  }, []);
  console.log(allcards);
  return (
    <div className="gap-2 md:w-9/12 grid grid-cols-1 sm:w-full mx-auto sm:grid-cols-2 md:grid-cols-3">
      {allcards?.map((cards) => (
        <Card key={cards.id} card={cards}></Card>
      ))}
    </div>
  );
};

export default Cards;

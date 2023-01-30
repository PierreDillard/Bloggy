import React, { useState } from "react";
import Header from "../Header/Header";
import Card from "../Card/Card";
import "./ArtGallery.css";
import { click } from "@testing-library/user-event/dist/click";

const data = [
{ id: 1, title: "Actualités" },
{ id: 2, title: "Sport" },
{ id: 3, title: "Théatre" },
{ id: 4, title: "Actualités" },
{ id: 5, title: "Sport" },
{ id: 6, title: "Théatre" },
{ id: 7, title: "Actualités" },
{ id: 8, title: "Sport" },
{ id: 9, title: "Théatre" },
];

export default function ArtGallery() {
const [cardNumbers, setCardNumbers] = useState(3);

/* function qui ajoute 3 Card au click */
const handleShowMore = () => {
setCardNumbers(cardNumbers + 3);
};

return (
<React.Fragment>
<div className="art-gallery__container">
<Header />
<div className="art-gallery__card__container">
{data.slice(0, cardNumbers).map((item) => (
<Card key={item.id} title={item.title} />
))}
</div>

{/* Si on a plus de 3 Card à afficher, on affiche le bouton "Afficher plus" */}

{cardNumbers < data.length && (
<button className="art-gallery__button__more" onClick={handleShowMore}>
Afficher plus
</button>
)}
</div>
</React.Fragment>
);
}





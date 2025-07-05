"use client"
import { useState } from "react";

export default function Home() {
  const flashCards = [
    { question: "Main Stack?", answer: "MERN" },
    { question: "A language I'd like to learn?", answer: "Rust" },
    { question: "School attended?", answer: "Unizik" },
    { question: "Preferred web framework?", answer: "Next.js" },
    { question: "Favourite color?", answer: "Purple" },
    { question: "Would like to also be?", answer: "A Blockchain Dev" }
  ];
  const [shown, setShown] = useState(-1);

  function twirlCardDom(index) {
    document.getElementById('cards').childNodes.forEach((card, ind) => {
      if(ind == index) {
        if(card.querySelector('#f').classList.contains('hq')) {
          card.querySelector('#f').classList.remove('hq');
          card.querySelector('#b').classList.remove('sa');
          return;
        }
        
        card.querySelector('#f').classList.add('hq');
        card.querySelector('#b').classList.add('sa');
      }
      else {
        card.querySelector('#f').classList.remove('hq');
        card.querySelector('#b').classList.remove('sa');
      }
    });
  }

  return(
    <>
      <h1 className="text-3xl text-center mt-5">Using Dom manipulation</h1>
      <ul id="cards" className="grid grid-cols-3 p-5 gap-4">
        { flashCards.map((flashcard, index) => (
          <li id="card" key={index} className="relative" onClick={() => twirlCardDom(index)}>
            <div
            id="f"
            className="cursor-pointer px-4 py-10 rounded-xl text-center bg-red-400 mb-4 absolute w-full"
            >
              {flashcard.question}
            </div>
            <div
            id="b"
            className="cursor-pointer px-4 py-10 rounded-xl text-center bg-green-400 rotate-y-90"
            >
              {flashcard.answer}
            </div>
          </li>
        ))}
      </ul>

      <h1 className="text-3xl text-center mt-5">React State Based</h1>
      <ul className="grid grid-cols-3 p-5 gap-4">
        { flashCards.map((flashcard, index) => (
          <li id="card" key={index} className="relative">
            { index == shown ? 
              <div
              className="cursor-pointer px-4 py-10 rounded-xl text-center bg-green-400 rotate-y-90 sa"
              onClick={() => setShown(-1)}
              >
                {flashcard.answer}
              </div> :
              <div
              className="cursor-pointer px-4 py-10 rounded-xl text-center bg-red-400 mb-4"
              onClick={e => e.target.classList.add('hq')}
              onAnimationEnd={() => setShown(index)}
              >
                {flashcard.question}
              </div>
            }
          </li>
        ))}
      </ul>
    </>
  )
}

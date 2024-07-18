import "bootstrap";
import "./style.css";
import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
import { left } from "@popperjs/core";

window.onload = () => {
  function generateRandomNumber() {
    let numbers = ["2", "3", "4", "5", "6", "7", "8", "9", "J", "Q", "K", "A"];
    let randomNumber = Math.floor(Math.random() * numbers.length);
    return numbers[randomNumber];
  }

  function generateRandomSuit() {
    let suit = ["♦", "♥", "♠", "♣"];
    let randomSuit = Math.floor(Math.random() * suit.length);
    return suit[randomSuit];
  }

  document.querySelector(".card-number").innerHTML = generateRandomNumber();
  let topSuit = generateRandomSuit();
  document.querySelector(".card-suit-top").innerHTML = topSuit;
  document.querySelector(".card-suit-bottom").innerHTML = topSuit;
};

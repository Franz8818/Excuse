/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let who = ["the dog", "my granma", "his turtle", "my bird"];
  let what = ["eat", "pissed", "crushed", "broked"];
  let object = ["my homework", "my work", "my phone", "my girlfriend"];
  let when = [
    "before the class",
    "right in time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];
  let who1 = Math.floor(Math.random() * who.length);
  let what1 = Math.floor(Math.random() * what.length);
  let object1 = Math.floor(Math.random() * object.length);
  let when1 = Math.floor(Math.random() * when.length);

  document.getElementById("excuse").innerHTML =
    who[who1] + " " + what[what1] + " " + object[object1] + " " + when[when1];
};

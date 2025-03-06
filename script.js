document.addEventListener("DOMContentLoaded", () => {
  // Card Options
  const cardArray = [
    {
      name: "flower1",
      img: "img/image1.JPG",
    },
    {
      name: "flower1",
      img: "img/image1.JPG",
    },

    {
      name: "flower2",
      img: "img/image2.JPG",
    },
    {
      name: "flower2",
      img: "img/image2.JPG",
    },
    {
      name: "flower3",
      img: "img/image3.JPG",
    },
    {
      name: "flower3",
      img: "img/image3.JPG",
    },

    {
      name: "flower4",
      img: "img/image4.JPG",
    },
    {
      name: "flower4",
      img: "img/image4.JPG",
    },
    {
      name: "flower5",
      img: "img/image5.JPG",
    },
    {
      name: "flower5",
      img: "img/image5.JPG",
    },
    {
      name: "flower6",
      img: "img/image6.JPG",
    },
    {
      name: "flower6",
      img: "img/image6.JPG",
    },
    {
      name: "flower7",
      img: "img/image7.JPG",
    },
    {
      name: "flower7",
      img: "img/image7.JPG",
    },
    {
      name: "flower8",
      img: "img/image8.JPG",
    },
    {
      name: "flower8",
      img: "img/image8.JPG",
    },
  ];

  cardArray.sort(() => 0.5 - Math.random());

  const grid = document.querySelector(".grid");
  const resultDisplay = document.querySelector("#result");
  const guesses = document.querySelector("#guesses");
  // const message = document.querySelector(".message");
  var cardsChosen = [];
  var cardsChosenId = [];
  console.log("CardsChosenId", cardsChosenId);
  var cardsWon = [];
  var noOfGuesses = 0;

  //   Create Your Board

  function createBoard() {
    for (let i = 0; i < cardArray.length; ++i) {
      var card = document.createElement("img");

      card.setAttribute("src", "img/image9.JPG");
      card.setAttribute("data-id", i);
      card.style.width = "100px";
      card.style.height = "100px";
      card.style.margin = "5px";
      card.style.borderRadius = "10px";
      document.getElementsByTagName("img").classname = "Fade";
      // card.className.add("fade");
      card.addEventListener("click", flipCard);
      grid.appendChild(card);
      // requestPostAnimationFrame(() => (card.className = "fade"));
    }
  }

  // check for matches

  function checkForMatch() {
    console.log("CardsChosenId", cardsChosenId);

    var cards = document.querySelectorAll("img");
    const optionOneId = cardsChosenId[0];
    const optionTwoId = cardsChosenId[1];
    if (cardsChosen[0] === cardsChosen[1]) {
      displayMessage("You Found a Match");
      cards[optionOneId].setAttribute("src", "img/image10.JPG");
      cards[optionTwoId].setAttribute("src", "img/image10.JPG");
      cardsWon.push(cardsChosen);
    } else {
      cards[optionOneId].setAttribute("src", "img/image9.JPG");
      cards[optionTwoId].setAttribute("src", "img/image9.JPG");
      noOfGuesses = noOfGuesses + 1;
      displayMessage("Sorry Try again");
      // alert("sorry try again");
    }
    cardsChosen = [];
    cardsChosenId = [];
    resultDisplay.textContent = cardsWon.length;
    if (cardsWon.length === cardArray.length / 2) {
      displayMessage("Congratulations you have found them all");
      guesses.innerHTML = noOfGuesses;
    }
  }

  //   flip card
  function flipCard() {
    var cardId = this.getAttribute("data-id");
    cardsChosen.push(cardArray[cardId].name);
    cardsChosenId.push(cardId);

    if (cardsChosenId.length === 2 && cardsChosenId[0] === cardsChosenId[1]) {
      // removes last entry from arrays if same card selected consectively
      cardsChosen.pop();
      cardsChosenId.pop();
      displayMessage("cannot select same card in succesion");
    } else {
      this.setAttribute("src", cardArray[cardId].img);
      console.log(this);
      // if two different cards have been selected
      if (cardsChosen.length === 2) {
        setTimeout(checkForMatch, 1000);
      }
    }
  }
  createBoard();
});

function displayMessage(MessageText) {
  const message = document.querySelector(".message");
  message.innerHTML = MessageText;
  setTimeout(function () {
    message.innerHTML = "";
  }, 3000);
}

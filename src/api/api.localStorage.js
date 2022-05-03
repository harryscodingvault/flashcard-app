import { nanoid } from "nanoid";

// Utils
const checkIfDeckExist = (deckId) => {
  try {
    const decks = JSON.parse(localStorage.getItem("decks"));
    const currentDeckIndex = decks.map((item) => item.id).indexOf(deckId);

    if (currentDeckIndex !== -1) {
      return { deck: decks[currentDeckIndex], index: currentDeckIndex };
    }
  } catch (err) {
    throw new Error("Something spicy is going on, no eggs for easter fella!!");
  }
};

const checkIfCardExist = (cardId) => {
  try {
    const decks = JSON.parse(localStorage.getItem("decks"));
    const currentDeck = decks.find((deck) =>
      deck.cards.find((item) => item.id === cardId)
    );
    const currentDeckIndex = checkIfDeckExist(currentDeck.id);
    const currentCardIndex = currentDeck.cards
      .map((item) => item.id)
      .indexOf(cardId);

    if (currentCardIndex !== -1) {
      return {
        card: currentDeck.cards[currentCardIndex],
        index: currentCardIndex,
        deckId: currentDeck.id,
        deckIndex: currentDeckIndex.index,
      };
    }
  } catch (err) {
    throw new Error("Something spicy is going on, no eggs for easter fella!!");
  }
};

// DECKS API
export const getDecks = () => {
  try {
    //localStorage.clear();
    const decks = JSON.parse(localStorage.getItem("decks"));
    return decks;
  } catch (err) {
    throw new Error("Cannot get decks");
  }
};

export const getDeck = (deckId) => {
  try {
    return checkIfDeckExist(deckId).deck;
  } catch (err) {
    throw new Error("Cannot get decks");
  }
};

export const createDeck = (deckInfo) => {
  try {
    const { name, description } = deckInfo;
    const decks = JSON.parse(localStorage.getItem("decks"));

    if (decks !== null) {
      localStorage.setItem(
        "decks",
        JSON.stringify([
          ...decks,
          { id: nanoid(), name: name, description: description, cards: [] },
        ])
      );
    } else {
      localStorage.setItem(
        "decks",
        JSON.stringify([
          { id: nanoid(), name: name, description: description, cards: [] },
        ])
      );
    }
  } catch (err) {
    throw new Error("Cant create deck");
  }
};

export const editDeck = (deckInfo) => {
  try {
    const { id, name, description } = deckInfo;
    const decks = JSON.parse(localStorage.getItem("decks"));
    const currentDeck = checkIfDeckExist(id);
    const updatedDeck = {
      id: id,
      name: name,
      description: description,
      cards: currentDeck.deck.cards,
    };
    decks[currentDeck.index] = updatedDeck;
    localStorage.setItem("decks", JSON.stringify(decks));
  } catch (err) {
    throw new Error("Cannot edit deck");
  }
};

export const deleteDeck = (deckId) => {
  const currentDeck = checkIfDeckExist(deckId);
  const decks = JSON.parse(localStorage.getItem("decks"));
  decks.splice(currentDeck.index, 1);
  localStorage.setItem("decks", JSON.stringify(decks));
};

// CARDS API

export const getCard = (deckId, cardId) => {
  try {
    const currentCard = checkIfCardExist(deckId, cardId);
    return currentCard.card;
  } catch (err) {
    throw new Error("Cannot get card :(");
  }
};

export const createCard = (deckId, cardInfo) => {
  try {
    const { front, back } = cardInfo;
    const decks = JSON.parse(localStorage.getItem("decks"));
    let currentDeck = checkIfDeckExist(deckId);
    const newCard = {
      id: nanoid(),
      front: front,
      back: back,
    };
    console.log("card info", cardInfo);

    currentDeck.deck.cards.push(newCard);
    console.log(" currentDeck.deck", currentDeck.deck);
    decks[currentDeck.index] = currentDeck.deck;
    localStorage.setItem("decks", JSON.stringify(decks));
  } catch (err) {
    throw new Error("Could not create card ;(");
  }
};

export const editCard = (cardInfo) => {
  try {
    const { id, front, back } = cardInfo;
    const decks = JSON.parse(localStorage.getItem("decks"));
    const currentCard = checkIfCardExist(id);
    const currentDeck = checkIfDeckExist(currentCard.deckId);
    const updatedCard = {
      id: id,
      front: front,
      back: back,
    };
    currentDeck.deck.cards[currentCard.index] = updatedCard;
    decks[currentDeck.index] = currentDeck.deck;
    localStorage.setItem("decks", JSON.stringify(decks));
  } catch (err) {
    throw new Error("Could not edit card :(");
  }
};

export const deleteCard = (cardId) => {
  try {
    const currentCard = checkIfCardExist(cardId);
    const decks = JSON.parse(localStorage.getItem("decks"));

    decks[currentCard.deckIndex].cards.splice(currentCard.index, 1);

    localStorage.setItem("decks", JSON.stringify(decks));
  } catch (err) {
    throw new Error("Could not delete card :(");
  }
};

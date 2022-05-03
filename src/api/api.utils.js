export const checkIfDeckExist = (deckId) => {
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

export const checkIfCardExist = (cardId) => {
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

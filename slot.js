document.getElementById("spin-button").addEventListener("click", function () {
    const slots = document.querySelectorAll(".slot");

    //if (!firstInit) {
       // const arr = [];
        //for (let n = 0; n < (groups > 0 ? groups : 1); n++) {
          //arr.push(...items);
        //}
        //pool.push(...shuffle(arr));

    slots.forEach(slot => {
        // Generate a random index to select a new emoji/item
        const emojis = ["😀", "😎", "🚀", "🌟", "🎉", "🍕", "🍔", "🍦", "🍩", "🍰", "🍁", "🍂", "🌷", "🌲", "🌺", "🐶", "🐱", "🐭", "🐰", "🐻", "⚽", "🏀", "🎾", "🏈", "🏆"];
        const randomIndex = Math.floor(Math.random() * emojis.length);

        // Set the inner text of the slot to the randomly selected emoji/item
        slot.innerText = emojis[randomIndex];
    });
});

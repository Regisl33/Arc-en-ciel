const display = {
  lobby: function () {
    app.innerHTML = `
    <div class="lobby">
      <div id="addSong" class="add-container">
        <h2>Add</h2>
        <i class="fa-solid fa-plus"></i>
      </div>
      <div id="randomSong" class="random-container">
        <h2>Randomize</h2>
        <i class="fa-solid fa-rotate"></i>
      </div>
    </div>
    `;
  },
};
// display.lobby();

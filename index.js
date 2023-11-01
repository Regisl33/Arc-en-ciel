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
  addSongDisplay: function () {
    app.innerHTML = `
      <div class="addSong" id="addSong">
        <h2>Add a Song</h2>
        <form action="">
          <label for="number">Number :</label>
          <input
            type="text"
            id="number"
            placeholder="123"
            maxlength="3"
            required
          />
          <label for="title">Title :</label>
          <input
            type="text"
            id="title"
            placeholder="Entre the title of the song"
            required
          />
          <button type="submit">Add +</button>
        </form>
      </div>
    `;
  },
};
// display.lobby();
// display.addSongDisplay();

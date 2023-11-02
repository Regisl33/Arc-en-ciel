let data = [];
let dataDisplay = [];

class Song {
  constructor(id, num, title) {
    this.id = id;
    this.num = num;
    this.title = title;
  }
}

const utils = {
  createSong: function () {
    let id, num, title, song;
    id = data.length;
    num = number.value;
    title = titleInput.value;
    song = new Song(id, num, title);
    data.push(song);
    console.log(data);
    localStorage.songs = JSON.stringify(data);
  },
  displayRandomSong: function () {
    output.innerHTML = dataDisplay
      .map(
        (song) => `
    <li>${song.num} : ${song.title}</li>
    `
      )
      .join("");
  },
  getRandomSong: function () {
    let value = "";
    for (let i = 0; i < range.value; i++) {
      let x = Math.floor(Math.random() * data.length);
      value = data[x];
      dataDisplay.push(value);
    }
    utils.displayRandomSong();
  },
};

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
    addSong.addEventListener("click", this.addSongDisplay);
    randomSong.addEventListener("click", this.randomSongDisplay);
  },
  addSongDisplay: function () {
    app.innerHTML = `
      <div class="addSong">
        <h2>Add a Song</h2>
        <form id="form" action="">
          <label for="number">Number :</label>
          <input
            type="text"
            id="number"
            placeholder="123"
            maxlength="3"
            required
          />
          <label for="titleInput">Title :</label>
          <input
            type="text"
            id="titleInput"
            placeholder="Entre the title of the song"
            required
          />
          <button type="submit">Add +</button>
        </form>
        <button id="switchButton" class="random">Randomize <i class="fa-solid fa-rotate"></i></button>
      </div>
    `;
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      utils.createSong();
      number.value = "";
      titleInput.value = "";
    });
    switchButton.addEventListener("click", display.randomSongDisplay);
  },
  randomSongDisplay: function () {
    app.innerHTML = `
    <div class="randomSong">
      <h2>Get Random Songs</h2>
      <input id="range" type="range" value="5" min="1" max="15" />
      <span id="rangeDisplay">5</span>
      <button id="random">Randomize <i class="fa-solid fa-rotate"></i></button>
      <ul id="output"></ul>
    </div>
    `;
    range.addEventListener("input", () => {
      rangeDisplay.textContent = range.value;
    });
    random.addEventListener("click", utils.getRandomSong);
  },
};
display.lobby();
(() => {
  if (localStorage.songs) data = JSON.parse(localStorage.songs);
})();

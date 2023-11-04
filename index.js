let data = [];
let dataDisplay = [];

class Song {
  constructor(num, title) {
    this.num = num;
    this.title = title;
  }
}

const utils = {
  createSong: function () {
    let num,
      title,
      song,
      unique = true;
    num = number.value;
    title = titleInput.value;
    song = new Song(num, title);
    data.map((data) => {
      if (data.num === song.num) unique = false;
    });
    if (unique) {
      data.push(song);
    } else {
      alert("This song already exists and must be unique!");
    }
    localStorage.songs = JSON.stringify(data);
  },
  displayRandomSong: function () {
    output.innerHTML = dataDisplay
      .map(
        (song) => `
    <li>${song[0].num} : ${song[0].title}</li>
    `
      )
      .join("");
  },
  randomizeSongs: function (array) {
    const newArray = [...array];
    const lenght = newArray.length;

    for (let start = 0; start < lenght; start++) {
      const randomPosition = Math.floor(
        (newArray.length - start) * Math.random()
      );
      const randomItem = newArray.splice(randomPosition, 1);

      newArray.push(randomItem);
    }
    dataDisplay = newArray.slice(0, range.value);
  },
  getRandomSong: function () {
    utils.randomizeSongs(data);
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

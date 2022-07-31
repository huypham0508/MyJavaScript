const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const song = $("#song");
const render = $(".render");
const btnPlay = $(".play");
const range = $("#range");
const appMusic = {
  isPlaying: false,
  songs: [
    {
      image:
        "https://images.unsplash.com/photo-1644982647869-e1337f992828?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
      name: "Holo",
      url: "./music/holo.mp3",
    },
    {
      image:
        "https://images.unsplash.com/photo-1659203217345-f9320c023dad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxN3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
      name: "Home",
      url: "./music/home.mp3",
    },
    {
      image:
        "https://images.unsplash.com/photo-1644982647970-e72b0397e57b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwyNXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
      name: "Summer",
      url: "./music/mp3_music_summer.mp3",
    },
    {
      image:
        "https://images.unsplash.com/photo-1644982647869-e1337f992828?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
      name: "Holo",
      url: "./music/holo.mp3",
    },
    {
      image:
        "https://images.unsplash.com/photo-1659203217345-f9320c023dad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxN3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
      name: "Home",
      url: "./music/home.mp3",
    },
    {
      image:
        "https://images.unsplash.com/photo-1644982647970-e72b0397e57b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwyNXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
      name: "Summer",
      url: "./music/mp3_music_summer.mp3",
    },
    {
      image:
        "https://images.unsplash.com/photo-1644982647869-e1337f992828?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
      name: "Holo",
      url: "./music/holo.mp3",
    },
    {
      image:
        "https://images.unsplash.com/photo-1659203217345-f9320c023dad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxN3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
      name: "Home",
      url: "./music/home.mp3",
    },
    {
      image:
        "https://images.unsplash.com/photo-1644982647970-e72b0397e57b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwyNXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
      name: "Summer",
      url: "./music/mp3_music_summer.mp3",
    },
    {
      image:
        "https://images.unsplash.com/photo-1644982647869-e1337f992828?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
      name: "Holo",
      url: "./music/holo.mp3",
    },
    {
      image:
        "https://images.unsplash.com/photo-1659203217345-f9320c023dad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxN3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
      name: "Home",
      url: "./music/home.mp3",
    },
    {
      image:
        "https://images.unsplash.com/photo-1644982647970-e72b0397e57b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwyNXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
      name: "Summer",
      url: "./music/mp3_music_summer.mp3",
    },
  ],
  render: function () {
    const htmls = this.songs.map((song) => {
      return `
        <div class="list-items">
            <div class="list-image">
            <img src="${song.image}" alt="" />
            </div>
            <h3 class="list-name">${song.name}</h3>
        </div>
        <audio class="list-audio" src="${song.url}"></audio>
        `;
    });
    return (render.innerHTML = htmls.join(""));
  },
  handleEvents: function () {
    const scroll = document.addEventListener("scroll", function () {
      const getScroll = window.scrollY || document.documentElement.scrollTop;
      const thumb = $(".music-thumb");
      const thumbWidth = thumb.offsetWidth;
      if (getScroll == 0) {
        thumb.style.height = 100 + "px";
        thumb.style.width = 100 + "px";
        thumb.style.opacity = 1;
      } else {
        const newWidth = thumbWidth - getScroll;
        thumb.style.height = newWidth > 0 ? newWidth + "px" : 0;
        thumb.style.width = newWidth > 0 ? newWidth + "px" : 0;
        thumb.style.opacity = newWidth / thumbWidth;
      }
    });
  },
  loadCurrentSong: function () {
    let currentName = "Holo";
    let currentUrl = "./music/holo.mp3";
    let currentImg =
      "https://images.unsplash.com/photo-1644982647869-e1337f992828?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60";

    $(".music-name").textContent = currentName;
    $(".music-img").src = currentImg;
    song.src = currentUrl;
  },
  playSong: function () {
    const _this = this;

    btnPlay.addEventListener("click", () => {
      const tooglePlay = $(".play-icon");
      tooglePlay.classList.toggle("playing");

      const tooglePause = $(".pause-icon");
      tooglePause.classList.toggle("playing");

      if (_this.isPlaying) {
        _this.isPlaying = false;
        song.pause();
      } else {
        _this.isPlaying = true;
        song.play();
      }
    });

    song.addEventListener("timeupdate", () => {
      if (song.duration) {
        const time = Math.floor((song.currentTime / song.duration) * 100);
        range.value = time;
      }
    });
    range.addEventListener("change", (e) => {
      const currentTime = (song.duration / 100) * e.target.value;
      song.currentTime = currentTime;
    });
  },
  start: function () {
    this.render();
    this.handleEvents();
    this.loadCurrentSong();
    this.playSong();
  },
};
appMusic.start();

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const song = $("#song");
const render = $(".render");
const btnPlay = $(".play");
const range = $("#range");
const nextSong = $(".play-forward");
const backSong = $(".play-back");
const repeatSong = $(".play-repeat");
const ramdomSong = $(".play-infinite");
const thumbAnimation = $(".music-img");
const tooglePause = $(".pause-icon");
const tooglePlay = $(".play-icon");
const appMusic = {
  isPlaying: false,
  isRamdom: false,
  isRepeat: false,
  currenIndex: 0,
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
  ],
  // render data music
  render: function () {
    const htmls = this.songs.map((song, index) => {
      return `
        <div class="list-items ${index === this.currenIndex ? "active" : ""}">
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
  defineProperties: function () {
    Object.defineProperty(this, "currentSong", {
      get: function () {
        return this.songs[this.currenIndex];
      },
    });
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
  // get current music
  loadCurrentSong: function () {
    let currentName = this.currentSong.name;
    let currentUrl = this.currentSong.url;
    let currentImg = this.currentSong.image;
    $(".music-name").textContent = currentName;
    $(".music-img").src = currentImg;
    song.src = currentUrl;
  },
  back: function () {
    const test = this.currenIndex--;
    if (this.currenIndex < 0) {
      this.currenIndex = this.songs.length - 1;
    }
    this.loadCurrentSong();
  },
  next: function () {
    this.currenIndex++;
    if (this.currenIndex >= this.songs.length) {
      this.currenIndex = 0;
    }
    this.loadCurrentSong();
  },
  ramdom: function () {
    let newIndex;
    do {
      // newIndex = Math.floor(Math.ramdom() * this.songs.length);
      newIndex = Math.floor(Math.floor(Math.random() * this.songs.length));
    } while (newIndex === this.currenIndex);
    this.currenIndex = newIndex;
    this.loadCurrentSong();
  },
  repeat: function () {
    let newIndex;
    newIndex = this.currenIndex;
    this.currenIndex = newIndex;
    console.log(newIndex, this.currenIndex);
    this.loadCurrentSong();
  },
  // play music, pause music and resume music, rotate cd
  playSong: function () {
    const _this = this;

    const animation = thumbAnimation.animate(
      [{ transform: "rotate(360deg)" }],
      {
        duration: 10000,
        iterations: Infinity,
      }
    );
    animation.pause();
    btnPlay.addEventListener("click", () => {
      tooglePlay.classList.toggle("playing");
      tooglePause.classList.toggle("playing");
      if (_this.isPlaying) {
        _this.isPlaying = false;
        song.pause();
        animation.pause();
      } else {
        _this.isPlaying = true;
        song.play();
        animation.play();
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
    nextSong.addEventListener("click", () => {
      if (_this.isRamdom) {
        _this.ramdom();
        song.play();
        _this.isPlaying = true;
        song.play();
        animation.play();
        tooglePlay.classList.add("playing");
        tooglePause.classList.remove("playing");
        _this.render();
        // } else if (_this.isRepeat) {
        //   _this.repeat();
        //   song.play();
        //   _this.isPlaying = true;
        //   song.play();
        //   animation.play();
        //   tooglePlay.classList.add("playing");
        //   tooglePause.classList.remove("playing");
      } else {
        _this.next();
        song.play();
        _this.isPlaying = true;
        animation.play();
        tooglePlay.classList.add("playing");
        tooglePause.classList.remove("playing");
        _this.render();
      }
    });
    backSong.addEventListener("click", () => {
      if (_this.isRamdom) {
        _this.ramdom();
        song.play();
        _this.isPlaying = true;
        song.play();
        animation.play();
        tooglePlay.classList.add("playing");
        tooglePause.classList.remove("playing");
        _this.render();
      } else {
        _this.back();
        song.play();
        _this.isPlaying = true;
        song.play();
        animation.play();
        tooglePlay.classList.add("playing");
        tooglePause.classList.remove("playing");
        _this.render();
      }
    });
    repeatSong.addEventListener("click", function (e) {
      console.log("repeatSong");
      _this.isRepeat = !_this.isRepeat;
      repeatSong.classList.toggle("active", _this.isRepeat);
    });
    ramdomSong.addEventListener("click", function (e) {
      console.log("ramdomSong");
      _this.isRamdom = !_this.isRamdom;
      ramdomSong.classList.toggle("active", _this.isRamdom);
    });
    song.addEventListener("ended", function () {
      setTimeout(function () {
        if (_this.isRepeat) {
          _this.repeat();
          song.play();
          _this.isPlaying = true;
          song.play();
          animation.play();
          tooglePlay.classList.add("playing");
          tooglePause.classList.remove("playing");
        } else {
          nextSong.click();
          _this.render();
        }
      }, 500);
    });
  },
  chooseSongs: function () {
    const _this = this;
    const items = $$(".list-items");
    const itemsImg = $$(".list-image > img");
    const itemsAudio = $$(".list-audio");
    const itemsName = $$(".list-name");

    const animation = thumbAnimation.animate(
      [{ transform: "rotate(360deg)" }],
      {
        duration: 10000,
        iterations: Infinity,
      }
    );
    animation.pause();
    for (let i = 0; i < items.length; i++) {
      items[i].addEventListener("click", () => {
        $(".music-img").src = itemsImg[i].src;
        $(".music-name").textContent = itemsName[i].innerHTML;
        song.src = itemsAudio[i].src;
        song.play();
        _this.isPlaying = true;
        animation.play();
        tooglePlay.classList.add("playing");
        tooglePause.classList.remove("playing");

        const checkActive = $(".list-items.active");
        checkActive.classList.remove("active");
        items[i].classList.toggle("active");
      });
    }
  },
  start: function () {
    this.render();
    this.defineProperties();
    this.handleEvents();
    this.loadCurrentSong();
    this.playSong();
    this.chooseSongs();
  },
};
appMusic.start();

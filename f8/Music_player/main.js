var $ = document.querySelector.bind(document);
var $$ = document.querySelectorAll.bind(document);
const PLAYER_STORAGE_KEY = 'phongtran'

const player = $('.player')
const heading = $('header h2')
const cdThumb = $('.cd-thumb')
const audio = $('#audio')
const cd = $('.cd')
const playBtn = $('.btn-toggle-play')
const progress = $('#progress')
const nextBtn = $('.btn-next')
const prevBtn = $('.btn-prev')
const randomBtn = $('.btn-random')
const repeatBtn = $('.btn-repeat')
const playlist = $('.playlist')
const volume = $('.volume')

const app = {
  currentIndex: 0,
  isPlaying: false,
  isRandom: false,
  isRepeat: false,
  volume: 1,
  config: JSON.parse(localStorage.getItem(PLAYER_STORAGE_KEY)) || {},
  songs: [
      {
        name: 'Birds',
        singer: 'Imagine Dragons',
        path: './assets/music/song1.mp3',
        image: './assets/img/song1.jpg'
      },
      {
        name: 'East of Eden',
        singer: 'Zella Day',
        path: './assets/music/song2.mp3',
        image: './assets/img/song2.jpg'
      },
      {
        name: 'Something just like this',
        singer: 'The Chainsmokers & Coldplay',
        path: './assets/music/song3.mp3',
        image: './assets/img/song3.jpg'
      },
      {
        name: 'Thức giấc',
        singer: 'Da LAB',
        path: './assets/music/song4.mp3',
        image: './assets/img/song4.jpg'
      },
      {
        name: 'Leave a light on',
        singer: 'Tom Walker',
        path: './assets/music/song5.mp3',
        image: './assets/img/song5.jpg'
      },
      {
        name: 'You\'re Somebody Else',
        singer: 'Flora Cash',
        path: './assets/music/song6.mp3',
        image: './assets/img/song6.jpg'
      },
      {
        name: 'Safe and sound',
        singer: 'Taylor Swift',
        path: './assets/music/song7.mp3',
        image: './assets/img/song7.jpg'
      },
      {
        name: 'Bước qua nhạu',
        singer: 'Vũ.',
        path: './assets/music/song8.mp3',
        image: './assets/img/song8.jpg'
      },
      {
        name: 'Gác lại âu lo',
        singer: 'Da LAB ft. Miu Lê',
        path: './assets/music/song9.mp3',
        image: './assets/img/song9.jpg'
      },
      {
        name: 'Cứ Chill Thôi',
        singer: 'Chillies',
        path: './assets/music/song10.mp3',
        image: './assets/img/song10.jpg'
      }
  ],
  setConfig: function(key,value) {
    this.config[key] = value
    localStorage.setItem(PLAYER_STORAGE_KEY, JSON.stringify(this.config))
  },
  render: function() {
    const htmls = this.songs.map((song, index) => {
      return `
          <div class="song" data-index=${index}>
              <div class="thumb"
                  style="background-image: url('${song.image}')">
              </div>
              <div class="body">
                  <h3 class="title">${song.name}</h3>
                  <p class="author">${song.singer}</p>
              </div>
              <div class="option">
                  <i class="fas fa-ellipsis-h"></i>
              </div>
          </div>
      `;
    });
    $('.playlist').innerHTML = htmls.join("");
  },
  defineProperties: function() {
    Object.defineProperty(this, 'currentSong', {
      get: function() {
        return this.songs[this.currentIndex]
      }
    })
  },
  handleEvents:function() {
    const cdWidth = cd.offsetWidth
    const _this = this

    const cdThumbAnimate = cdThumb.animate([
    { transform: 'rotate(360deg)' }
    ], {
      duration: 10000,
      iterations: Infinity
    })
    cdThumbAnimate.pause();

    //Phong to, thu nho CD
    document.onscroll = function() {
      const scrollTop = window.scrollY 
      const newCdWidth = cdWidth - scrollTop;
      cd.style.width = newCdWidth > 0 ? newCdWidth + 'px' : 0
      cd.style.opacity = newCdWidth / cdWidth
    },
    
    // play, pause
    playBtn.onclick = function() {
      if(_this.isPlaying) {
        audio.pause()
        cdThumbAnimate.pause()
      }else {
        audio.play()
        cdThumbAnimate.play()
      }
    },
    audio.onpause = function() {
      _this.isPlaying = false
      player.classList.remove('playing')
    },
    audio.onplay = function() {
      _this.isPlaying = true
      player.classList.add('playing')
    },

    //progress 
    audio.ontimeupdate = function() {
      if(audio.duration) {
        const progressPercent = audio.currentTime / audio.duration * 100
        progress.value = progressPercent
      }
    },
    progress.oninput = function(e) {
      const seekTime = audio.duration / 100 * e.target.value
      audio.currentTime = seekTime
    },

    //handle volume

    volume.oninput = function(e) {
      audio.volume = volume.value 
      _this.setConfig('volume', audio.volume)
    }
    
    //when song ended
    
    audio.onended = function() {
      if(!_this.isRepeat) { 
        nextBtn.click() 
      }
    },

    //click play list 

    playlist.onclick = function(e) {
      const songNode = e.target.closest('.song:not(.active)')
      if(songNode || e.target.closest('.option')) {
        if(songNode) {
          _this.currentIndex = songNode.dataset.index
          _this.loadCurrentSong()
          _this.activeSong()
          audio.play()
          cdThumbAnimate.play()
        }
      }
    },

    // repeat song

    repeatBtn.onclick = function() {
      _this.isRepeat = !_this.isRepeat
      repeatBtn.classList.toggle('active', _this.isRepeat)
      _this.setConfig('isRepeat', _this.isRepeat)

      if(_this.isRepeat) {
        audio.loop = true;
      } else {
        audio.loop = false;
      }
    },

    // next, prev song
    nextBtn.onclick = function() {
      if(_this.isRandom) {
        _this.playRandomSong()
      }else {
        _this.nextSong(); 
      }
      audio.play() 
      cdThumbAnimate.play()
    },
    prevBtn.onclick = function() {
      if(_this.isRandom) {
        _this.playRandomSong()
      }else {
        _this.prevSong()
      }
      audio.play() 
      cdThumbAnimate.play()
    },

    randomBtn.onclick = function() {
      _this.isRandom = !_this.isRandom
      randomBtn.classList.toggle('active', _this.isRandom)
      _this.setConfig('isRandom', _this.isRandom)
    }
  },

  loadConfig: function() {
    if(localStorage.getItem(PLAYER_STORAGE_KEY) === null) {
      this.isRandom = false
      this.isRepeat = false
      this.volume = 1
      this.currentIndex = 0

      this.setConfig('isRandom', false)
      this.setConfig('isRepeat', false)
      this.setConfig('volume', 1)
    }else {
      this.isRandom = this.config.isRandom 
      this.isRepeat = this.config.isRepeat
      this.currentIndex = Number(this.config.currentSongIndex)
      this.volume = this.config.volume
    }

    this.scrollToActiveSong()
  },

  loadCurrentSong: function() {
    heading.textContent = this.currentSong.name
    cdThumb.style.backgroundImage = `url('${this.currentSong.image}')`
    audio.src = this.currentSong.path
    this.setConfig('currentSongIndex', this.currentIndex)
  },

  nextSong: function() {
    this.currentIndex++
    if(this.currentIndex >= this.songs.length) {
      this.currentIndex = 0
    }
    this.loadCurrentSong()
    this.activeSong()
    this.scrollToActiveSong()
  },
  prevSong: function() {
    this.currentIndex--
    if(this.currentIndex <= 0) {
      this.currentIndex = this.songs.length - 1
    }
    this.loadCurrentSong()
    this.activeSong()
    this.scrollToActiveSong()
  },

  //random song
  playRandomSong: function() {
    let newIndex
    do {
      newIndex = Math.floor(Math.random() * this.songs.length)
    }while (this.currentIndex === newIndex) 
    this.currentIndex = newIndex
    this.loadCurrentSong()
    this.activeSong()
    this.scrollToActiveSong()
  },

  //active song
  activeSong: function() {
    const songs = $$('.song')
    for(song of songs) {
      song.classList.remove('active')
    } songs[this.currentIndex].classList.add('active')
  }, 

  scrollToActiveSong: function() {
    if(this.currentIndex == 0) {
      setTimeout(function(){ 
        $('.song.active').scrollIntoView({
          behavior: 'smooth',
          block: 'end',
        })
      }, 200);
    }else {
      setTimeout(function(){ 
        $('.song.active').scrollIntoView({
          behavior: 'smooth',
          block: 'center',
        })
      }, 200); 
    }
  },

  start: function() {
    this.loadConfig() 

    this.defineProperties()

    this.handleEvents() 

    this.loadCurrentSong()

    this.render() 

    this.activeSong()

    randomBtn.classList.toggle('active', this.isRandom)
    repeatBtn.classList.toggle('active', this.isRepeat)
    audio.volume = this.volume
    volume.value = this.volume
  }
}

app.start()


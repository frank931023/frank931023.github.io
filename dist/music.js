const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: false,
    autoplay: false,
    theme: '#b7daff',
    loop: 'all',
    order: 'list',
    preload: 'auto',
    volume: 0.7,
    mutex: true,
    listFolded: false,
    listMaxHeight: '200px',
    lrcType: 3,
    audio: [
      {
        name: "A Positive Direction ",
        artist: 'Aylex',
        url: '/images/my-music.mp3',
        cover: '/images/my-pic.png'
      },
      {
        name: 'Marshmallow',
        artist: 'Lukrembo',
        url: '/images/my-music-2.mp3',
        cover: '/images/my-pic-2.png'
      },
      {
        name: 'Moonlight',
        artist: 'Ocean Bloom',
        url: '/images/my-music-3.mp3',
        cover: '/images/my-pic-3.png'
      }
    ]
});
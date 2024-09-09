const tracks = [
    { title: "Song 1", category: "pop", src: "song1.mp3" },
    { title: "Song 2", category: "rock", src: "song2.mp3" },
    { title: "Song 3", category: "jazz", src: "song3.mp3" }
];

let currentTrackIndex = 0;
const audioPlayer = document.getElementById('audio-player');
const playPauseBtn = document.querySelector('.controls button:nth-child(2)');
let isPlaying = false;

function selectTrack(index) {
    currentTrackIndex = index;
    audioPlayer.src = tracks[currentTrackIndex].src;
    playMusic();
}

function playMusic() {
    audioPlayer.play();
    isPlaying = true;
    playPauseBtn.innerHTML = "&#9208; Pause";
}

function pauseMusic() {
    audioPlayer.pause();
    isPlaying = false;
    playPauseBtn.innerHTML = "&#9654; Play";
}

function playPause() {
    if (isPlaying) {
        pauseMusic();
    } else {
        playMusic();
    }
}

function nextTrack() {
    currentTrackIndex = (currentTrackIndex + 1) % tracks.length;
    selectTrack(currentTrackIndex);
}

function previousTrack() {
    currentTrackIndex = (currentTrackIndex - 1 + tracks.length) % tracks.length;
    selectTrack(currentTrackIndex);
}

function setVolume(value) {
    audioPlayer.volume = value;
}

function searchMusic() {
    const searchTerm = document.getElementById('search-bar').value.toLowerCase();
    const musicListItems = document.querySelectorAll('#music-list li');

    musicListItems.forEach(item => {
        if (item.innerText.toLowerCase().includes(searchTerm)) {
            item.style.display = "list-item";
        } else {
            item.style.display = "none";
        }
    });
}

function filterCategory() {
    const selectedCategory = document.getElementById('category-filter').value;
    const musicListItems = document.querySelectorAll('#music-list li');

    musicListItems.forEach(item => {
        const itemCategory = item.getAttribute('data-category');
        if (selectedCategory === "all" || itemCategory === selectedCategory) {
            item.style.display = "list-item";
        } else {
            item.style.display = "none";
        }
    });
}
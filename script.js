// Select the audio element and the body
const audio = document.getElementById('audio');
const body = document.querySelector('body');

// Check if the audio element exists
if (audio) {
    // Event listener for when audio starts playing
    audio.addEventListener('play', () => {
        body.classList.add('play-music');
        console.log("Audio is playing. Background updated to 'play-music' theme.");
    });

    // Event listener for when audio is paused
    audio.addEventListener('pause', () => {
        body.classList.remove('play-music');
        console.log("Audio is paused. Background reverted to default.");
    });
} else {
    console.error("Audio element not found. Please check the HTML.");
}

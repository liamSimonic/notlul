document.addEventListener('DOMContentLoaded', () => {
    const audio = document.getElementById('MrtvePtice');
    const playBtn = document.getElementById('playBtn');
    const stopBtn = document.getElementById('stopBtn');

    const playImg = 'src/play.png';
    const pauseImg = 'src/pause.png';
    audio.volume = 0.02;



    // Play/Pause toggle
    playBtn.addEventListener('click', () => {
        if (audio.paused) {
            audio.play();
            playBtn.src = pauseImg;
        } else {
            audio.pause();
            playBtn.src = playImg;
        }
    });

    // Stop button
    stopBtn.addEventListener('click', () => {
        audio.pause();
        audio.currentTime = 0;
        playBtn.src = playImg;
    });
});

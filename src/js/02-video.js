import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const key = 'videoplayer-current-time';
const vimeo = document.querySelector('#vimeo-player');
const player = new Player(vimeo);
const currentTime = localStorage.getItem(key);

if (currentTime) {
    player.setCurrentTime(currentTime);
};

player.on('timeupdate', throttle(setCurrentTimeInStorage, 1000));

function setCurrentTimeInStorage(data) {
    localStorage.setItem(key, data.seconds);
    console.log(data.seconds.toFixed(1));
};


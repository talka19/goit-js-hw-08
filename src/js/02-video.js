import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate', throttle(playTime, 1000));
function playTime(e) {
        localStorage.setItem('videoplayer-current-time', e.seconds)
};



currentTime = localStorage.getItem('videoplayer-current-time') || 0;

player.setCurrentTime(currentTime).catch(function (error) {
        console.error(error);
});
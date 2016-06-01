import {overlay} from '../plugins/overlay.js';

var popup = new overlay('editor');

var newButton = document.getElementById('new-reminder-button');
newButton.addEventListener('click', popup.open);

import angular from 'angular';
import './modules/reminder-list';

import {slideshow} from './modules/slides';

var form = {};
form.slide = new slideshow( document.getElementById('slideshow'), ".slideshow__slide" );

form.nextButton = document.querySelectorAll('.form__footer #form-next')[0];
form.prevButton = document.querySelectorAll('.form__footer #form-prev')[0];

form.nextButton.addEventListener('click', form.slide.nextSlide);
form.prevButton.addEventListener('click', form.slide.previousSlide);

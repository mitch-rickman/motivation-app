import angular from 'angular';
import './modules/reminder-list';

import {slideshow} from './modules/slides';

var form = {};
form.slide = new slideshow( document.getElementById('slideshow'), ".slideshow__slide" );
form.nextButton = document.getElementById('form-next');
form.prevButton = document.getElementById('form-prev');
form.submitButton = document.getElementById('form-submit');

form.nextForm = function() {
    var moreSlides = form.slide.nextSlide();

    if ( moreSlides ) {
        form.nextButton.disabled = false;
    }

    else {
        form.nextButton.disabled = true;
    }

    form.prevButton.disabled = false;
}

form.prevForm = function() {
    var moreSlides = form.slide.previousSlide();

    if ( moreSlides ) {
        form.prevButton.disabled = false;
    }

    else {
        form.prevButton.disabled = true;
    }

    form.nextButton.disabled = false;
}

// TODO: Turn off buttons based on index of current slide

form.nextButton = document.querySelectorAll('.form__footer #form-next')[0];
form.prevButton = document.querySelectorAll('.form__footer #form-prev')[0];

form.nextButton.addEventListener('click', form.nextForm);
form.prevButton.addEventListener('click', form.prevForm);

/*
* @container: object that contains slides
* @slideClass: Classes applied to individual slides
*/
function slideshow( container, slideClass) {
    let slides;

    let self = this;

    /*
    * goto next slide
    * @return: return index of slide transitioning to or false
    */
    this.nextSlide = function() {
        let i = getCurrentIndex();

        if ( i < slides.length - 1 ) {
            slides[i].classList.remove("active")
            slides[i].classList.add("old");
            slides[i + 1].classList.add("active");
        }

        // return if there are more slides available after the transition
        return i + 1 < slides.length - 1 ? true : false;
    }

    /*
    * goto previous slide
    * @return: return index of slide transitioning to or false
    */
    this.previousSlide = function() {
        let i = getCurrentIndex();

        if ( i !== 0 ) {
            slides[i].classList.remove('active');
            slides[i - 1].classList.remove('old');
            slides[i - 1].classList.add('active');
        }

        return i - 1 <= 0 ? false : true;
    }

    /*
    * get the slides and store them in a variable
    */
    this.getSlides = function() {
        slides = container.querySelectorAll(slideClass);
    }

    /*
    * get the current active slides index
    * @return: return index of current slide
    */
    function getCurrentIndex() {
        console.log("slideshow.currentIndex");
        for ( let i = 0, n = slides.length; i < n; i++ ) {
            if ( slides[i].classList.contains("active") ) {
                return i;
            }
        }
    }

    /*
    * fires when instance is created
    */
    function constructor() {
        self.getSlides();
    }

    constructor();
};

export { slideshow };

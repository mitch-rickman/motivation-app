/*
* @container: object that contains slides
* @slideClass: Classes applied to individual slides
*/
function slideshow( container, slideClass) {
    let slides;

    /*
    * goto next slide
    * @return: return index of slide transitioning to
    */
    this.nextSlide = function() {
        for ( let i = 0, n = slides.length; i < n; i++ ) {
            if ( slides[i].classList.contains("active") ) {
                slides[i].classList.remove("active");
                slides[i + 1].classList.add("active");
                return i + 1;
            }
        }
        console.log("slideshow.next");
    }

    /*
    * goto previous slide
    * @return: return index of slide transitioning to
    */
    this.previousSlide = function() {
        for ( let i = 0, n = slides.length; i < n; i++ ) {
            if ( slides[i].classList.contains("active") ) {
                slides[i].classList.remove("active");
                slides[i - 1].classList.add("active");
                return i;
            }
        }
    }

    /*
    * get the current active slides index
    * @return: return index of current slide
    */
    // TODO: refactor to look for index based on element with active class
    function getCurrentIndex() {
        console.log("slideshow.currentIndex");
        for ( let i = 0, n = slides.length; i < n; i++ ) {
            if ( slides[i].classList.contains("active") ) {
                console.log(i);
                return i;
            }
        }
    }

    /*
    * fires when instance is created
    */
    function constructor() {
        slides = container.querySelectorAll(slideClass);
    }

    constructor();
};

export { slideshow };

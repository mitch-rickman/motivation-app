/*
* Create an instance of an overlay
* @overlayID: id of the overlay container
*/
function overlay( overlayID, transitionTime ) {
    var self = this;
    var transition = transitionTime || 500;
    var overlay;

    /*
    * open the overlay
    */
    this.open = function() {
        overlay.style.display = "block";
        overlay.style.opacity = 0;

        setTimeout( function() {
            overlay.style.opacity = 1;
        }, 100);
    }

    /*
    * close the overlay
    */
    this.close = function() {
        overlay.style.opacity = 0;


        setTimeout( function() {
            overlay.style.display = "none";
        }, transition);
    }

    /*
    * Close the overlay when clicking in the notn active space
    */
    function overlayClick( e ) {
        if ( e.target.id == overlay.id ) {
            self.close();
        }
    }

    function constructor() {
        overlay = document.getElementById( overlayID );
        overlay.addEventListener('click', overlayClick);
    }

    constructor();
};

export {overlay};

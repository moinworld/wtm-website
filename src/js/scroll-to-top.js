/** Scroll To Top implementation in vanilla JavaScript (ES6 - ECMAScript 6) **/

// Let's define our variables first:

// A global variable, for accesing the currently active animation interval.
// We need this to cancel the animation later.
let intervalId = 0;

/**
 * The HTML DOM node for the scroll to top link.
 * We select the element by its class name using the document.querySelector() function.
 * The variable representing our scroll link element is declared as a constant, so it 
 * can't be overwritten.
 **/
const $scrollLink = document.querySelector('.scroll');


// Let's start building our functions:

/**
 * This definition of a function is our main entry point. 
 * We will call the function at the end of the file.
 **/
function initScrollToTop() {
    
    /**
     * Add an event listener to the element representing our browser window.
     * The event listener will trigger the function toggleScrollLinkOpaque() 
     * on scrolling up or down inside the window.
     **/
    window.addEventListener('scroll', toggleScrollLinkOpaque);
    
    /**
     * Add a click event listener to the scroll link element. 
     * It will trigger the scrollToTop() function when the link is clicked.
     **/
    $scrollLink.addEventListener('click', (evt) => {
        // We have to prevent the link's default behaviour to
        // stop the page jumping to the top right away when it is clicked.
        evt.preventDefault();
        scrollToTop();
    });
}

// Function for scrolling up one step
function scrollStep() {
    // This constant defines how many pixels we are going to scroll up in one step.
    const scrollHeight = 50;
    
    // Check whether the window has scrolled to the top
    if (window.scrollY === 0) {
        // End the animation by clearing the timer interval
        clearInterval(intervalId);
    }
    
    // Call the function window.scroll(x, y)
    window.scroll(0, window.scrollY - scrollHeight);
}

/** 
 * Function to scroll to the top of the window.
 **/
function scrollToTop() {
    /**
     *  Duration of scrollStep (= interval) in Milliseconds.
     *  Change/Edit this value and see what happens!
     *  For best web performance, we dont need more than 60 FPS = Frames per second (16.66ms).
     *  Read more: https://developers.google.com/web/fundamentals/performance/rendering/?hl=en
    */
    const intervalDuration = 16.66666;

    /**
     * setInterval(functionName, interval) calls a specified function 
     * after a given interval (in milliseconds). In our case, setInterval calls
     * the function scrollStep() every 16.666 ms.
     **/
    intervalId = setInterval(scrollStep, intervalDuration);
}

/**
 *  This function checks how far we have scrolled down from the top.
 *  If we have scrolled more than 100px down we add the class "is-visible" to our scroll link.
 *  This class will ensure that the link is visible by setting its opacity to 90%.
 *  If the property window.scrollY returns a value below 100 we remove the class again, so that
 *  the button becomes invisible (since its opacity is set to 0).
 **/
function toggleScrollLinkOpaque() {
    if (window.scrollY > 100) {
        // Make scroll button visible by adding class
        $scrollLink.classList.add('is-visible');
    } else {
        // Make scroll button invisible by removing class
        $scrollLink.classList.remove('is-visible');
    }
}

// As soon as the script is fully loaded by the browser,
// this function should be immediately called for triggering the Scroll to Top Button.
initScrollToTop();
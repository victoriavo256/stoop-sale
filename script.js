// when "closed envelope" image is clicked, "open envelope" image is revealed 
// and text + images pop out to fill the screen with an invite to the stoop sale

envelopeButton = document.getElementById("closed-envelope");

envelopeButton.addEventListener("click", () => {

    // hide closed envelope
    envelopeButton.classList.add('hidden');

    // show opened envelope
    document.getElementById("opened-envelope").classList.remove('hidden');

    setTimeout(() => {
        // after a 1.1s delay, hide opened envelope with a fadeaway animation
        document.getElementById("opened-envelope").classList.add('hide');
    }, 1100);

    setTimeout(() => {
        // after waiting 1s for the fadeaway animation to finish playing out, 
        // officially hide the opened envelope and...
        document.getElementById("opened-envelope").classList.add('hidden');

        // ...show other text + images popping out from where the envelope was
        document.getElementById("pop-out-from-envelope").classList.remove('hidden')
        
        // makes all other elements visible (no special popping out animation)
        document.getElementById("scroll-down-to-see").classList.remove('hidden')
    }, 1500)

});



// when the question mark symbol next to Stoop Sale is hovered over,
// a window pops up that defines what a stoop sale is **TODO**

helpButton = document.getElementById("help-button");

helpButton.addEventListener("click", () => {
    
    helpWindow = document.getElementById("help-window");
});



// as the user scrolls down, elements with the "fadeInViewPort" class will fade in
// one by one as they come into view **TODO**

document.addEventListener("DOMContentLoaded", function() {
});

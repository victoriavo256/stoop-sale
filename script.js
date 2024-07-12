// fetch the environment variable from vercel's runtime configuration
const apiKey = process.env.GOOGLE_MAPS_API_KEY;

// dynamically load google maps API
function loadGoogleMaps() {
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&callback=initMap&libraries=maps,marker&v=beta`;
    script.defer = true;
    script.async = true;
    document.head.appendChild(script);
}

// initialize google maps after the API script has loaded
function initMap() {
    // Define map options
    const mapOptions = {
        center: { lat: 40.67951583862305, lng: -73.9972915649414 },
        zoom: 14
    };

    // Create the map
    const map = new google.maps.Map(document.getElementById('map'), mapOptions);

    // Add a marker
    const marker = new google.maps.Marker({
        position: { lat: 40.67951583862305, lng: -73.9972915649414 },
        map: map,
        title: 'Stoop Sale Location'
    });
}

// load google maps API when the window loads
window.addEventListener('load', loadGoogleMaps);

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

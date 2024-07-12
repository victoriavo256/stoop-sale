// when "closed envelope" image is clicked, "open envelope" image is revealed  //////////////////////////
// and text + images pop out to fill the screen with an invite to the stoop sale

envelopeButton = document.getElementById("closed-envelope");

envelopeButton.addEventListener("click", () => {

    const bgm = document.getElementById('jazz-bgm');
    bgm.play();

    // hide closed envelope
    envelopeButton.classList.add('hidden');

    // hide click-me text
    document.getElementById("click-me").classList.add('hidden');

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

        // ...show other text + images that provide info on the event
        document.getElementById("pop-out-from-envelope").classList.remove('hidden')
        document.getElementById("info").classList.remove('hidden')
    }, 1500)

});



// when the question mark symbol next to Stoop Sale is hovered over, //////////////////////////////
// a window pops up that defines what a stoop sale is

helpButton = document.getElementById("help-button");

helpButton.addEventListener("click", () => {
    
    helpWindow = document.getElementById("help-window");
    if (helpWindow.classList.contains('hidden')) {
        helpWindow.classList.remove('hidden');
    } else {
        helpWindow.classList.add('hidden');
    }
    
});



// setting up countdown //////////////////////////////////////////////////////////////////////////////
// via this w3schools tutorial https://www.w3schools.com/howto/howto_js_countdown.asp 

// end date
var countDownDate = new Date("Aug 25, 2024 9:00:00").getTime();

var x = setInterval(function() {

    // today's date
    var now = new Date().getTime();

    // distance between end date and today's date
    var distance = countDownDate - now;

    // time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // display result in html element 'countdown'
    document.getElementById("countdown").innerHTML = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ";

    // if the count down is finished, write some text
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "0d 0h 0m 0s<br><p><b>This event is over.</b></p>";
    }

}, 1000);   // countdown updates every second



// social media reshare buttons ////////////////////////////////////////////////////////////////////////

const pinterestBtn = document.getElementById('pinterest');
const twitterxBtn = document.getElementById('twitterx');
const facebookBtn = document.getElementById('facebook');
const gmailBtn = document.getElementById('gmail');
const shareLinkBtn = document.getElementById('sharelink');

let postUrl = encodeURIComponent(window.location.href);
let postTitle = encodeURIComponent("Check this out!")
const subject = encodeURIComponent('Chelsea and Lil are having a stoop sale!');

//pinterest
let postImage = encodeURIComponent(`https://i.pinimg.com/736x/bd/89/c3/bd89c326dca95c66d96bd6a234237091.jpg`);
pinterestBtn.setAttribute("href", `https://www.pinterest.com/pin/create/button/?url=${postUrl}&media=${postImage}&description=${subject}`);

//twitterx
let hashtags = encodeURIComponent('Brooklyn,StoopSale,Event')
twitterxBtn.setAttribute("href", `https://twitter.com/intent/tweet?text=${postTitle}&url=${postUrl}&hashtags=${hashtags}
`)

//facebook
facebookBtn.setAttribute("href",`https://www.facebook.com/sharer/sharer.php?u=${postUrl}`);

//gmail
const body = encodeURIComponent('Check it out: ' + document.location.href);
gmailBtn.setAttribute("href", `https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=&su=${subject}&body=${body}`)

// copies link to clipboard to be shared
shareLinkBtn.addEventListener('click', function() {
    const url = window.location.href;
    navigator.clipboard.writeText(url).then(function() {
        document.getElementById('share-button-alert').classList.remove('hidden');
        setTimeout(() => {
            // after a 1s delay, hide alert again
            document.getElementById('share-button-alert').classList.add('hidden');
        }, 1000);
    }).catch(function(error) {
        console.error('Error copying text: ', error);
    });
});



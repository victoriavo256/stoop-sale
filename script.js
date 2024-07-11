// when "closed envelope" image is clicked, "open envelope" image is revealed 
// and text + images pop out to fill the screen with an invite to the stoop sale
envelopeButton = document.getElementById("closed-envelope");
envelopeButton.addEventListener("click", () => {
    // hide closed envelope
    envelopeButton.classList.add('hidden');
    // show opened envelope
    document.getElementById("opened-envelope").classList.remove('hidden');
    // show other text + images popping out from envelope
});

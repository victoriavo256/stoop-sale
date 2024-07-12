// when "closed envelope" image is clicked, "open envelope" image is revealed 
// and text + images pop out to fill the screen with an invite to the stoop sale

envelopeButton = document.getElementById("closed-envelope");

envelopeButton.addEventListener("click", () => {

    const bgm = document.getElementById('jazz-bgm');
    bgm.play();

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

        // ...show other text + images that provide info on the event
        document.getElementById("pop-out-from-envelope").classList.remove('hidden')
        document.getElementById("info").classList.remove('hidden')
    }, 1500)

});



// when the question mark symbol next to Stoop Sale is hovered over,
// a window pops up that defines what a stoop sale is **TODO**

helpButton = document.getElementById("help-button");

helpButton.addEventListener("click", () => {
    
    helpWindow = document.getElementById("help-window");
    if (helpWindow.classList.contains('hidden')) {
        helpWindow.classList.remove('hidden');
    } else {
        helpWindow.classList.add('hidden');
    }
    
});



// interactive collage

// Get all elements with the class 'draggable'
const draggableElements = document.querySelectorAll('.draggable');

// Add event listeners for drag events
draggableElements.forEach(element => {
    element.addEventListener('dragstart', dragStart);
    element.addEventListener('dragend', dragEnd);
});

// Drag start event handler
function dragStart(event) {
    // Set data for transfer
    event.dataTransfer.setData('text/plain', null);
}

// Drag end event handler
function dragEnd(event) {
    // Clean up or handle any necessary end-of-drag tasks
}

// Optional: Add event listeners for drop zones or containers
const dropZone = document.getElementById('interactive-collage-container');

// Prevent default behavior for drag events on drop zone
dropZone.addEventListener('dragover', dragOver);
dropZone.addEventListener('dragenter', dragEnter);
dropZone.addEventListener('dragleave', dragLeave);

// Drop event handler
dropZone.addEventListener('drop', drop);

// Drag over event handler (prevent default behavior)
function dragOver(event) {
    event.preventDefault();
}

// Drag enter event handler (optional: add visual feedback)
function dragEnter(event) {
    event.preventDefault();
    // Add styling or visual feedback if needed
}

// Drag leave event handler (optional: remove visual feedback)
function dragLeave(event) {
    // Remove styling or visual feedback if needed
}

// Drop event handler
function drop(event) {
    event.preventDefault();
    // Get dragged element and append it to the drop zone
    const data = event.dataTransfer.getData('text/plain');
    const draggedElement = document.getElementById(data);
    if (draggedElement && draggedElement.classList.contains('draggable')) {
        this.appendChild(draggedElement);
    }
}



// social media reshare buttons

document.getElementById('twitterx').addEventListener('click', function() {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent(document.title);
    const twitterShareUrl = `https://twitter.com/intent/tweet?url=${url}&text=${text}`;
    window.open(twitterShareUrl, '_blank');
});

document.getElementById('facebook').addEventListener('click', function() {
    const url = encodeURIComponent(window.location.href);
    const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
    window.open(facebookShareUrl, '_blank');
});

document.getElementById('gmail').addEventListener('click', function() {
    const subject = encodeURIComponent('Chelsea and Lil are having a stoop sale!');
    const body = encodeURIComponent('Check it out: ' + window.location.href);
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=&su=${subject}&body=${body}`;
    window.open(gmailUrl, '_blank');
});

document.getElementById('sharelink').addEventListener('click', function() {
    const url = window.location.href;
    navigator.clipboard.writeText(url).then(function() {
        alert('Link copied to clipboard!');
    }).catch(function(error) {
        console.error('Error copying text: ', error);
    });
});

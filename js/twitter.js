// Twitter/X integration for Myreze-Labs Depth Estimation Workshop

// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Check if Twitter widgets exist
    if (typeof twttr !== 'undefined') {
        // Optional: Hook into the Twitter widget load event
        twttr.ready(function(twttr) {
            twttr.events.bind('rendered', function(event) {
                console.log('Twitter timeline has loaded');
                
                // If you need to do anything after the timeline is loaded
                // you can do it here
            });
        });
    }

    // Add event listener for the tweet button
    const tweetButton = document.querySelector('.tweet-button');
    if (tweetButton) {
        tweetButton.addEventListener('click', function(event) {
            // Optional: Add analytics tracking for tweet button clicks
            console.log('Tweet button clicked');
            
            // No need to prevent default as we want the link to open
        });
    }
});

// Function to manually refresh the timeline if needed
function refreshTwitterTimeline() {
    if (typeof twttr !== 'undefined') {
        twttr.widgets.load(document.getElementById('twitter-container'));
    }
} 
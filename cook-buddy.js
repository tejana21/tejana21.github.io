// Initialize Material Design Components
mdc.autoInit();

const searchButton = document.getElementById('search-button');
const searchInput = document.getElementById('recipe-search-input');
const resultsContainer = document.getElementById('search-results');

searchButton.addEventListener('click', () => {
  const query = searchInput.value.trim();
  if (query) {
    // Clear previous results
    resultsContainer.innerHTML = '<div class="mdc-linear-progress mdc-linear-progress--indeterminate">                                     <div class="mdc-linear-progress__buffering-dots"></div>                                     <div class="mdc-linear-progress__buffer"></div>                                     <div class="mdc-linear-progress__bar mdc-linear-progress__primary-bar">                                       <span class="mdc-linear-progress__bar-inner"></span>                                     </div>                                     <div class="mdc-linear-progress__bar mdc-linear-progress__secondary-bar">                                       <span class="mdc-linear-progress__bar-inner"></span>                                     </div>                                   </div>                                   <p style="text-align: center;">Searching for videos...</p>';

    // Simulate API call
    mockFetchYouTubeVideos(query)
      .then(videos => {
        displayVideos(videos);
      })
      .catch(error => {
        console.error('Error fetching videos:', error);
        resultsContainer.innerHTML = '<p style="color: red; text-align: center;">Could not fetch videos. Please try again later.</p>';
      });
  } else {
    resultsContainer.innerHTML = '<p style="text-align: center;">Please enter a recipe to search.</p>';
  }
});

// Mock function to simulate fetching YouTube videos
// In a real application, this would call the YouTube API (likely via a backend)
async function mockFetchYouTubeVideos(query) {
  console.log(`Simulating YouTube search for: ${query}`);
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 1500));

  // Return mock data
  // Replace this with actual API call logic
  if (query.toLowerCase().includes("pasta")) {
    return [
      {
        id: '123',
        title: 'Amazing Pasta Carbonara Recipe by Chef John',
        thumbnailUrl: 'https://i.ytimg.com/vi/30bt6A3t4no/hqdefault.jpg', // Example thumbnail
        videoUrl: 'https://www.youtube.com/watch?v=30bt6A3t4no' // Example video URL
      },
      {
        id: '456',
        title: 'Quick & Easy Tomato Pasta by Jamie Oliver',
        thumbnailUrl: 'https://i.ytimg.com/vi/L9Cg93_4hPM/hqdefault.jpg',
        videoUrl: 'https://www.youtube.com/watch?v=L9Cg93_4hPM'
      },
      {
        id: '789',
        title: 'Creamy Garlic Pasta - So Good!',
        thumbnailUrl: 'https://i.ytimg.com/vi/wZtZQ_xX0sI/hqdefault.jpg',
        videoUrl: 'https://www.youtube.com/watch?v=wZtZQ_xX0sI'
      }
    ];
  } else if (query.toLowerCase().includes("cake")) {
     return [
      {
        id: 'zxc',
        title: 'Best Chocolate Cake Recipe',
        thumbnailUrl: 'https://i.ytimg.com/vi/0goP5nd6kP4/hqdefault.jpg',
        videoUrl: 'https://www.youtube.com/watch?v=0goP5nd6kP4'
      },
      {
        id: 'vbn',
        title: 'Simple Vanilla Sponge Cake',
        thumbnailUrl: 'https://i.ytimg.com/vi/hVRe8nYaERI/hqdefault.jpg',
        videoUrl: 'https://www.youtube.com/watch?v=hVRe8nYaERI'
      }
    ];
  } else {
    return []; // Return empty if no specific mock matches
  }
}

function displayVideos(videos) {
  resultsContainer.innerHTML = ''; // Clear loading/previous message

  if (!videos || videos.length === 0) {
    resultsContainer.innerHTML = '<p style="text-align: center;">No videos found for your search.</p>';
    return;
  }

  const videoList = document.createElement('ul');
  videoList.className = 'mdc-list mdc-list--two-line mdc-list--avatar-list'; // Material Design list classes

  videos.forEach(video => {
    const listItem = document.createElement('li');
    listItem.className = 'mdc-list-item';
    listItem.setAttribute('tabindex', '0');
    listItem.onclick = () => { window.open(video.videoUrl, '_blank'); };

    const primaryAction = document.createElement('span');
    primaryAction.className = 'mdc-list-item__ripple';

    const image = document.createElement('img');
    image.src = video.thumbnailUrl;
    image.alt = video.title;
    image.className = 'mdc-list-item__graphic'; // For avatar-like display
    image.style.width = '100px'; // Adjust size as needed
    image.style.height = 'auto';
    image.style.marginRight = '16px';


    const textContainer = document.createElement('span');
    textContainer.className = 'mdc-list-item__text';

    const primaryText = document.createElement('span');
    primaryText.className = 'mdc-list-item__primary-text';
    primaryText.textContent = video.title;

    // Optional: Add secondary text like channel name or description if available
    // const secondaryText = document.createElement('span');
    // secondaryText.className = 'mdc-list-item__secondary-text';
    // secondaryText.textContent = 'YouTube Video'; // Placeholder

    textContainer.appendChild(primaryText);
    // textContainer.appendChild(secondaryText);

    listItem.appendChild(primaryAction);
    listItem.appendChild(image);
    listItem.appendChild(textContainer);
    videoList.appendChild(listItem);
  });

  resultsContainer.appendChild(videoList);
}

// Make sure MDC components are initialized after the DOM is loaded,
// especially if they are added dynamically.
// For this script, autoInit at the top or in HTML is generally fine.
// If adding MDC components dynamically that weren't caught by autoInit,
// you might need: mdc.autoInit(resultsContainer); or specific component initializers.

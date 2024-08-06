function isValidYouTubeShortURL(url) {
    const regex = /^https:\/\/(www\.)?youtube\.com\/shorts\/[a-zA-Z0-9_-]{11}$/;
    return regex.test(url);
}

function getVideoId(url) {
    const urlObj = new URL(url);
    const videoId = urlObj.pathname.split('/').pop();
    return videoId;
}

function downloadThumbnail() {
    const url = document.getElementById('videoUrl').value;
    const errorContainer = document.getElementById('errorContainer');
    const thumbnailContainer = document.getElementById('thumbnailContainer');

    errorContainer.innerHTML = '';
    thumbnailContainer.innerHTML = '';

    if (isValidYouTubeShortURL(url)) {
        const videoId = getVideoId(url);
        const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
        thumbnailContainer.innerHTML = `<img src="${thumbnailUrl}" alt="Thumbnail"><br><a href="${thumbnailUrl}" download="thumbnail.jpg">Download Thumbnail</a>`;
    } else {
        errorContainer.innerHTML = 'Invalid URL. Please enter a valid YouTube Short URL.';
    }
}

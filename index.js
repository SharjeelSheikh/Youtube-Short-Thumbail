function isValidYouTubeURL(url) {
    const regex = /^(https:\/\/(www\.)?youtube\.com\/(watch\?v=|shorts\/)|https:\/\/youtu\.be\/)[a-zA-Z0-9_-]{11}$/;
    return regex.test(url);
}

function getVideoId(url) {
    const urlObj = new URL(url);
    if (urlObj.hostname === 'youtu.be') {
        return urlObj.pathname.slice(1);
    }
    if (urlObj.pathname.startsWith('/shorts/')) {
        return urlObj.pathname.split('/')[2];
    }
    return urlObj.searchParams.get('v');
}

function downloadThumbnail() {
    const url = document.getElementById('videoUrl').value;
    const errorContainer = document.getElementById('errorContainer');
    const thumbnailContainer = document.getElementById('thumbnailContainer');

    errorContainer.innerHTML = '';
    thumbnailContainer.innerHTML = '';

    if (isValidYouTubeURL(url)) {
        const videoId = getVideoId(url);
        const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
        thumbnailContainer.innerHTML = `<img src="${thumbnailUrl}" alt="Thumbnail"><br><a href="${thumbnailUrl}" download="thumbnail.jpg">Download Thumbnail</a>`;
    } else {
        errorContainer.innerHTML = 'Invalid URL. Please enter a valid YouTube Video/Short URL.';
    }
}

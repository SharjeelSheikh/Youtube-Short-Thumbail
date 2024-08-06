function getVideoId(url) {
    const urlObj = new URL(url);
    const videoId = urlObj.pathname.split('/').pop();
    return videoId;
}

function downloadThumbnail() {
    const url = document.getElementById('videoUrl').value;
    const videoId = getVideoId(url);

    if (videoId) {
        const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
        const thumbnailContainer = document.getElementById('thumbnailContainer');
        thumbnailContainer.innerHTML = `<img src="${thumbnailUrl}" alt="Thumbnail"><br><a href="${thumbnailUrl}" download="thumbnail.jpg">Download Thumbnail</a>`;
    } else {
        alert('Invalid URL. Please enter a valid YouTube Short URL.');
    }
}

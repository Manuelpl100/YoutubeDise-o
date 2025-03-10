document.addEventListener('DOMContentLoaded', () => {
  const videosContainer = document.getElementById('videos-container');
  if (videosContainer) {
      // Primero los videos normales
      for (let i = 0; i < 12; i++) {
          const videoCard = document.createElement('article');
          videoCard.className = 'video-card';
          videoCard.setAttribute('data-video-id', `video-${i + 1}`);
          videoCard.innerHTML = `
              <div class="video-card__thumbnail">
                  <img src="https://picsum.photos/300/168?random=${i}" alt="Video Thumbnail" class="video-card__thumbnail-img">
                  <div class="video-card__thumbnail-duration">10:30</div>
              </div>
              <div class="video-card__info">
                  <div class="video-card__info-channel">
                      <img src="https://picsum.photos/36/36?random=${i + 100}" alt="Channel Avatar">
                  </div>
                  <div class="video-card__info-text">
                      <h2 class="video-card__info-text-title">Video Title ${i + 1}</h2>
                      <p class="video-card__info-text-channel">Channel Name</p>
                      <p class="video-card__info-text-stats">123K views • 1 day ago</p>
                  </div>
              </div>
          `;
          videosContainer.appendChild(videoCard);

          // Añadir event listener para el clic
          videoCard.addEventListener('click', function() {
              const videoId = this.getAttribute('data-video-id');
              window.location.href = `html/video.html?id=${videoId}`;
          });
      }
  }

  const searchResultsContainer = document.getElementById("search-results-container")
  if (searchResultsContainer) {
    for (let i = 0; i < 10; i++) {
      const searchResult = document.createElement("div")
      searchResult.className = "search-result-card"
      searchResult.innerHTML = `
                <div class="search-result-card__thumbnail">
                    <img src="https://picsum.photos/360/202?random=${i}" alt="Video Thumbnail" class="search-result-card__thumbnail-img">
                    <div class="search-result-card__thumbnail-duration">15:20</div>
                </div>
                <div class="search-result-card__info">
                    <h3 class="search-result-card__info-title">HTML Tutorial for Beginners - Part ${i + 1}</h3>
                    <div class="search-result-card__info-stats">1.2M views • 2 years ago</div>
                    <div class="search-result-card__info-channel">
                        <img src="https://picsum.photos/24/24?random=${i + 200}" alt="Channel Avatar">
                        <span>Web Dev Tutorials</span>
                    </div>
                    <p class="search-result-card__info-description">Learn the basics of HTML in this comprehensive tutorial series. Perfect for beginners!</p>
                </div>
            `
      searchResultsContainer.appendChild(searchResult)
    }
  }

  const commentsContainer = document.getElementById("comments-container")
  if (commentsContainer) {
    for (let i = 0; i < 5; i++) {
      const comment = document.createElement("div")
      comment.className = "comment"
      comment.innerHTML = `
                <img src="https://picsum.photos/40/40?random=${i + 300}" alt="User Avatar" class="comment__profile">
                <div class="comment__content">
                    <div class="comment__content-header">
                        <span class="comment__author">User ${i + 1}</span>
                        <span class="comment__time">2 days ago</span>
                    </div>
                    <p class="comment__content-text">This is a great tutorial! Thanks for sharing.</p>
                    <div class="comment__content-actions"> 
                    </div>
                </div>
            `
      commentsContainer.appendChild(comment)
    }
  }

  const suggestedVideosContainer = document.getElementById("suggested-videos-container")
  if (suggestedVideosContainer) {
    for (let i = 0; i < 10; i++) {
      const suggestedVideo = document.createElement("div")
      suggestedVideo.className = "suggested-video"
      suggestedVideo.innerHTML = `
                <div class="suggested-video__thumbnail">
                    <img src="https://picsum.photos/168/94?random=${i + 400}" alt="Video Thumbnail" class="suggested-video__thumbnail-img">
                    <div class="suggested-video__thumbnail-duration">8:15</div>
                </div>
                <div class="suggested-video__info">
                    <h4 class="suggested-video__info-title">Suggested Video ${i + 1}</h4>
                    <p class="suggested-video__info-channel">Channel Name</p>
                    <p class="suggested-video__info-stats">456K views • 3 weeks ago</p>
                </div>
            `
      suggestedVideosContainer.appendChild(suggestedVideo)
    }
  }
});

document.addEventListener('DOMContentLoaded', function() {
  const searchForm = document.getElementById('searchForm');
  
  if (searchForm) {
      searchForm.addEventListener('submit', function(e) {
          e.preventDefault(); // Previene el envío normal del formulario
          
          const searchInput = this.querySelector('.header__search-input');
          const searchTerm = searchInput.value.trim();
          
          if (searchTerm) {
              // Redirige a search.html con el término de búsqueda como parámetro de consulta
              window.location.href = `html/search.html?q=${encodeURIComponent(searchTerm)}`;
          }
      });
  }
});
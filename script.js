// Shuffle Feed: Randomly hide or show each post in the feed
let shuffleCount = 0;
const maxShuffles = 10;

function shuffleFeed() {
  const posts = document.querySelectorAll('#feed .post');
  posts.forEach(post => {
    // 50% chance to hide or show each post
    if (Math.random() > 0.5) {
      post.classList.add('hidden');
    } else {
      post.classList.remove('hidden');
    }
  });
  shuffleCount++;
  const btn = document.getElementById('shuffle-btn');
  if (btn) {
    btn.textContent = `Shuffle Feed (${shuffleCount})`;
    if (shuffleCount >= maxShuffles) {
      btn.disabled = true;
      btn.textContent = 'Shuffle Limit Reached';
    }
  }
}

// Optional: Accept button for dark pattern (interfaces.html)
document.addEventListener('DOMContentLoaded', function() {
  const acceptBtn = document.getElementById('accept-btn');
  const declineBtn = document.getElementById('decline-btn');
  if (acceptBtn && declineBtn) {
    acceptBtn.addEventListener('click', function() {
      acceptBtn.disabled = true;
      declineBtn.disabled = false;
      acceptBtn.textContent = 'Accepted';
    });
  }
}); 
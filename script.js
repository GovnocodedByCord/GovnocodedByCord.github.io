document.addEventListener("DOMContentLoaded", function () {
    const video = document.getElementById("background-video");
    const videoToggle = document.getElementById("video-toggle");
    let isVideoPlaying = true;
  
    videoToggle.addEventListener("click", function () {
        if (isVideoPlaying) {
            video.pause();
            isVideoPlaying = false;
            videoToggle.innerHTML = '<i class="fas fa-play"></i>';
        } else {
            video.play();
            isVideoPlaying = true;
            videoToggle.innerHTML = '<i class="fas fa-pause"></i>';
        }
    });
  });
  

document.addEventListener("DOMContentLoaded", function () {
    var contactItems = document.querySelectorAll('.contact-item');
    contactItems.forEach(function(item) {
        var originalText = item.querySelector('.list-item').textContent;

        // Обработчик для наведения мыши
        item.addEventListener('mouseover', function(event) {
            var newText = "Write";
            item.querySelector('.list-item').textContent = newText;
        });

        // Обработчик для убирания мыши
        item.addEventListener('mouseout', function(event) {
            item.querySelector('.list-item').textContent = originalText;
        });
    });
});

const possibleNames = [
    "exploring the virtual world..",
    "coding some awesome projects..",
    "creating new adventures..",
    "connecting with fellow players..",
    "enjoying the gaming universe..",
    "error, repeating.."
];

const nameElement = document.querySelector('.randomname');
function changeRandomName() {
    // Выбираем случайное название из списка
    const randomIndex = Math.floor(Math.random() * possibleNames.length);
    const randomName = possibleNames[randomIndex];
    
    nameElement.textContent = randomName;
}
setInterval(changeRandomName, 3000);
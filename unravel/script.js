function sendMessage(event) {
  if (event.key === "Enter") {
    const userInput = document.getElementById("userInput");
    const messageContainer = document.getElementById("messageContainer");

    if (userInput.value.trim() !== "") {
      const message = document.createElement("div");
      message.className = "message";
      message.textContent = userInput.value;

      messageContainer.appendChild(message);
      userInput.value = "";
      messageContainer.scrollTop = messageContainer.scrollHeight;
    }
  }
}

// fetching the api =======================

// Using fetch
fetch("./data.json")
  .then((response) => response.json())
  .then((data) => {
    // Process the retrieved data
    console.log(data);
    createVideoGallery(data);
  })
  .catch((error) => {
    console.error("Error fetching or parsing JSON:", error);
  });

//   fetching video ====================



// Function to create video gallery
function createVideoGallery(videoData) {
  let videoArray = videoData?.data;

  const videoGallery = document.getElementById("video-gallery");
  videoGallery.style.display = "grid";
  videoGallery.style.gridTemplateColumns = "auto auto";

  // Create video elements dynamically
  videoArray.forEach((video) => {
    let videoUrl = video?.source?.video_url?.med;
    let videoCaption = video?.source?.video_caption;
    const mainDiv = document.createElement("div");
    const videoElement = document.createElement("video");
    const videoCaptionElement = document.createElement("caption");

    // div styling=======
    // mainDiv.style.position = "relative";
    // videoCaptionElement.style.position = "absolute";

    videoCaptionElement.textContent = videoCaption;

    videoElement.src = videoUrl;
    mainDiv.classList.add("main-div");
    videoElement.classList.add("video-element");
    videoCaptionElement.classList.add("video-caption");
    videoCaptionElement.classList.add("gradient-overlay");

    videoElement.autoplay = true;
    videoElement.muted = true;
    videoElement.loop = true;

    mainDiv.appendChild(videoCaptionElement);
    mainDiv.appendChild(videoElement);
    videoGallery.appendChild(mainDiv);
  });
}

const runCode = async () => {
  const cameraElement = document.querySelector("#camera");

  // get access on the camera
  const permissions = await navigator.permissions.query({
    name: "camera",
  });
  console.log(permissions);
  if (permissions.state == "prompt") {
    //trigger the permissions dialog
    await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
  }
  if (permissions.state === "denied") {
    alert("Camera denied");
  }

  const startCamera = async () => {
    const videoElement = document.createElement("video");
    // we use the   transform: scaleX(-1)  to flip the camera of x-axis
    videoElement.setAttribute(
      "style",
      `
   
    height:200px;
    border-radius: 100px;
    transform: scaleX(-1);
    `
    );
    videoElement.setAttribute("autoplay", true);
    videoElement.setAttribute("muted", true);

    const cameraStream = await navigator.mediaDevices.getUserMedia({
      audio: false,
      video: true,
    });

    videoElement.srcObject = cameraStream;

    cameraElement.appendChild(videoElement);
  };

  startCamera();
};

runCode();

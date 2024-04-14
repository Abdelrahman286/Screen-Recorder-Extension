window.cameraId = "rusty-camera";
window.camera = document.getElementById(cameraId);

// check if camera exists
if (window.camera) {
  console.log("camera found");
  // make sure it is visible
  document.querySelector("#rusty-camera").style.display = "block";
} else {
  const cameraElement = document.createElement("iframe");
  cameraElement.id = cameraId;
  cameraElement.setAttribute(
    "style",
    `
  all: initial;
  position: fixed;
  width:200px;
  height:200px;
  top:10px;
  right:10px;
  border-radius: 100px;
  z-index: 999999;

  `
  );

  // set permiissions on iframe - camera and microphone
  cameraElement.setAttribute("allow", "camera; microphone");

  cameraElement.src = chrome.runtime.getURL("camera.html");
  document.body.appendChild(cameraElement);
  document.querySelector("#rusty-camera").style.display = "block";
}

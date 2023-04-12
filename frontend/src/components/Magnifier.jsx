import { useState } from "react";

export const Magnifier = ({ image }) => {
  const [startDragX, setStartDragX] = useState(0);
  const [startDragY, setStartDragY] = useState(0);
  const [dragging, setDragging] = useState(0);
  const [started, setStarted] = useState(false);

  const [imagePosX, setImagePosX] = useState("0px");
  const [imagePosY, setImagePosY] = useState("0px");
  const [imageOriginalWidth, setImageOriginalWidth] = useState("0px");
  const [imageOriginalHeight, setImageOriginalHeight] = useState("0px");

  const [imageWidth, setImageWidth] = useState(window.screen.width / 2);
  const [imageHeight, setImageHeight] = useState(window.screen.height / 2);
  const [magnification, setMagnification] = useState(1);
  const zoomFactor = 1.1;

  function initialiseImage(e) {
    var imageW = e.target.width;
    var imageH = e.target.height;
    var screenW = window.innerWidth;
    var screenH = window.innerHeight;

    var imageTop = (screenH - imageH) / 2;
    var imageLeft = (screenW - imageW) / 2;

    // Initialise image to be centered and use default rendered width
    setImageWidth(imageW);
    setImageHeight(imageH);
    setImageOriginalWidth(imageW / magnification);
    setImageOriginalHeight(imageH / magnification);
    setImagePosX(imageLeft);
    setImagePosY(imageTop - 20);
    setStarted(true);
  }

  function onMouseMove(event) {
    event.preventDefault();

    if (!dragging) return;

    // if button is now up they must have released it outside the container
    if (event.buttons === 0) {
      onMouseUp(event);
      return;
    }

    var offsetX = event.clientX;
    var offsetY = event.clientY;

    // difference between where we started and where we are now
    var diffX = startDragX - offsetX + parseInt(imagePosX);
    var diffY = startDragY - offsetY + parseInt(imagePosY);

    // move it by the difference between where we started and where we are now
    setImagePosX(parseInt(imagePosX) - diffX + "px");
    setImagePosY(parseInt(imagePosY) - diffY + "px");
  }

  // mouse down (start of drag) - remember starting point
  function onMouseDown(event) {
    event.preventDefault();
    var offsetX = event.clientX;
    var offsetY = event.clientY;

    setStartDragX(offsetX - parseInt(imagePosX));
    setStartDragY(offsetY - parseInt(imagePosY));
    setDragging(true);
    event.target.style.cursor = "grabbing";
  }

  // mouse up (end of drag)
  function onMouseUp(event) {
    setDragging(false);
    event.target.style.cursor = "unset";
  }

  function onMouseWheel(event) {
    event.preventDefault();

    var offsetX = event.clientX - parseInt(imagePosX);
    var offsetY = event.clientY - parseInt(imagePosY);

    // how far through image is mouse assuming no magnification
    // (image may start offscreen)
    var mouseX = offsetX / magnification;
    var mouseY = offsetY / magnification;

    // how far cursor is through container
    var cursorX = offsetX + parseInt(imagePosX);
    var cursorY = offsetY + parseInt(imagePosY);

    let newMagnification = magnification;
    newMagnification *= event.deltaY > 0 ? 1 / zoomFactor : zoomFactor;

    // constrain from 1 to 60 magnification
    newMagnification = Math.min(newMagnification, 60);
    newMagnification = Math.max(newMagnification, 1);

    // adjust image size
    setImageWidth(imageOriginalWidth * newMagnification + "px");
    setImageHeight(imageOriginalHeight * newMagnification + "px");

    // move image so that the place under the cursor is still under it
    setImagePosX(-mouseX * newMagnification + cursorX + "px");
    setImagePosY(-mouseY * newMagnification + cursorY + "px");
    setMagnification(newMagnification);
  }

  return (
    <div
      className="magnifier"
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
      onMouseMove={onMouseMove}
      onWheel={onMouseWheel}
    >
      <img
        style={
          started
            ? {
                width: imageWidth,
                height: imageHeight,
                top: imagePosY,
                left: imagePosX,
                maxHeight: "unset",
                maxWidth: "unset",
                position: "absolute",
              }
            : {}
        }
        onLoad={(e) => initialiseImage(e)}
        title="☟  Zoom & Pan ☟ "
        src={image}
        alt="selected screenshot"
      />
    </div>
  );
};

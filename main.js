canvas = createCanvas(400, 400);
canvas.position(110, 250);
video = createCapture(VIDEO);
video.hide();

function draw()
{
    image(video, 0, 0, 400, 400);
    circle(0, 0, 50);
    circle(400, 0, 50);
    circle(400, 400, 50);
    circle(0, 400, 50);
}
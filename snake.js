pi = 3.14159;
snake_length = 6;
max_angle = pi / 2;
min_angle = pi / 8;
start_angle = -pi/4
start_x = 50
start_y = 50
min_length = 50;
max_length = 100;

function setup() {
  createCanvas(800, 800);
  for (var i = 0; i < snake_length; i++) {

    
    possible_line = new_line(start_x, start_y)

    while (
      possible_line[0] < 50 ||
      possible_line[0] > width - 50 ||
      possible_line[1] < 50 ||
      possible_line[1] > height - 50
      ) {
      possible_line = new_line(start_x, start_y)
    }

    line(start_x, start_y, new_x, new_y);

    start_x = new_x;
    start_y = new_y;
    start_angle = line_angle
  }
}


function new_line(start_x, start_y) {

    angle_to_add = random(min_angle, max_angle) * random([-1, 1]);
    line_angle = start_angle + angle_to_add
    console.log(line_angle);

    line_length = random(min_length, max_length);
    x_to_add = line_length * cos(line_angle);
    y_to_add = line_length * sin(line_angle);
    new_x = start_x + x_to_add;
    new_y = start_y + y_to_add;

    return [new_x, new_y];
}
/*
function draw() {
  background(0);
  frameRate(30);
  stroke(255);
  // Let's pick an angle 0 to 90 degrees based on the mouse position
  let a = (mouseX / width) * 360;
  // Convert it to radians
  theta = radians(a);
  // Start the tree from the bottom of the screen
  translate(width/2,height);
  // Draw a line 120 pixels
  line(0,0,0,-120);
  // Move to the end of that line
  translate(0,-120);
  // Start the recursive branching!
  branch(120);

}

*/

class Point {
  constructor(x, y) {
    this.x = x
    this.y = y
  }
}

class SnakeSegment {
  constructor(point1, point2, angle) {
    this.x1 = point1.x
    this.y1 = point1.y
    this.x2 = point2.x
    this.y2 = point2.y
    this.angle
    this.lx = this.x2 - this.x1
    this.ly = this.y2 - this.y1

    this.length = math.hypot(this.lx, this.ly)
  }


}



pi = 3.14159;
snake_length = 10;
max_angle = pi / 2;
min_angle = pi / 8;
start_angle = -pi/4
start = new Point(50, 50)
//start.x = 50
//start.y = 50
min_length = 50;
max_length = 100;
snake_core = []
snake_fatness = 0.2 // in radians

iterations = 3




function setup() {
  createCanvas(500, 500);
  for (var i = 0; i < snake_length; i++) {

    
    end_point = new_line_end(start)

    while (
      end_point.x < 50 ||
      end_point.x > width - 50 ||
      end_point.y < 50 ||
      end_point.y > height - 50
      ) {
      end_point = new_line_end(start)
    }


    line(start.x, start.y, end_point.x, end_point.y);

    snake_core.push(new SnakeSegment(start, end_point, start_angle))

    start = new Point(end_point.x, end_point.y)
    start_angle = line_angle


  }
  console.log(snake_core)

  for (var i = 0; i < snake_core.length; i++){
    mid_point = get_mid_point(snake_core[i])
    circle(mid_point.x, mid_point.y, 5)

    length_of_new_line = (snake_core[i].length / 2) / cos(snake_fatness)

  }
}



function new_line_end(aPoint) {

    angle_to_add = random(min_angle, max_angle) * random([-1, 1]);
    line_angle = start_angle + angle_to_add

    line_length = random(min_length, max_length);
    x_to_add = line_length * cos(line_angle);
    y_to_add = line_length * sin(line_angle);
    end_point = new Point(aPoint.x + x_to_add, aPoint.y + y_to_add);

    return end_point;
}

function get_mid_point(segment) {
  mid_x = (segment.x1 + segment.x2) / 2;
  mid_y = (segment.y1 + segment.y2) / 2;

  return new Point(mid_x, mid_y)
}

//function draw_secondary_snake(snake_core, fatness, direction) {
//  if (direction = "left") {

//  } else if (direction = "right"){

//  }



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
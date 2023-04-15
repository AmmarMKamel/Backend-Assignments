class Rectangle {
  constructor(width, height) {
    this._width = width;
    this._height = height;
  }

  get width() {
    return this._width;
  }

  set width(value) {
    if (!Number.isInteger(value) || value <= 0) {
      throw new Error("Width must be a positive integer.");
    }
    this._width = value;
  }

  get height() {
    return this._height;
  }

  set height(value) {
    if (!Number.isInteger(value) || value <= 0) {
      throw new Error("Height must be a positive integer.");
    }
    this._height = value;
  }

  calculateArea() {
    return this._width * this._height;
  }

  calculatePerimeter() {
    return (this._width + this._height) * 2;
  }

  draw(char) {
    let row = "";
    for (let i = 0; i < this._height; i++) {
      for (let j = 0; j < this._width; j++) {
        row += char;
      }
      console.log(row);
      row = "";
    }
  }
}

let rec = new Rectangle(3, 5);
console.log(`Rectangle Area : ${rec.calculateArea()}`);
console.log(`Rectangle Perimeter : ${rec.calculatePerimeter()}`);
rec.draw("O");
console.log("------------------------------------------");

class Square extends Rectangle {
  constructor(side) {
    super(side, side);
  }
}

let sq = new Square(5);
console.log(`Square Area : ${sq.calculateArea()}`);
console.log(`Square Perimeter : ${sq.calculatePerimeter()}`);
sq.draw("O");

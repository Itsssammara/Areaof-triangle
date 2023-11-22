function calculateTriangleArea() {
    const base = parseFloat(document.getElementById("base").value);
    const height = parseFloat(document.getElementById("height").value);

    if (isNaN(base) || isNaN(height) || base <= 0 || height <= 0) {
      document.getElementById("result").innerHTML = "Invalid input. Both base and height must be positive numbers.";
      return;
    }

    const area = (base * height) / 2;
    document.getElementById("result").innerHTML = "The area of the triangle is: " + area;
  }
// Ask user for number of rows
const rows = parseInt(prompt("How many rows would you like? ") || "0");


// Loop through each row
for (let i = 1; i <= rows; i++) {
  let line = "";


  // Nested loop to add numbers to the line
  for (let j = 1; j <= i; j++) {
    line += j + " ";
  }


  // Print the line
  console.log(line);
}

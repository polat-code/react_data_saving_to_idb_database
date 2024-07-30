const fs = require("fs");
const path = require("path");

// Define the JSON object
const jsonObject = {
  key1: "value1",
  key2: "value2",
};

// Define the path where you want to write the JSON file
const filePath = path.join(__dirname, "src", "data", "myData.json");

// Write the JSON object to the file
fs.writeFileSync(filePath, JSON.stringify(jsonObject, null, 2));

console.log("JSON file has been saved.");

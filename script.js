// console.log(`hello world`)


// Prompt user to enter a list of froyo flavors separated by commas.
const userInput = prompt(`Enter a list froyo flavors seperated by commas:`, `vanilla,vanilla,vanilla,strawberry,coffee,coffee`);
// Capture the user input as a string. // Split the string by commas to create an array of flavors.
const flavorArray = userInput.split(`,`);
// Create an empty object to store the count of each flavor.
const flavorCount = {}
// Loop through the array of flavors.
for(let i = 0; i < flavorArray.length; i++) {
  const flavor = flavorArray[i];
// For each flavor in the array: / Check if the flavor already exists in the object.
  if (flavorCount[flavor]) {
// If it does, increment the count by 1.
      flavorCount[flavor]++;
    } else {
// If it does not, add the flavor to the object with a count of 1.
      flavorCount[flavor] = 1;
    }
}
// Log the object to the console.
console.log(flavorCount);
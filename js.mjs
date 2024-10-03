const fs = require('fs');
const path = require('path');

// Path to your data.json file
const filePath = path.join(__dirname, 'data.json');

// Read the existing data from data.json
fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }

  try {
    // Parse the JSON data
    const jsonData = JSON.parse(data);

    // Add the new entry
    jsonData.FFFFF = 'fddffddfd';

    // Convert back to JSON string
    const updatedJson = JSON.stringify(jsonData, null, 2); // Pretty print with 2 spaces

    // Write the updated data back to data.json
    fs.writeFile(filePath, updatedJson, 'utf8', (err) => {
      if (err) {
        console.error('Error writing file:', err);
        return;
      }
      console.log('data.json has been updated successfully.');
    });
  } catch (parseErr) {
    console.error('Error parsing JSON:', parseErr);
  }
});

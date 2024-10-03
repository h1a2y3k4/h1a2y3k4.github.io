console.log("hhhhhhhh")
const fs = require('fs');
try {
  const data = fs.readFileSync('./data.json', 'utf8');
  console.log('File content:', data);
} catch (err) {
  console.error('Error reading file:', err);
}


import fs from 'fs';
try {
  const data = fs.readFileSync('https://h1a2y3k4.github.io/data.json', 'utf8');
  console.log('File content:', data);
} catch (err) {
  console.error('Error reading file:', err);
}

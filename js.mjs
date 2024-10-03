// Using Fetch API to get JSON data from the specified URL
fetch('https://h1a2y3k4.github.io/data.json')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json(); // Parse JSON data
  })
  .then(data => {
    console.log('File content:', data); // Use the data here
  })
  .catch(err => {
    console.error('Error fetching data:', err); // Handle any errors
  });

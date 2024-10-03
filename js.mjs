fetch('https://h1a2y3k4.github.io/data.json')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.text(); // Get response as text first
  })
  .then(text => {
    console.log('Response text:', text); // Log the raw response text
    return JSON.parse(text); // Manually parse JSON
  })
  .then(data => {
    console.log('File content:', data); // Use the data here
  })
  .catch(err => {
    console.error('Error fetching data:', err); // Handle any errors
  });

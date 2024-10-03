fetch('https://h1a2y3k4.github.io/data.json')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.text(); // Get response as text first
  })
  .then(text => {
    console.log('Response text:', text); // Log the raw response text
    const data = JSON.parse(text); // Manually parse JSON

    // Add the new entry to the parsed data
    data.FFFFF = 'fddffddfd'; // Add the key-value pair

    return data; // Return the modified data
  })
  .then(data => {
    console.log('Updated file content:', data); // Use the updated data here
  })
  .catch(err => {
    console.error('Error fetching data:', err); // Handle any errors
  });

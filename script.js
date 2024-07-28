fetch('data.json')
    .then(response => response.json())
    .then(data => {
        document.title = data.title;
        document.querySelector('h1').textContent = data.header;
        document.querySelector('p').textContent = data.p;
    })
    .catch(error => console.error('Error:', error));

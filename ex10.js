document.getElementById('fetchButton').addEventListener('click', function() {
    fetch('https://api.dropboxapi.com/2/files/list_folder', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer XXX'
        },
        body: JSON.stringify({
            path: '/Test'
        })
    })
    .then(response => response.json())
    .then(data => {
        const resultDiv = document.getElementById('result');
        resultDiv.innerHTML = '';
        data.entries.forEach(entry => {
            resultDiv.innerHTML += `<p>${entry.name} (${entry['.tag']})</p>`;
        });
    })
    .catch(error => {
        console.error('Error:', error);
    });
});

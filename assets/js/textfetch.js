document.addEventListener("DOMContentLoaded", function() {
    fetch('text/john_card_body.txt')
        .then(response => response.text())
        .then(data => {
            document.getElementById('john-card-body').innerText = data;
        })
        .catch(error => console.error('Error fetching the text file:', error));
});
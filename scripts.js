document.getElementById('translator-form').addEventListener('submit', function(event) {
    event.preventDefault();

    let fromLanguage = document.getElementById('from-language').value;
    let toLanguage = document.getElementById('to-language').value;
    let textToTranslate = document.getElementById('text-to-translate').value;

    if (textToTranslate.trim() === '') {
        alert('Please enter text to translate.');
        return;
    }

    // Call the LibreTranslate API
    fetch('https://libretranslate.de/translate', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            q: textToTranslate,
            source: fromLanguage,
            target: toLanguage,
            format: 'text'
        })
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('output').textContent = data.translatedText;
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Something went wrong with the translation.');
    });
});

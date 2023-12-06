function saveInGitHub() {
    var input1Value = document.getElementById('input1').value;
    var input2Value = document.getElementById('input2').value;

    var jsonData = {
        title: input1Value,
        paragraph: input2Value,
        date: getCurrentDate()
    };

    var token = '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';
    var username = 'hyperdownload';
    var repo = 'web';
    var path = 'script/data.json';

    fetch(`https://api.github.com/repos/${username}/${repo}/contents/${path}`, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
    .then(response => response.json())
    .then(data => {
        var content = atob(data.content);

        var existingData = JSON.parse(content);
        existingData.push(jsonData);

        data.content = btoa(JSON.stringify(existingData));

        var commitMessage = 'Actualizar archivo JSON con nuevos datos';
        return fetch(`https://api.github.com/repos/${username}/${repo}/contents/${path}`, {
            method: 'PUT',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                message: commitMessage,
                content: data.content,
                sha: data.sha  
            }),
        });
    })
    .then(response => response.json())
    .then(data => console.log('Datos guardados en GitHub:', data))
    .catch(error => console.error('Error al enviar datos a GitHub:', error));
}

function getCurrentDate() {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); 
    var yyyy = today.getFullYear();
    return dd + '/' + mm + '/' + yyyy;
}
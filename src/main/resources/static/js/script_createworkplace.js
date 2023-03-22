console.log("Selam. Burası Workplace Oluşturma Form Sayfası");

const form = document.getElementById("form");

form.addEventListener('submit', function (e) {
    e.preventDefault();

    let inputName = document.getElementById('name').value;
    let inputDesc = document.getElementById('description').value;
    let inputUserId = document.getElementById('userId').value;

    console.log(inputName + " " + inputDesc);

    fetch('http://localhost:8080/api/workplaces/add', {
        method: 'POST',
        body: JSON.stringify({
            name: inputName,
            description: inputDesc,
            userId: inputUserId
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        }
    })
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
            console.log(data)
        }).catch(error => console.error('Error:', error));
});
function updateStats(){
    let name = document.querySelector('input').value;

    fetch(`https://api.agify.io/?name=${name}`).then(function (response) {
        return response.json();
    }).then(function (data) {
        ageSpan = document.querySelector('.age');
        ageSpan.innerText = data.age;
    });

    document.querySelector('input').value = "";
}
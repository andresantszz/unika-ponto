
const SCRIPT_URL = https://script.google.com/macros/s/AKfycby4KBM-39I7mIxdXZQKk-Z5_8w58ATNX9Kn2o80K-Q-Q0MMOPJsBdZJlcZsBCuZxF2Y/exec;

function login() {
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();
    if (password === "Unikaradical2025") {
        document.querySelector('.login-container').style.display = 'none';
        document.querySelector('.register-container').style.display = 'block';
    } else {
        document.getElementById('login-status').innerText = "Senha incorreta!";
    }
}

function registar(tipo) {
    if (!navigator.geolocation) {
        alert("Geolocalização não suportada pelo seu navegador!");
        return;
    }

    navigator.geolocation.getCurrentPosition(position => {
        const username = document.getElementById('username').value.trim();
        fetch(SCRIPT_URL, {
            method: 'POST',
            body: new URLSearchParams({
                'Funcionario': username,
                'Tipo': tipo,
                'Latitude': position.coords.latitude,
                'Longitude': position.coords.longitude
            })
        })
        .then(res => res.text())
        .then(data => {
            document.getElementById('status').innerText = "Registo enviado com sucesso!";
        })
        .catch(err => {
            document.getElementById('status').innerText = "Erro ao enviar registo.";
        });
    });
}

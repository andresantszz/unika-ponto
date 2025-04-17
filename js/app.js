async function registar(tipo) {
    const nome = document.getElementById('nome').value.trim();
    if (!nome) {
        alert("Por favor, insira o seu nome!");
        return;
    }

    document.getElementById('status').innerText = 'Enviando...';
    try {
        const resposta = await fetch('https://script.google.com/macros/s/AKfycby4KBM-39I7mIxdXZQKk-Z5_8w58ATNX9Kn2o80K-Q-Q0MMOPJsBdZJlcZsBCuZxF2Y/exec', {
            method: 'POST',
            body: new URLSearchParams({
                nome: nome,
                tipo: tipo
            })
        });

        if (resposta.ok) {
            document.getElementById('status').innerText = 'Registo enviado com sucesso!';
        } else {
            document.getElementById('status').innerText = 'Erro ao enviar o registo.';
        }
    } catch (error) {
        document.getElementById('status').innerText = 'Erro de conexão.';
    }
}

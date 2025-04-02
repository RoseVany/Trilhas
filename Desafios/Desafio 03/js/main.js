document.getElementById('uploadForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const nome = document.getElementById('nome_usuario').value.trim();
    const email = document.getElementById('email_usuario').value.trim();
    const cpf = document.getElementById('cpf_usuario').value.replace(/\D/g, ''); // Remove máscara antes de validar
    const telefone = document.getElementById('cel_usuario').value.trim();
    const dataNascimento = document.querySelector('input[name="data_nasc"]').value;
    const cep = document.getElementById('cep_usuario').value.trim();
    const estado = document.getElementById('estado_usuario').value.trim();
    const cidade = document.getElementById('cidade_usuario').value.trim();
    const bairro = document.getElementById('bairro_usuario').value.trim();
    const rua = document.getElementById('rua_usuario').value.trim();
    const numero = document.getElementById('numero_usuario').value.trim();
    const idUsuario = document.getElementById('id_usuario').value.trim();
    const senha = document.getElementById('senha_usuario').value.trim();

    // Validação de campos obrigatórios
    if (!nome || !email || !cpf || !telefone || !dataNascimento || !cep || !estado || !cidade || !bairro || !rua || !numero || !idUsuario || !senha) {
        alert('Todos os campos são obrigatórios.');
        return;
    }

    // Validação de e-mail
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Por favor, insira um e-mail válido.');
        return;
    }

    // Validação de CPF
    if (!validarCPF(cpf)) {
        alert('Por favor, insira um CPF válido.');
        return;
    }

    // Salvar dados no localStorage
    const formData = {
        nome,
        email,
        cpf,
        telefone,
        dataNascimento,
        cep,
        estado,
        cidade,
        bairro,
        rua,
        numero,
        idUsuario,
        senha
    };

    localStorage.setItem('userData', JSON.stringify(formData));
    alert('Inscrição realizada com sucesso!');
});

// Função para validar CPF
function validarCPF(cpf) {
    if (cpf.length !== 11 || /^(.)\1+$/.test(cpf)) return false;

    let soma = 0;
    for (let i = 0; i < 9; i++) soma += parseInt(cpf.charAt(i)) * (10 - i);
    let resto = (soma * 10) % 11;
    if (resto === 10 || resto === 11) resto = 0;
    if (resto !== parseInt(cpf.charAt(9))) return false;

    soma = 0;
    for (let i = 0; i < 10; i++) soma += parseInt(cpf.charAt(i)) * (11 - i);
    resto = (soma * 10) % 11;
    if (resto === 10 || resto === 11) resto = 0;
    if (resto !== parseInt(cpf.charAt(10))) return false;

    return true;
}

// Formatar CPF automaticamente
document.getElementById('cpf_usuario').addEventListener('input', function (e) {
    let value = e.target.value.replace(/\D/g, ''); // Remove caracteres não numéricos
    if (value.length > 11) value = value.slice(0, 11); // Limita a 11 dígitos

    // Aplica a máscara: 123.456.789-00
    if (value.length > 3 && value.length <= 6) {
        value = `${value.slice(0, 3)}.${value.slice(3)}`;
    } else if (value.length > 6 && value.length <= 9) {
        value = `${value.slice(0, 3)}.${value.slice(3, 6)}.${value.slice(6)}`;
    } else if (value.length > 9) {
        value = `${value.slice(0, 3)}.${value.slice(3, 6)}.${value.slice(6, 9)}-${value.slice(9)}`;
    }

    e.target.value = value;
});

// Formatar telefone automaticamente
document.getElementById('cel_usuario').addEventListener('input', function (e) {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length > 11) value = value.slice(0, 11);
    if (value.length > 2) value = `(${value.slice(0, 2)}) ${value.slice(2)}`;
    if (value.length > 10) value = `${value.slice(0, 10)}-${value.slice(10)}`;
    e.target.value = value;
});

// Buscar endereço pelo CEP
document.getElementById('cep_usuario').addEventListener('blur', async function () {
    const cep = this.value.replace(/\D/g, '');
    if (cep.length !== 8) {
        alert('Por favor, insira um CEP válido.');
        return;
    }

    try {
        const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        const data = await response.json();
        if (data.erro) {
            alert('CEP não encontrado.');
            return;
        }

        document.getElementById('estado_usuario').value = data.uf;
        document.getElementById('cidade_usuario').value = data.localidade;
        document.getElementById('bairro_usuario').value = data.bairro;
        document.getElementById('rua_usuario').value = data.logradouro;
    } catch (error) {
        alert('Erro ao buscar CEP. Tente novamente mais tarde.');
    }
});

// Funções de upload de arquivo
function handleFileSelect(event, dropAreaId) {
    const file = event.target.files[0];
    console.log('Arquivo:', file.name, 'na área:', dropAreaId);

    const selectedFileDiv = document.getElementById('selectedFile' + dropAreaId.slice(-1));
    selectedFileDiv.textContent = 'Arquivo: ' + file.name;
}

function handleDragOver(event) {
    event.preventDefault();
    event.target.classList.add('dragover');
}

function handleFileDrop(event, dropAreaId) {
    event.preventDefault();
    event.target.classList.remove('dragover');
    const files = event.dataTransfer.files;
    if (files.length > 0) {
        handleFileSelect({ target: { files: files } }, dropAreaId);
    }
}
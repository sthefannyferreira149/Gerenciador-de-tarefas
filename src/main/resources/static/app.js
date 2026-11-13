const formulario = document.getElementById("contato-form");
const nomeInput = document.getElementById("nome");
const telefoneInput = document.getElementById("telefone");
const responseBox = document.getElementById("response-box");
const statusPill = document.getElementById("status-pill");
const btnSubmit = document.getElementById("btn-submit");
const btnCancelar = document.getElementById("btn-cancelar");
const btnListar = document.getElementById("btn-listar");
const listaContatos = document.getElementById("lista-contatos");

let idEditando = null;

function mostrarStatus(mensagem, sucesso) {
    statusPill.textContent = mensagem;
    statusPill.className = sucesso ? "status ok" : "status err";
}

function cancelarEdicao() {
    idEditando = null;
    formulario.reset();
    btnSubmit.textContent = "Cadastrar";
    btnCancelar.style.display = "none";
}

formulario.addEventListener("submit", async (event) => {
    event.preventDefault();

    const payload = {
        nome: nomeInput.value.trim(),
        telefone: telefoneInput.value.trim()
    };

    const emEdicao = idEditando !== null;

    try {
        const response = await fetch(emEdicao ? `/api/agenda/${idEditando}` : "/api/agenda", {
            method: emEdicao ? "PUT" : "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload)
        });
        const data = await response.json().catch(() => null);
        mostrarStatus(`${response.ok ? "Sucesso" : "Erro"} ${response.status}`, response.ok);
        responseBox.textContent = data ? JSON.stringify(data, null, 2) : "Contato não encontrado.";

        if (response.ok) {
            cancelarEdicao();
            await listarContatos();
        }
    } catch (erro) {
        mostrarStatus("Erro de conexão", false);
        responseBox.textContent = "Não foi possível conectar à API.";
    }
});

btnCancelar.addEventListener("click", cancelarEdicao);
btnListar.addEventListener("click", listarContatos);

async function listarContatos() {
    try {
        const response = await fetch("/api/agenda");
        if (!response.ok) {
            throw new Error("Falha na listagem");
        }
        const contatos = await response.json();
        listaContatos.innerHTML = "";

        contatos.forEach((contato) => {
            const li = document.createElement("li");
            li.className = "contact-item";

            const dados = document.createElement("span");
            dados.textContent = `${contato.nome} - ${contato.telefone}`;

            const acoes = document.createElement("div");
            acoes.className = "contact-actions";

            const btnEditar = document.createElement("button");
            btnEditar.type = "button";
            btnEditar.className = "secondary";
            btnEditar.textContent = "Editar";
            btnEditar.addEventListener("click", () => editarContato(contato.id, contato.nome, contato.telefone));

            const btnExcluir = document.createElement("button");
            btnExcluir.type = "button";
            btnExcluir.className = "danger";
            btnExcluir.textContent = "Deletar";
            btnExcluir.addEventListener("click", () => deletarContato(contato.id));

            acoes.append(btnEditar, btnExcluir);
            li.append(dados, acoes);
            listaContatos.appendChild(li);
        });
    } catch (erro) {
        mostrarStatus("Erro de conexão", false);
        responseBox.textContent = "Não foi possível listar os contatos.";
    }
}

function editarContato(id, nome, telefone) {
    idEditando = id;
    nomeInput.value = nome;
    telefoneInput.value = telefone;
    btnSubmit.textContent = "Atualizar";
    btnCancelar.style.display = "inline-block";
}

async function deletarContato(id) {
    try {
        const response = await fetch(`/api/agenda/${id}`, { method: "DELETE" });
        mostrarStatus(`${response.ok ? "Deletado" : "Erro"} ${response.status}`, response.ok);
        responseBox.textContent = response.ok ? "Contato removido com sucesso." : "Erro ao deletar contato.";

        if (response.ok) {
            if (idEditando === id) {
                cancelarEdicao();
            }
            await listarContatos();
        }
    } catch (erro) {
        mostrarStatus("Erro de conexão", false);
        responseBox.textContent = "Não foi possível deletar o contato.";
    }
}

listarContatos();

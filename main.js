class List {
    constructor() {
        this.data = [];
    }

    add(data) {
        this.data.push(data);
        console.log(this.data)
    }
}

class TodoLista extends List {
    constructor() {
        super();

        this.usuario = 'Vania';
    }

    mostraUsuario() {
        console.log(this.usuario);
    }

}

const minhaLista = new TodoLista();


document.getElementById('novoTodo').onclick = function () {
    minhaLista.add('Novo todo');
}

minhaLista.mostraUsuario();

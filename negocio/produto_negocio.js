const produtoPersistence = require('../persistence/produto_persistence')


async function inserir(produto) {
    if(produto && produto.nome && produto.preco){
        const produtoInserido = await produtoPersistence.inserir(produto);
        return produtoInserido;
    }
    else {
        throw { id: 400, mensagem: "Falta parametros"};
    }
}

async function listar() {
    return await produtoPersistence.listar();
}

async function buscarPorId(id) {
    const produto = await produtoPersistence.buscarPorId(id);
    if(!produto) {
        throw { id: 404, mensagem: `Produto ${id} nao encontrado`};
    }
    return produto;
}

module.exports = {
    inserir, listar, buscarPorId
}
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

module.exports = {
    inserir
}
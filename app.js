const produtoPersistence = require('./persistence/produto_persistence')
const produtoNegocio = require('./negocio/produto_negocio')


async function main() {
    /*try {
        const produtoInserido1 = await produtoNegocio.inserir({nome: "produtoX", preco: 20})
        console.log("Produto Inserido", produtoInserido1);
    } catch (err) { 
        console.log(err);
    }

    try {
        const produtoInserido2 = await produtoNegocio.inserir({nome: "produtoY"})
        console.log("Produto Inserido", produtoInserido2);
    } catch (err) { 
        console.log(err);
    }*/

    
    const listaProdutos = await produtoNegocio.listar();
    console.log("Lista de Produtos",listaProdutos);

    try{ 
        const produto3 = await produtoNegocio.buscarPorId(3);
        console.log("Produto 3", produto3);
    } catch (err) {
        console.log("Erro", err);
    }

    try{ 
        const produto100 = await produtoNegocio.buscarPorId(100);
        console.log("Produto 100", produto100);
    } catch (err) {
        console.log("Erro", err);
    }

    const produtoProd3 = await produtoPersistence.buscarPorNome('produto3');
    console.log("Produto nome=3", produtoProd3);

    const produtoAtualizado = await produtoPersistence.atualizar(4, { nome: 'produto4', preco: 25});
    console.log("Produto atualizado", produtoAtualizado);

    const produtoDeletado = await produtoPersistence.deletar(6);
    console.log("Produto deletado", produtoDeletado);

 
}

main();


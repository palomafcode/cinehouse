const fs = require('fs');

module.exports = {
    adicionarFilme: function(filme, catalogo, nomeArquivo){
        catalogo.push(filme)
        fs.writeFileSync(nomeArquivo, JSON.stringify(catalogo, null, 2));
        return 'Filme adicionado com sucesso!'
    },

    buscarFilme: function(codigoFilme, catalogo){
        for(let i = 0; i < catalogo.length; i++){

        }
    }
}

const filme = this.buscarFilme(codigoFilme, catalogo);
filme.emCartaz = !filme.emCartaz;
fs.writeFileSync(nomeArquivo, JSON.stringify(catalogo, null, 2))
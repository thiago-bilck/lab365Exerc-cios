
(async()=>{
    const dataBase = require('./db');
    const User = require('./user');
    await dataBase.sync();

    
   const user = await User.findByPk(2); //poderia usar findAll para ver todos os elementos

    //Este é o comando para DELETAR dados da tabela,
    // sendo que entre as chaves colocamos a id do elemento a ser excluído
    await user.destroy(2)
})();
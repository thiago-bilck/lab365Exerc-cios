
(async()=>{
    const dataBase = require('./db');
    const User = require('./user');
    await dataBase.sync();

    //Esta parte do código utilizamos para inserir novos dados na tabela
    const newUser = await User.create({
        nome:'Fulano',
        cpf: '00000000000',
        altura: 1.80,
        sobre: 'Nascido em Pindamonhangaba e adora descobrir coisas novas.'
    })
    console.log(newUser)
   // const user = await User.findByPk(3); //poderia usar findAll para ver todos os elementos
   // console.log(equipamentos)

     // Esta parte do código é para usar quando quisermos fazer alterações
    //equipamentos.descricao = 'Fiz uma alteração'
   // await equipamentos.save()

    //Este é o comando para DELETAR dados da tabela,
    // sendo que entre as chaves colocamos a id do elemento a ser excluído
   //await equipamentos.destroy()
})();
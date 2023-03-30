
(async()=>{
    const dataBase = require('./db');
    const User = require('./user');
    await dataBase.sync();

    const user = await User.findByPk(2);
     // Esta parte do código é para usar quando quisermos fazer alterações
    user.sobre = 'Alteração realizada'
    await user.save()

})();
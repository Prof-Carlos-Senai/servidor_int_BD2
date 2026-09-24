const Usuario = require('./models/Usuario')
const conn = require('./db/conn')

async function syncDatabase(){
    try{
        await conn.sync({force: true})
        console.log('Tabela sincronizada com sucesso!')
    }catch(err){
        console.error('Erro de conexão com o BD!',err)
    }finally{
        await conn.close()
    }
}
syncDatabase()
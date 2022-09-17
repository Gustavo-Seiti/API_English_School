const { restart } = require('nodemon');
const database = require('../models/index.js');

class TurmaController{

    static async pegaTodasAsTurmas(req,res){
        try{
            const todasAsTurmas = await database.Turmas.findAll();
            return res.status(200).json(todasAsTurmas);
        }catch(err){
            return res.status(500).json(err.message);
        }
    }
    static async pegaUmaTurma(req, res) {
        const {id} = req.params;
        try{
            const umaTurma = await database.Turmas.findOne({ where : { id: Number(id) } })
            return res.status(200).json(umaTurma);
        }catch(err){
            return res.status(500).json(err.message);
        }
    }
    static async criaTurma(req, res) {
        const novaTurma = req.body
        try{
            const novaTurmaCriada = await database.Turmas.create(novaTurma)
            return res.status(200).json(novaTurmaCriada);
        }catch(err){
            return res.status(500).json(err.message);
        }

    }
    static async atualizaTurma(req, res) {
        const novasInfos = req.body
        const { id } = req.params;
        try{
            await database.Turmas.update(novasInfos, {where: {id: Number(id)}})
            const turmaAtualizada = await database.Turmas.findOne({ where : { id: Number(id) } })
            return res.status(200).json(turmaAtualizada);
        }catch(err){
            return res.status(500).json(err.message);
        } 
    }

    static async apagaTurma(req, res) {
        const { id } = req.params;
        try{
            const retornoDestroy = await database.Turmas.destroy({where : {id: Number(id)} })
            if(retornoDestroy == 0){
                return res.status(200).json({mensagem: "Falha na exclusão, verifique o registro."});
            }else{
                return res.status(200).json({mensagem: "Registro excluído com sucesso."});
            }
           
        }catch(err){
            return res.status(500).json(err.message);
        }
    }
}

module.exports = TurmaController;

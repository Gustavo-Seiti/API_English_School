const { restart } = require('nodemon');
const database = require('../models/index.js');

class NivelController{

    static async pegaTodosOsNiveis(req,res){
        try{
            const todosOsNiveis = await database.Niveis.findAll();
            return res.status(200).json(todosOsNiveis);
        }catch(err){
            return res.status(500).json(err.message);
        }
    }
    static async pegaUmNivel(req, res) {
        const {id} = req.params;
        try{
            const umNivel = await database.Niveis.findOne({ where : { id: Number(id) } })
            if(umNivel == null){
                return res.status(404).json({messagem: "Registro não encontrado."});
            }
            return res.status(200).json(umNivel);
        }catch(err){
            return res.status(500).json(err.message);
        }
    }
    static async criaNivel(req, res) {
        const novoNivel = req.body
        try{
            const novoNivelCriado = await database.Niveis.create(novoNivel)
            return res.status(200).json(novoNivelCriado);
        }catch(err){
            return res.status(500).json(err.message);
        }

    }
    static async atualizaNivel(req, res) {
        const novasInfos = req.body
        const { id } = req.params;
        try{
            await database.Niveis.update(novasInfos, {where: {id: Number(id)}})
            const nivelAtualizado = await database.Niveis.findOne({ where : { id: Number(id) } })
            return res.status(200).json(nivelAtualizado);
        }catch(err){
            return res.status(500).json(err.message);
        } 
    }

    static async apagaNivel(req, res) {
        const { id } = req.params;
        try{
            const retornoDestroy = await database.Niveis.destroy({where : {id: Number(id)} })
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

module.exports = NivelController;

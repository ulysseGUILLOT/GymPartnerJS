const Program = require('../models/Program');
const Exercice = require('../models/Exercice')

exports.getAllPrograms = async (req, res, next) => {
   try{
        const program = await Program.findAll({
            include: {all: true}
        });
        res.json(program);
    } catch (error) {
        next(error);
    }
}
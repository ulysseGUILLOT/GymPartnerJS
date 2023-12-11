const Program = require('../models/Program');

exports.getAllPrograms = async (req, res, next) => {
    try{
        const program = await Program.findAll();
        res.json(program);
    } catch (error) {
        next(error);
    }
}
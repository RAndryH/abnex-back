const commentmodel = require('../models/CarsModel');

class CarsController {
    constructor() {}

    create = async(req, res, next) => {
        const newcomment = req.body;
        const cmt = await commentmodel.comment(newcomment);
        res.status(200).json({
            success: true,
            data: cmt
        })
    }

    findAll = async(req, res, next) => {
        const cars = await commentmodel.findAll();
        res.status(200).json({
            success: true,
            data: cars
        })
    }

    findOne = async(req, res, next) => {
        const cars = await commentmodel.findOne(req.params.id);
        res.status(200).json({
            success: true,
            data: cars
        })
    }
}

module.exports = new CarsController();
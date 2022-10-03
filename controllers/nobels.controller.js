const dotenv = require("dotenv");
dotenv.config();
// const datasource = process.env.DATASOURCE;
const nobelsService = require("../services/nobels-fs.service.js");

// GET 
exports.numberNobels = (req, res, next) => {
    nobelsService.listerNombreNobels((error, results) => {
        if (error) {
            return res.status(400).send({ success: 0, data: error });
        }
        console.log("Success");
        // 200 => OK
        return res.status(200).send({ success: 1, nbNobels: results});
    });
};

exports.byLaureates = (req, res, next) => {
    nobelsService.numberMore1Nobel((error, results) => {
        if (error) {
            return res.status(400).send({ success: 0, data: error });
        }
        console.log("Success");
        return res.status(200).send({ success: 1, data: results});
    });
};

exports.categoryNobels = (req, res) => {
    nobelsService.listerCategoryNobels((error, results) => {
        if (error) {
            return res.status(400).send({ success: 0, data: error });
        }
        console.log("Success");
        return res.status(200).send({ success: 1, data: results});
    });
}
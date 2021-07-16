const   fs = require('fs'),
        env = require('dotenv');

const Cars = (car) => {
    this.id = car.id,
    this.marque = car.marque,
    this.annee = car.annee,
    this.matricule = car.matricule,
    this.comment = car.comment
}

Cars.comment = (newcomment) => {
    const id = newcomment.id;
    const cmt = newcomment.comment;
    return new Promise ((resolve, reject) => {
        fs.readFile(process.env['JSON_PATH'], (err, data) => {
            if (err) return reject(err);
            const obj = JSON.parse(data);
            obj.forEach(element => {
                if (element.id === id) {
                    const thiscomment = element.comment;
                    const finalcmt = [...thiscomment, {"text": cmt}];
                    obj[id - 1].comment = finalcmt;
                    fs.writeFile(process.env['JSON_PATH'], JSON.stringify(obj, null, 2), (err) => {
                        if (err) throw err
                        return resolve("success")
                    })
                }
            });
        })
    })
}

Cars.findAll = () => {
    return new Promise ((resolve, reject) => {
        fs.readFile(process.env['JSON_PATH'], (err, data) => {
            if (err) return reject(err);
            return resolve(JSON.parse(data))
        })
    })
}

Cars.findOne = (id) => {
    return new Promise ((resolve, reject) => {
        
        fs.readFile(process.env['JSON_PATH'], (err, data) => {
            if (err) return reject(err);
            const obj = JSON.parse(data);
            const onecar = [];
            obj.forEach(element => {
                if (element.id == id) {
                    onecar.push(element)
                }
            });
            return resolve(onecar)
        })
    })
}

module.exports = Cars;
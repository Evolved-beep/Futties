const Jersey = require("../models/jerseyModel")

exports.createJersey = (req,res) => {
    const jersey = new Jersey({
        title: req.body.title,
        description: req.body.description,
        imageUrl: req.body.imageUrl,
        category: req.body.category,
        price: req.body.price
    });
    jersey.save()
    .then(
        (product) => {
            res.status(201).json({product});
        }
    )
    .catch((error) => {
        res.status(400).json({
            error: error
        });
    })
}

exports.getJersey = (req,res) => {
    Jersey.find()
           .then((jersey) => {
            res.status(200).json(jersey)
           })
           .catch((error) => {
            res.status(400).json({
                error: error
            });
           })
}

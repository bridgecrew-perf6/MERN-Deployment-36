
const Pet = require("../models/pet.model");

module.exports.createPet = (req, res) => {
    const { name, type, description, skill1, skill2, skill3 } = req.body;
    Pet.create({
        name,
        type,
        description,
        skill1,
        skill2,
        skill3
    })
        .then(pet => res.json(pet))
        .catch(err => res.status(400).json(err));
}

module.exports.findAllPet = (req, res) => {
    Pet.find({})
    .then(allPets => res.json( allPets ))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.deletePet = (req, res) => {
    Pet.deleteOne({ _id: req.params.id })
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.json(err))
}

module.exports.findOnePet = (req, res) => {
    Pet.findOne({_id: req.params.id})
    .then(onePet => res.json( onePet ))
    .catch(err => res.status(400).json({ message: "Something went wrong", error: err }));
};

module.exports.editPet = (req, res) => {
    Pet.updateOne({_id: req.params.id}, req.body, {runValidators: true})
    .then(updatedPet => res.json( updatedPet ))
    .catch(err => res.status(400).json({ message: "Something went wrong", error: err }));
};
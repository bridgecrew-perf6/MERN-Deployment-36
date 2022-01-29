const PetController = require('../controllers/pet.controller');

module.exports = (app) => {
    app.get("/api/pet", PetController.findAllPet);
    app.post("/api/pet/new", PetController.createPet);
    app.delete('/api/pet/delete/:id', PetController.deletePet);
    app.get("/api/pet/one/:id", PetController.findOnePet);
    app.put('/api/pet/edit/:id', PetController.editPet);
}

var mongoose = require('mongoose'); //modulo do mongose para persistencia no MongoDb
var Schema = mongoose.Schema;

// Criação do modelo
var userSchema = new Schema({
    apelido: String,
    dono: { type: String, required: true, unique: true },
    vivo: Boolean,
    endereco: String,
    dataNascimento: Date,
    dataCriacao: Date,
    dataAlteracao: Date
});

var Animal = mongoose.model('Animal', userSchema);



// Atualização de data ou inclusao data de criação
userSchema.pre('save', function(next) {

    var currentDate = new Date();
    this.dataAlteracao = currentDate;

    if (!this.dataCriacao)
        this.dataCriacao = currentDate;

    next();
});

module.exports = Animal;
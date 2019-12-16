const mongoose = require("mongoose");

const Schema = mongoose.Schema;
mongoose.connect('mongodb://dbuser:pass1234@ds016098.mlab.com:16098/griddb');

let Prod = 1;
const userSchema = mongoose.Schema({
    vkontakteId: String,
    answer: Number
})

const User = mongoose.model('User', userSchema)
for(let i = 2; i <= process.env.NUM; ++i){
    Prod = Prod * i
}

User.findOneAndUpdate({ vkontakteId:process.env.ID},{answer: Prod}, function(err, doc){
    mongoose.disconnect();
    
    if(err) return console.log(err);
})


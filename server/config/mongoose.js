const mongoose=require('mongoose');
mongoose.set('useNewUrlParser', true);

mongoose.connect('mongodb://localhost/CommerceSchema', {useNewUrlParser: true});
const path=require('path');
const modelsPath=path.join(__dirname, './../models');
const fs=require('fs');

fs.readdirSync(modelsPath).forEach(function(file){
    if(file.indexOf('.js') > -1){
        require(modelsPath + '/' + file);
    }
})
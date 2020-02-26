let erros = []

function ContradoValidacao(){
    erros = []
}

ContradoValidacao.prototype.isRequired = (value, message) => {
    if (!value || value.length <= 0){
        erros.push({message: message})
    }
}

ContradoValidacao.prototype.hasMinLen = (value, min, message) =>{
    if (!value || value.length < min){
        erros.push({message: message})
    }
}

ContradoValidacao.prototype.hasMaxLen = (value, max, message) =>{
    if (!value || value.length > max){
        erros.push({message: message})
    }
}

ContradoValidacao.prototype.ifFixedLen = (value, len, message) =>{
    if (value.length != len){
        erros.push({message: message})
    }
}

ContradoValidacao.prototype.isEmail = (value, message) =>{
    var reg = new RegExp(/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/)
    
    if (!reg.test(value)){
        erros.push({message: message})
    }
}

ContradoValidacao.prototype.erros = () =>{
    return erros
}

ContradoValidacao.prototype.clear = () =>{
    erros = []
}

ContradoValidacao.prototype.isValid = () =>{
    return erros.length == 0
}

module.exports = ContradoValidacao
class Cliente{
    #cpf
    constructor(nome, cpf, endereco, telefones=[]){
        this.nome = nome
        this.endereco = endereco
        this.#cpf = cpf
        this.telefones = new Set(telefones)
    }
    detalhes(){
        let telefonesDetalhes = ""
        for (let tel of this.telefones) {
            telefonesDetalhes += tel.detalhes()
        }
        return '\nnome:'+this.nome +
        this.endereco.detalhes() +
        '\n'+telefonesDetalhes
    }
    #maiusculo(texto){
        return texto.toUpperCase()
    }
    detalhesMaiuscula(){
        let telefonesDetalhes = ""
        for (let tel of this.telefones) {
            telefonesDetalhes += tel.detalhes()
        }
        return '\nnome:'+this.#maiusculo(this.nome) +
        '\n'+this.endereco.detalhesMaiuscula() +
        '\n'+telefonesDetalhes
    }
    #minusculo(texto){
        return texto.toLowerCase()
    }
    detalhesMinusculo(){
        let telefonesDetalhes = ""
        for (let tel of this.telefones) {
            telefonesDetalhes += tel.detalhes()
        }
        return '\nnome:'+this.#minusculo(this.nome) +
        '\n'+this.endereco.detalhesMinusculo() +
        '\n'+telefonesDetalhes
    }
    get pegarcpf(){
        return this.#cpf
    }
}


class Telefone{
    constructor(ddd,numero){
        this.ddd=ddd
        this.numero=numero
    }
    detalhes(){
        return 'DDD: ' + this.ddd + ' Número: ' + this.numero + '\n'
    }
}


class Endereco{
    constructor(estado,cidade,rua,num){
        this.estado = estado
        this.cidade=cidade
        this.rua=rua
        this.num=num
    }
    detalhes(){
        return '\nEstado: ' + this.estado + ' cidade: ' + this.cidade + ' rua: '+this.rua + ' numero: ' + this.num
    }
    #maiusculo(texto){
        return texto.toUpperCase()
    }
    detalhesMaiuscula(){
        return '\nestado:'+this.#maiusculo(this.estado) +
        '\ncidade:'+this.#maiusculo(this.cidade) +
        '\nrua:'+this.#maiusculo(this.rua) +
        '\nnumero:'+this.num
    }
    #minusculo(texto){
        return texto.toLowerCase()
    }
    detalhesMinusculo(){
        return '\nestado:'+this.#minusculo(this.estado) +
        '\ncidade:'+this.#minusculo(this.cidade) +
        '\nrua:'+this.#minusculo(this.rua) +
        '\nnumero:'+this.num
    }
}


class Empresa{
    #cnpj
    constructor(razao,nome,cnpj, endereco, telefones=[], clientes=[]){
        this.endereco = endereco
        this.nome=nome
        this.razao=razao
        this.#cnpj=cnpj
        this.clientes=new Set(clientes)
        this.telefones=new Set(telefones)
    }
    detalhes(){
        let clientesDetalhes = ""
        for (let cliente of this.clientes) {
            clientesDetalhes += cliente.detalhes()
        }
        let telefonesDetalhes = ""
        for (let tel of this.telefones) {
            telefonesDetalhes += tel.detalhes()
        }
        return 'Razão Social:'+this.razao +
        '\nNome fantasia:'+this.nome +
        '\n---------------------------' +
        '\n'+clientesDetalhes
    }
    #maiusculo(texto){
        return texto.toUpperCase()
    }
    detalhesMaiuscula(){
        let clientesDetalhes = ""
        for (let cliente of this.clientes) {
            clientesDetalhes += cliente.detalhesMaiuscula()
        }
        let telefonesDetalhes = ""
        for (let tel of this.telefones) {
            telefonesDetalhes += tel.detalhes()
        }
        return '\nrazaosocial:'+this.#maiusculo(this.razao) +
        '\nnome:'+this.#maiusculo(this.nome) +
        '\ncnpj:'+this.#cnpj +
        '\n'+this.endereco.detalhesMaiuscula() +
        '\nTelefones:'+telefonesDetalhes +
        '\n'+clientesDetalhes
    }
    #minusculo(texto){
        return texto.toLowerCase()
    }
    detalhesMinusculo(){
        let clientesDetalhes = ""
        for (let cliente of this.clientes) {
            clientesDetalhes += cliente.detalhesMinusculo()
        }
        let telefonesDetalhes = ""
        for (let tel of this.telefones) {
            telefonesDetalhes += tel.detalhes()
        }
        return '\nrazaosocial:'+this.#minusculo(this.razao) +
        '\nnome:'+this.#minusculo(this.nome) +
        '\ncnpj:'+this.#cnpj +
        '\n'+this.endereco.detalhesMinusculo() +
        '\nTelefones:'+telefonesDetalhes +
        '\n'+clientesDetalhes
    }
    get pegarcnpj(){
        return this.#cnpj
    }
}

exports.Cliente = Cliente
exports.Telefone = Telefone
exports.Endereco = Endereco
exports.Empresa = Empresa
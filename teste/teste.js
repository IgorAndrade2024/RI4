import { Cliente,Endereco,Empresa,Telefone } from "ri4";

let ec1 = new Endereco("SP","Pepe","Abra","1")
let ec2 = new Endereco("SE","Nenem","Cadabra","2")
let ec3 = new Endereco("MG","Maracas","Alacazam","3")
let ec4 = new Endereco("UK","Bruxelas","Pikachu","4")
let ec5 = new Endereco("LM","São Roque","Moltres","5")
let tc1 = new Telefone("01","111")
let tc2 = new Telefone("02","222")
let tc3 = new Telefone("03","333")
let tc4 = new Telefone("04","444")
let tc5 = new Telefone("04","555")
let tc6 = new Telefone("06","666")
let tc7 = new Telefone("07","777")
let tc8 = new Telefone("08","888")
let tc9 = new Telefone("09","999")
let tc10 = new Telefone("10","101010")

let cli1 = new Cliente('A','1234',ec1,[tc1,tc2])
let cli2 = new Cliente('B','2345',ec2,[tc3,tc4])
let cli3 = new Cliente('C','3456',ec3,[tc5,tc6])
let cli4 = new Cliente('D','4567',ec4,[tc7,tc8])
let cli5 = new Cliente('E','5678',ec5,[tc9,tc10])

let ee1 = new Endereco("SP","São José dos Campos","Eletricistas","1512")
let te1 = new Telefone("12","39384756")
let te2 = new Telefone("15","63549743")

let emp1 = new Empresa("Spark LTDA","Finanças","1-123456.12", ee1, [te1,te2], [cli1,cli2,cli3,cli4,cli5])

console.log(emp1.detalhes())

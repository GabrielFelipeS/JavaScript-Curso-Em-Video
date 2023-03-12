var data_nascimento = 2003
var ano = new Date();
var idade = ano.getFullYear() - data_nascimento;

console.log(`Você tem ${idade} anos. `)
if( idade < 16){
    console.log('Não vota')
}
else if(idade < 18 || idade > 65){
    console.log('Voto opcional');
}    
else{
        console.log('Voto obrigatorio');
    }

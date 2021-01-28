/* 1. Crie um arquivo countries.js separado e armazene a matriz de países neste arquivo, 
      crie um arquivo separado web_techs.js e armazene a matriz webTechs neste arquivo. 
      Acesse os dois arquivos no arquivo main.js
 */
const moduleWebTech = require('./web_techs.js')
const moduleCountries = require('./countries.js')

console.log(moduleWebTech.webTechs + '\n' + moduleCountries.countries)

/* 2. Primeiro remova todas as pontuações e mude a string para array e conte o número de palavras no array*/
let text =
  'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
let words = text.replace(/[.,]/g,"").split(' ')
console.log(words)
console.log(words.length)

/* 3. No seguinte carrinho de compras, adicione, remova e edite itens
adicione 'Carne' no início do seu carrinho de compras, se ainda não tiver sido adicionado
adicione Sugar no final do seu carrinho de compras, se ainda não tiver sido adicionado
remova 'Honey' se você é alérgico a mel
modificar chá para 'chá verde' */

const  shoppingCart  =  [ 'Leite' ,  'Café' ,  'Chá' ,  'Mel' ]
{
  /* 1. Crie um arquivo countries.js separado e armazene a matriz de países neste arquivo, 
      crie um arquivo separado web_techs.js e armazene a matriz webTechs neste arquivo. 
      Acesse os dois arquivos no arquivo main.js
 */
  const moduleWebTech = require("./web_techs.js");
  const moduleCountries = require("./countries.js");

  console.log(moduleWebTech.webTechs + "\n" + moduleCountries.countries);
}
{
  /* 2. Primeiro remova todas as pontuações e mude a string para array e conte o número de palavras no array*/
  let text =
    "I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.";
  let words = text.replace(/[.,]/g, "").split(" ");
  console.log(words);
  console.log(words.length);
}
{
  /* 3. No seguinte carrinho de compras, adicione, remova e edite itens
adicione 'Carne' no início do seu carrinho de compras, se ainda não tiver sido adicionado
adicione Sugar no final do seu carrinho de compras, se ainda não tiver sido adicionado
remova 'Honey' se você é alérgico a mel
modificar chá para 'chá verde' */

  const shoppingCart = ["Leite", "Café", "Chá", "Mel"];
  var existCarne = false;
  var existSugar = false;
  shoppingCart.map((el) => {
    if (el == "Carne") {
      existCarne = true;
    }
    if (el == "Açúcar") {
      existSugar = true;
    }
  });
  if (!existCarne) {
    shoppingCart.unshift("Carne");
  }
  if (!existSugar) {
    shoppingCart.push("Açúcar");
  }
  shoppingCart.splice(shoppingCart.indexOf("Mel"), 1);
  shoppingCart[shoppingCart.indexOf("Chá")] = "Chá Verde";
  console.log("Carrinhoo: " + shoppingCart);
}

{
  /*4. Na matriz de países, verifique se 'Etiópia' existe na matriz, se houver, imprima 'ETIÓPIA'. 
    Se não existir, adicione à lista de países.
 */
  const moduleCountries = require("./countries.js");
  const index = moduleCountries.countries.indexOf("Ethiopia");
  if (index !== -1) {
    return console.log("\n" + moduleCountries.countries[index]);
  }
  moduleCountries.countries.push("Ethiopia");
  console.log("\n" + moduleCountries.countries);
}

{
  /*5.No array webTechs, verifique se Sass existe no array e se existe imprima 'Sass é um pré-processo CSS'. 
    Se não existir, adicione Sass ao array e imprima o array.
  */
  const moduleWebTech = require("./web_techs.js");
  const index = moduleWebTech.webTechs.indexOf("Sass");
  if (index !== -1) {
    return console.log(
      "\n" + moduleWebTech.webTechs[index] + " is a CSS preprocess"
    );
  }
  moduleWebTech.webTechs.push("Sass");
  console.log("\n" + moduleWebTech.webTechs);
}

{
  /* 
    6. Concatenate the following two variables and store it in a fullStack variable.
  */
  const frontEnd = ["HTML", "CSS", "JS", "React", "Redux"];
  const backEnd = ["Node", "Express", "MongoDB"];
  const fullStack = [...frontEnd, ...backEnd];
  console.log(fullStack);
}

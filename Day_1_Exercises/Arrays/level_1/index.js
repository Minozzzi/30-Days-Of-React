const emptyArray = [];

const fiveElementsArray = [1, 2, 3, 4, 5];
const length  = fiveElementsArray.length;

const firstItem = fiveElementsArray[0];

const middleItem = fiveElementsArray[2];

const lastItem = fiveElementsArray[length - 1];

const mixedDataTypes = ['string', true, 1, 1.68, null, {}, undefined];

const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']
console.log(itCompanies);
console.log(`Companies length: ${itCompanies.length}\n`);
console.log(`First Company: ${itCompanies[0]}`);
console.log(`Middle Company: ${itCompanies[3]}`);
console.log(`Last Company: ${itCompanies[itCompanies.length -1] }\n`);

itCompanies.map(item => {console.log(item)});

console.log('\n');

itCompanies.map(item => {
    let uppercaseCompany = item.toUpperCase();
    console.log(uppercaseCompany);
});

console.log( `\n${itCompanies[0]}, ${itCompanies[1]}, ${itCompanies[2]}, ${itCompanies[3]}, ${itCompanies[4]}, ${itCompanies[5]} e ${itCompanies[6]} são grandes empresas de TI\n` );


const searchCompany = () =>{
    let found = false;
    itCompanies.find(item => {
        if(item == 'Google'){
            found = true;
        }
    });
    return found;
}
if (searchCompany()){
    console.log('\nGoogle');
}else{
    console.log('\nEmpresa não encontrada');
}

const findTheO = (emp) => {
    count = 0;
    for (let index = 0; index < emp.length; index++) {
        if (emp[index] == 'o') {
            count += 1;
        }
    }
    return count;
}
itCompanies.forEach(item => {
    const count = findTheO(item);
    if (count > 1) {
        console.log(`\n${item}`)
    }
})

console.log(`\n${itCompanies.sort()}`)
console.log(`\n${itCompanies.slice(0, 3)}`)
console.log(`\n${itCompanies.slice(4, 7)}`)
console.log(`\n${itCompanies.reverse()}`)
const firstItem1 = itCompanies.shift();
console.log(`\n${firstItem1}, \n${itCompanies}`)
const middleItem1 = itCompanies.slice(2, 3);
console.log(`\n${middleItem1}, \n${itCompanies}`)
const lastItem1 = itCompanies.pop();
console.log(`\n${lastItem1}, \n${itCompanies}`)
const all = itCompanies.slice(0,itCompanies.length - 1);
console.log(`\n${all}, \n${itCompanies}`)

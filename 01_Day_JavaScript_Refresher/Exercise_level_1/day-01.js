// 1.- Declare an empty array;
 const anyArray = []
// 2.-  Declare an array with more than 5 number of elements
const oneArray = [ 'isac', 12, 'fidel', 2, 'febrero', 1994];


// 3.- Find the length of your array
const findArray = oneArray.filter(item => item.length <= 7);
console.log('anyArray', anyArray);
console.log('oneArray', oneArray);

// 4.- Get the first item, the middle item and the last item of the array
const firts = oneArray[0];
const middle = oneArray[3];
const last = oneArray[5];

console.log('firts', firts);
console.log('middle', middle);
console.log('last', last);


// 5 *Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5

const mixDatatypes = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB',
  ] ;

  const findFive = mixDatatypes.filter(item => item.length >= 5);
  console.log('greater', findFive);

// 6.- Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon

const itCompanies = [
    'Facebook', 
    'Google',
    'Microsoft',
    'Apple',
    'IBM',
    'Oracle',
    'Amazon'
];

// 7.- Print the array using console.log()
console.log('the array', itCompanies);

// 8.-Print the number of companies in the array
const numberArryas = itCompanies.length;
console.log('Print the number of companies in the array', numberArryas)

// 9.- Print the first company, middle and last company
const firtsCompanie = itCompanies[0];
const middleCompanie = itCompanies[3];
const lastCompanie = itCompanies[5];

console.log('firtsCompanie', firtsCompanie);
console.log('middleCompanie', middleCompanie);
console.log('lastCompanie', lastCompanie);

// 10.- Print out each company
console.log('eah companie', itCompanies);

// 11.- Change each company name to uppercase one by one and print them out
//  con una Funciuon 
const itCompanie = 'facebook, google, microsoft, apple, iBM, oracle, amazon';
// Con una function 
function exerciseJoin(itCompanie) {
    return itCompanie.split(' ').join('-').toUpperCase();
}
const allCompanies = exerciseJoin(itCompanie);

console.log('All companies', allCompanies);
//  one metodo
const allcompanies2 = itCompanie.split(' ').join('-').toUpperCase();
console.log('all companies one', allcompanies2);


// 12.- Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.

const itCompanies12 = [
  'Facebook', 
  'Google',
  'Microsoft',
  'Apple',
  'IBM',
  'Oracle',
  'Amazon'
];
const joincompanies = itCompanies12.toString();
console.log('join companies', itCompanies12);

// 13. Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found

const itCompanies13 = [
  'Facebook', 
  'Google',
  'Microsoft',
  'Apple',
  'IBM',
  'Oracle',
  'Amazon'
];
// one option 
const oneOption = itCompanies13.filter( item => item.length <= 5);

console.log('companies', itCompanies13);
console.log(' Check Apple & IBM ', oneOption);


// one option
const newCompanies = [];

for (let index = 0; index < itCompanies13.length; index++) {
  const element = itCompanies13[index];
  if (element <= 4) {
    newCompanies.push(element);
  }
};

console.log('itCompanies13', itCompanies13);
console.log('newComanies', newCompanies);


// 14.- Filter out companies which have more than one 'o' without the filter method

const itCompanies14 = [
  'Facebook', 
  'Google',
  'Microsoft',
  'Apple',
  'IBM',
  'Oracle',
  'Amazon'
];

let includeArray = false;

// with and for
for (let i = 0; i < itCompanies14.length; i++) {
  const element = itCompanies14[i];
  if (element === 'Google') {
    includeArray = true;
    break;
  }
}
//  with one line 
const findO = itCompanies14.includes('Goo');
// print
console.log('with a for', includeArray);
console.log('with one line', findO);


// 15.- Sort the array using sort() method

const itCompanies15 = [
  'Facebook', 
  'Google',
  'Microsoft',
  'Apple',
  'IBM',
  'Oracle',
  'Amazon'
];
// Method sort
itCompanies15.sort();
// Method sort in order 
itCompanies15.sort((a, b) => a.localeCompare(b));
// Print
console.log('Method sort',itCompanies15);

// 16.- Reverse the array using reverse() method
const itCompanies16 = [
  'Facebook', 
  'Google',
  'Microsoft',
  'Apple',
  'IBM',
  'Oracle',
  'Amazon'
];
// Method reverse 
itCompanies16.reverse();
// print
console.log(itCompanies16);

// 17.- Slice out the first 3 companies from the array

const itCompanies17 = [
  'Facebook', 
  'Google',
  'Microsoft',
  'Apple',
  'IBM',
  'Oracle',
  'Amazon'
];
// Method slice
const sliceNew = itCompanies17.slice(0, 3);
// print
console.log( 'slice Companies', sliceNew);

// 18.- Slice out the last 3 companies from the array
const itCompanies18 = [
  'Facebook', 
  'Google',
  'Microsoft',
  'Apple',
  'IBM',
  'Oracle',
  'Amazon'
];
// Method slice
const newSlice = itCompanies18.slice(4, 7);
// print
console.log( 'slice Companies', newSlice);

// 19.- Slice out the middle IT company or companies from the array
const itCompanies19 = [
  'Facebook', 
  'Google',
  'Microsoft',
  'Apple',
  'IBM',
  'Oracle',
  'Amazon'
];
// Method slice
const sliceNeww = itCompanies19.slice(3, 4);
// print
console.log( 'slice Companies', sliceNeww);

// 20.- Remove the first IT company from the array
const itCompanies20 = [
  'Facebook', 
  'Google',
  'Microsoft',
  'Apple',
  'IBM',
  'Oracle',
  'Amazon'
];
// Method shif 
itCompanies20.shift();
// print
console.log('remove the first', itCompanies20);

// 21.- Remove the middle IT company or companies from the array
const itCompanies21 = [
  'Facebook', 
  'Google',
  'Microsoft',
  'Apple',
  'IBM',
  'Oracle',
  'Amazon'
];
// using the method delete
delete itCompanies21[3];
// print
console.log('Remove the middle', itCompanies21);


// 22.- Remove the last IT company from the array

const itCompanies22 = [
  'Facebook', 
  'Google',
  'Microsoft',
  'Apple',
  'IBM',
  'Oracle',
  'Amazon'
];
// Method pop 
const theLAst =  itCompanies22.pop();
// print
console.log('Remove the last ', theLAst);

// 23.- Remove all IT companies
const itCompanies23 = [
  'Facebook', 
  'Google',
  'Microsoft',
  'Apple',
  'IBM',
  'Oracle',
  'Amazon'
];
// Method splice
const removeAll = itCompanies23.splice();
// print
console.log('Delete all', removeAll);
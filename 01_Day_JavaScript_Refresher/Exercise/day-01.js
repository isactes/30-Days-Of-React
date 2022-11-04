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
// /* **************** Задание № 1 **************** */

// //           ****** Задание № 1-1 ******
// console.log(`****** Задание № 1-1 ******`);

// function mergeArrays(...arrays) {
//   return [].concat(...arrays);
// }

// const array1 = [1, 2, 3];
// const array2 = [4, 5, 6];
// console.log(mergeArrays(...array1, ...array2));



// //           ****** Задание № 1-2 ******
// console.log(`\n****** Задание № 1-2 ******`);

// function removeDuplicates() {
//   return [...new Set(arguments)];
// };

// console.log(removeDuplicates(1, 2, 3, 2, 4, 1, 5));



// /* **************** Задание № 2 **************** */

// //           ****** Задание № 2-1 ******
// console.log(`****** Задание № 2-1 ******`);

// const getEvenNumbers = (...arrays) => {
//   return arrays.filter(index => index % 2 === 0);
// };

// console.log(getEvenNumbers(1, 2, 3, 4, 5, 6));



// //           ****** Задание № 2-2 ******
// console.log(`\n****** Задание № 2-2 ******`);

// const calculateAverage = (...arrays) => {
//   const sum = arrays.reduce((acc, val) => acc + val, 0);
//   return sum / arrays.length;
// };

// console.log(calculateAverage(1, 2, 3, 4, 5, 6));



// //           ****** Задание № 2-3 ******
// console.log(`\n****** Задание № 2-3 ******`);

// const capitalizeFirstLetter = (string) => {
//   if (!string) return "Строка не передана"; // Возвращаем пустую строку, если на вход пришло null или ""

//   return string
//     .trim() // Убираем лишние пробелы в начале и конце
//     .split(/\s+/) // Разделяем по любому количеству пробелов (один или более)
//     .map(str => str.charAt(0).toUpperCase() + str.slice(1))
//     .join(' ');
// };

// console.log(capitalizeFirstLetter('Напишите функцию capitalizeFirstLetter, которая принимает строку в качестве аргумента и возвращает новую строку'));



// /* **************** Задание № 3 **************** */
// console.log(`****** Задание № 3 ******`);

// function createCalculator(number) {
//   let startValue = number;
//   return {
//     add (value) {
//       return startValue + value;
//     },
//     subtract (value) {
//       return startValue - value;
//     }

//   }
// }

// console.log(createCalculator(12).add(5));     // 17
// console.log(createCalculator(12).subtract(5)); // 7
// console.log(createCalculator(12).startValue);  // undefined





// /* **************** Задание № 4 **************** */
// console.log(`****** Задание № 4 ******`);

// function createGreeting(userName) {
//   const name = userName ? userName.trim() : "Гость"; // Убираем лишние пробелы и проверяем на null или undefined
//   return `Hello, ${name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()}!`;
// }

// console.log(createGreeting('    Helga      ')); // "Hello, Helga!"
// console.log(createGreeting('iVAN')); // "Hello, Ivan!"
// console.log(createGreeting('    NIK      ')); // "Hello, Nik!"
// console.log(createGreeting());



// /* **************** Задание № 5 **************** */
// console.log(`****** Задание № 5 ******`);

// function createPasswordChecker(passwordLength) {
//   return function(password) {
//     if (typeof password !== 'string') {
//       return "Пароль должен быть строкой";
//     } else if (password.length === 0) {
//       return "Пароль не может быть пустым";
//     } else {
//       return password.length <= passwordLength;
//     }
//   };
// }

// const checkPassword = createPasswordChecker(8);
// console.log(checkPassword("password11")); // false
// console.log(checkPassword("pass"));     // true


/* **************** Задание № 6 **************** */
console.log(`****** Задание № 6 ******`);

function sumDigits(number) {
  const digits = Math.abs(number).toString();
  let sum = 0;
  for (let i = 0; i < digits.length; i++) {
    sum += parseInt(digits[i]);
  }
  return sum;
}

console.log(sumDigits(123));
console.log(sumDigits(-456));
console.log(sumDigits(456789));
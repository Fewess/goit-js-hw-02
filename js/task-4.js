const formatString = function (string) {
    let size = 40;

 if (string.length > size)
      return string.substring(0, size)+'...';
   else
      return string;
}
    
console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
// вернется оригинальная строка

console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
// вернется форматированная строка

console.log(formatString('Curabitur ligula sapien.'));
// вернется оригинальная строка

    console.log(
        formatString(
            'Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.',
        ),
    );
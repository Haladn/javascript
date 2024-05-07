// Create a function to change decimal number to roman numerals

function convertToRoman(num) {
    const onesRomanNumerals = ["","I","II","III","IV","V","VI","VII","VIII","IX"];
    
    const tensRomanNumerals = ["","X","XX","XXX","XL","L","LX","LXX","LXXX","XC"];
  
    const hundredsRomanNumerals = ["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM"];
  
    const thousandsRomanNumerals = ["","M","MM","MMM"];
  
    //extract individual digits from num
    const thousandsPlace = Math.floor(num/1000);
    const hundredsPlace = Math.floor((num%1000)/100);
    const tensPlace = Math.floor((num%100)/10);
    const onesPlace = num%10;

    const romanNumber =thousandsRomanNumerals[thousandsPlace]  + hundredsRomanNumerals[hundredsPlace]+tensRomanNumerals[tensPlace]+onesRomanNumerals[onesPlace];
    console.log(romanNumber)
    return romanNumber;
  }
  
convertToRoman(2) //should return the string II.
convertToRoman(3) //should return the string III.
convertToRoman(4) // return the string IV.
convertToRoman(5) //should return the string V.
convertToRoman(9) //should return the string IX.
convertToRoman(12) //should return the string XII.
convertToRoman(16) //should return the string XVI.
convertToRoman(29) //should return the string XXIX.
convertToRoman(44) //should return the string XLIV.
convertToRoman(45) //should return the string XLV.
convertToRoman(68) //should return the string LXVIII
convertToRoman(83) //should return the string LXXXIII
convertToRoman(97) //should return the string XCVII
convertToRoman(99) //should return the string XCIX
convertToRoman(400) //should return the string CD
convertToRoman(500) //should return the string D
convertToRoman(501) //should return the string DI
convertToRoman(649) //should return the string DCXLIX
convertToRoman(798) //should return the string DCCXCVIII
convertToRoman(891) //should return the string DCCCXCI
convertToRoman(1000) //should return the string M
convertToRoman(1004) //should return the string MIV
convertToRoman(1006) //should return the string MVI
convertToRoman(1023) //should return the string MXXIII
convertToRoman(2014) //should return the string MMXIV
convertToRoman(3999) //should return the string MMMCMXCIX

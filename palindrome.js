function palindrome(str) {
    // define our regular expression to match all non-alphanumberic characters
    const regx = /[^a-zA-Z0-9]/g;
  
    // getting all alphanamuric characters
    let alphaNumeric = str.replace(regx,'');
  
    // change it to lowercase
    alphaNumeric = alphaNumeric.toLowerCase();
  
  // checking for palindrome
    if(alphaNumeric === alphaNumeric.split('').reverse().join('')){
      return true;
    }
    return false;
  }
  
    palindrome("_eye");
    palindrome("eye")
    palindrome("eye") 
    palindrome("_eye")
    palindrome("race car")
    palindrome("not a palindrome")
    palindrome("A man, a plan, a canal. Panama")
    palindrome("never odd or even")
    palindrome("nope")
    palindrome("almostomla")
    palindrome("My age is 0, 0 si ega ym.") 
    palindrome("1 eye for of 1 eye.") 
    palindrome("0_0 (: /-\ :) 0-0") 
    palindrome("five|\_/|four")
function maskEmail(email){
    let hide = "*"; 
    let findText = email.slice(0, (email.indexOf("@"))); 
    let emailCheck = email.slice(email.indexOf("@")); 
    
    let textToHide = findText[0] + hide.repeat(findText.length - 2) + findText[findText.length - 1];
    return textToHide + emailCheck;
  }
  
  let email = "apple.pie@example.com";
  console.log(maskEmail(email)); 
  
  email = prompt(); 
  console.log(maskEmail(email)); 
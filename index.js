function scuberGreetingForFeet(someValue){
  if (someValue <= 400) {
    return "This one is on me!"
  }
  if (someValue > 2000 && someValue<2500) {
    return 'I will gladly take your thirty bucks.'
  }

  else {
    return 'No can do.'
  }

 
}

function ternaryCheckCity(city){

  const message = city === 'NYC' ? ("Ok, sounds good.") : ("No go.");

  return message;


}

function switchOnCharmFromTip(tip){
    
    let message;
    switch(tip){
    
    case 'generous':
    message = "Thank you so much.";
    break;

    case 'not as generous':
    message = "Thank you.";
    break;

    default:
    message = "Bye.";
    break;
    }
        return message;
  
}
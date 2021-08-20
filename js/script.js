function displayHandler(changeDisplay) {
    getArrayInput();
    getArrayText();
    
    if(changeDisplay == true && confirm('Are you flipping the form just right?')){
        document.getElementById("display-main-content").style = "display: none";
        document.getElementById("display-confirm-content").style = "display: block";
    }
    if(changeDisplay == false){
        document.getElementById("display-main-content").style = "display: block";
        document.getElementById("display-confirm-content").style = "display: none";
    } 
}

function getArrayText() {
    for (let i = 0; i < idArrayText.length; i++) {
        const textInput = idArrayText[i];
        const text = document.getElementById(textInput +'-input').innerText;
        document.getElementById(textInput + '-output').innerText = text;
    }
}
let idArrayText = ['subtotal', 'vat', 'total'];
getArrayText(idArrayText);

function getArrayInput(){
    for (let i = 0; i < idArray.length; i++) {
        const valueInput = idArray[i];
        const input = document.getElementById(valueInput +'-input').value;
        document.getElementById(valueInput + '-output').innerText = input;
    }
}
let idArray = ['flying-from', 'flying-to', 'departure', 'return', 'first-class', 'economy'];
getArrayInput(idArray);


function ticketChangeHandler(ticketQuality, isIncrease) {
    const inputValueNumber = getInputNumber(ticketQuality)
    let newTicketCount = inputValueNumber;
    if (isIncrease == true) {
        newTicketCount = inputValueNumber + 1;
    }
    if (isIncrease == false && inputValueNumber > 0) {
        newTicketCount = inputValueNumber - 1;
    }
    document.getElementById(ticketQuality).value = newTicketCount;
    calculatorAmount();
}
function calculatorAmount() {
    const firstClassTicketsNumber = getInputNumber('first-class-input');
    const economyClassTicketsNumber = getInputNumber('economy-input');

    const firstClassTicketsCost = firstClassTicketsNumber * 150;
    const economyClassTicketsCost = economyClassTicketsNumber * 100;

    const subtotalAmount = firstClassTicketsCost + economyClassTicketsCost;
    document.getElementById("subtotal-input").innerText = subtotalAmount;
    const vatAmount = subtotalAmount * 0.1;
    document.getElementById("vat-input").innerText = vatAmount;
    const totalAmount = subtotalAmount + vatAmount;
    document.getElementById("total-input").innerText = totalAmount;
};

function getInputNumber(ticketQuality) {
    const Tickets = document.getElementById(ticketQuality).value;
    const TicketsNumber = parseInt(Tickets);
    return TicketsNumber;
}

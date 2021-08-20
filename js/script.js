function ticketChangeHandler(ticketQuality, isIncrease){
    const inputValueNumber = getInputNumber(ticketQuality)
    let newTicketCount = inputValueNumber;
    if(isIncrease == true){
        newTicketCount = inputValueNumber + 1;
    }
    if(isIncrease == false && inputValueNumber > 0){
        newTicketCount = inputValueNumber - 1;
    }
    document.getElementById(ticketQuality).value = newTicketCount;
    calculatorAmount();
}
function calculatorAmount() {
    const firstClassTicketsNumber = getInputNumber('first-class');
    const economyClassTicketsNumber = getInputNumber('economy-class');

    const firstClassTicketsCost = firstClassTicketsNumber * 150;
    const economyClassTicketsCost = economyClassTicketsNumber * 100;

    const subtotalAmount = firstClassTicketsCost + economyClassTicketsCost;
    document.getElementById("subtotal-amount").innerText = subtotalAmount;
    const vatAmount = subtotalAmount * 0.1;
    document.getElementById("vat-amount").innerText = vatAmount;
    const totalAmount = subtotalAmount + vatAmount;
    document.getElementById("total-amount").innerText = totalAmount;
};

function getInputNumber(ticketQuality){
    const Tickets = document.getElementById(ticketQuality).value;
    const TicketsNumber = parseInt(Tickets);
    return TicketsNumber;
}
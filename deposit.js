//add event handler to deposit button 

document.getElementById('btn-deposit').addEventListener('click', function(){
     
    const depositField = document.getElementById('deposit-field');
    const depositFieldString = depositField.value;
    const newDepositAmount = parseFloat(depositFieldString);

    depositField.value = newDepositAmount;

    
    // console.log(newDepositAmount);


    const depositTotalElement = document.getElementById('deposit-total');
    const depositTotalString = depositTotalElement.innerText;
    const previousDeposit = parseFloat(depositTotalString);
    

    const totalDeposit = previousDeposit + newDepositAmount;
    depositTotalElement.innerText = totalDeposit;

    // balance section after deposit
    const balanceTotalElement = document.getElementById('balance-field');
    const balanceElementString = balanceTotalElement.innerText;
    const currentBalance = parseFloat(balanceElementString);

    const totalBalance = currentBalance + newDepositAmount;
    balanceTotalElement.innerText = totalBalance;


    depositField.value = ''




})

// withdraw section
document.getElementById('btn-withdraw').addEventListener('click', function(){
    const withdrawAmountElement =document.getElementById('withdraw-amount');
    const withdrawAmountString = withdrawAmountElement.value;
    const newWithdrawAmount = parseFloat(withdrawAmountString);

    const withdrawFieldElement = document.getElementById('withdraw-field');
    const withdrawFieldString = withdrawFieldElement.innerText;
    const currentWithdraw = parseFloat(withdrawFieldString);

    
    

    //balance after withdraw section
    const finalBalanceElement = document.getElementById('balance-field');
    const finalBalanceString = finalBalanceElement.innerText;
    const previousBalanceTotal = parseFloat(finalBalanceString);

    if(newWithdrawAmount > previousBalanceTotal){
        alert('tor baper bank e eto taka nai re');
        return
         
    }

    const withdrawTotal = currentWithdraw + newWithdrawAmount;
    withdrawFieldElement.innerText = withdrawTotal;



    const finalBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    finalBalanceElement.innerText = finalBalanceTotal;
   

    withdrawAmountElement.value = '';

    
})
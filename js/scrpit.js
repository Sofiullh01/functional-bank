

document.getElementById('dopositBtn').addEventListener('click', function(){

    const newDepositAmont = callingValue('inputFiled');
    if(isNaN(newDepositAmont)){
        return alert ('please provide a valid number')
    };

    const displayDeposit =callingText('depositDisplay')
    const totalBlance = callingText('totalBlance');

    const newDisplayDposit = displayDeposit + newDepositAmont ;

    setDisplay('depositDisplay',newDisplayDposit);

    

    const newTotalBlance = totalBlance + newDepositAmont;

    setDisplay('totalBlance', newTotalBlance );

});
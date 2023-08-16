document.getElementById('withdrawBtn').addEventListener('click', function(){

    const inputWithdrawFiled = callingValue('inputWithdrawFiled');

    if(isNaN(inputWithdrawFiled)){
        return alert ('please provide a valid number')
    };
    
    const withdrawDisplay = callingText('withdrawDisplay');

    const totalBlance = callingText('totalBlance');

    if(totalBlance < inputWithdrawFiled){
        return alert ('Atho Taka Nai.');
    };

    const totalWithdraw = withdrawDisplay + inputWithdrawFiled;
    const newTotalBlance = totalBlance - inputWithdrawFiled;

    setDisplay('withdrawDisplay',totalWithdraw);
    setDisplay('totalBlance', newTotalBlance);

    

     
})
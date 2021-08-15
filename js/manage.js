const depositeClick = document.getElementById('deposite-submit');

depositeClick.addEventListener('click', function() {
    const newDepositeAmount = document.getElementById('deposite-amount');

    const newDeposite = parseFloat(newDepositeAmount.value);

    const previousDepositeAount = document.getElementById('depo-got-amount');

    const previousDeposite = parseFloat(previousDepositeAount.innerText);


    const depositeAmount = previousDeposite + newDeposite;

    const showDeposite = document.getElementById('depo-got-amount');
    showDeposite.innerText = depositeAmount;

    const previousBalance = document.getElementById('balance');

    const totalBalance = parseFloat(previousBalance.innerText) + depositeAmount;

    const showBalance = document.getElementById('balance');

    showBalance.innerText = totalBalance;

    newDepositeAmount.value = '';

});


const withdrawClick = document.getElementById('withdraw-submit');

withdrawClick.addEventListener('click', function() {
    const newWithdrawAmount = document.getElementById('withdraw-amount');

    const newWithdraw = parseFloat(newWithdrawAmount.value);

    const previousWithdrawAmount = document.getElementById('with-got-amount');

    const previousWithdraw = parseFloat(previousWithdrawAmount.innerText);


    const withdrawAmount = previousWithdraw + newWithdraw;

    const showWithdraw = document.getElementById('with-got-amount');
    showWithdraw.innerText = withdrawAmount;

    const previousBalance = document.getElementById('balance');

    const totalBalance = parseFloat(previousBalance.innerText) - withdrawAmount;

    const showBalance = document.getElementById('balance');

    showBalance.innerText = totalBalance;

    newWithdrawAmount.value = '';

});
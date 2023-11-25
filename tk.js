document.getElementById('deposit_button').addEventListener('click', function() {
   const depositInput = document.getElementById('deposit_input');
     const deposit_btn = depositInput.value;


    const depositeShow = document.getElementById('totalDeposit_show');
    const depositeTk = depositeShow.innerText;
   
    const totalDepositeTk = parseFloat(deposit_btn) + parseFloat(depositeTk)
    depositeShow.innerText = totalDepositeTk

    depositInput.value = '';

    const balance = document.getElementById('totalBalance');
    const balanceTk = balance.innerText;
    const totalBalanceTk = parseFloat(balanceTk) + parseFloat(deposit_btn);
    balance.innerText = totalBalanceTk
}) 


document.getElementById('withdraw_button').addEventListener('click', function () {
  const withdrawInput = document.getElementById('withdraw_input');
  const withdraw_Text = parseFloat(withdrawInput.value);
  
  const withdraw = document.getElementById('withdraw_total');
  const withdraw_show = parseFloat(withdraw.innerText);
  const total_withdraw = withdraw_show + withdraw_Text;
  withdraw.innerText = total_withdraw;
  
  const balance = document.getElementById('totalBalance');
  const balanceTk = parseFloat(balance.innerText);
  console.log(balanceTk);
  
  const restBalance = balanceTk - withdraw_Text;
  if (restBalance < 0) {
      alert('Insufficient balance');
      return;
  }
  
  balance.innerText = restBalance;
  withdrawInput.value = '';
});






















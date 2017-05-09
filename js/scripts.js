
// Business Logic
function Account(name, amount){
  this.name = name;
  this.amount = amount;
}

  Account.prototype.activity = function(amount) {
    if (deposit >= 1) {
      this.amount += deposit;
    } else if (withdraw >= 1) {
      this.amount -= withdraw;
    } else {
      this.amount;
    }
    return this.amount;
  }

  // User Interface
  $(document).ready(function() {
    var account;

    $("form#register").submit(function(event) {
      event.preventDefault();
      // var withdraw = parseInt($("input#withdrawal").val());
      // var result = account.activity(deposit, withdraw);

      account = new Account (
        $("input#name").val(),
        parseInt($("input#initialDeposit").val())
      );


    $(".currentBal").text(account.name);
    $(".currentBal2").text(account.amount);
    });

  $("form#activity").submit(function(event) {
    event.preventDefault();
    var deposit = parseInt($("input#deposit").val());
    var withdraw = parseInt($("input#withdrawal").val());
    var result = account.activity(deposit, withdraw);

    $(".currentBal").text(account.name);
    $(".currentBal2").text(result);
    console.log(result);
  });
});

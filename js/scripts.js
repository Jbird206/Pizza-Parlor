function PizzaParlor() {
  this.account = [];
  this.currentId = 0
}

PizzaParlor.prototype.addAccount = function(account) {
  account.id = this.assignId();
  this.account.push(account);
}

PizzaParlor.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
}




var Account = function(firstName, lastName, myAddress, price) {
  this.firstName = firstName,
    this.lastName = lastName,
    this.address = myAddress,
    this.price = price;
  return this.firstName + this.lastName + this.address + this.price;
};

var Order = function(firstName, lastName, myAddress, myPrice) {
  this.firstName = firstName,
    this.lastName = lastName,
    this.address = myAddress,
    this.myprice = myPrice;
  return this.firstName + this.lastName + this.address + this.myPrice;
};




///////////////////////////////////front end///////////////////////
var PizzaParlor = new PizzaParlor();


$(document).ready(function() {
  //create account//
  $("form#create-account").submit(function(event) {
    event.preventDefault();
    var inputfirstname = $("input#firstname").val();
    var inputlastname = $("input#lastname").val();
    var inputaddress = $("input#address").val();
    var inputprice = $('input[class="calc"]:checked').val();
    var createAccount = new Account(inputfirstname, inputlastname, inputaddress + inputprice);

    PizzaParlor.addAccount(createAccount);
    $("#outputName").html(inputfirstname + " " + inputlastname + " " + inputaddress + inputprice);
    $("output").html(createAccount.address);
  });


  function calcprice() {
    var price = 0;
    $(".calc:checked").each(function() {
      price += parseInt($(this).val(), 10);
    });

    $("input#output").val(price)
  }
  $().ready(function() {
    $(".calc").change(function() {
      calcprice()
    });
  });
})

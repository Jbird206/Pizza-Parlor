function PizzaParlor() {
  this.account = [];
  this.order = [];
  this.currentId = 0;
  //this.price = price;
  //this.toppings = toppings;
}

PizzaParlor.prototype.addAccount = function(account) {
  account.id = this.assignId();
  this.account.push(account);
}

PizzaParlor.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
}

var Order = function(firstName, lastName, myAddress, price) {
  this.firstName = firstName,
    this.lastName = lastName,
    this.address = myAddress,
    this.price = price;
  return this.firstName + this.lastName + this.address + this.price;
};

PizzaParlor.prototype.addOrder = function() {
var total = parseInt(this.price);
if (this.toppings.lenth > 1) {
  return price + (parseInt(this.toppings.length) - 1);
} else {
  return price;
}
}

var Account = function(firstName, lastName, myAddress, price) {
  this.firstName = firstName,
    this.lastName = lastName,
    this.address = myAddress,
    this.price = price;
  return this.firstName + this.lastName + this.address + this.price;
};

///////////////////////////////////front end///////////////////////
var PizzaParlor = new PizzaParlor();
$(document).ready(function() {

function calcprice() {
  var price = 0;
  $(".calc:checked").each(function() {
    price += parseInt($(this).val(), 10);
  });

  $("input#output").val(price)
  $("#outputOrder").html(price);
}
$().ready(function() {
  $(".calc").change(function() {
    calcprice()
 });
});

  $("form#create-account").submit(function(event) {
    event.preventDefault();
    var inputfirstname = $("input#firstname").val();
    var inputlastname = $("input#lastname").val();
    var inputaddress = $("input#address").val();
    var inputprice = $('input[class="calc"]:checked').val();
    var createAccount = new Account(inputfirstname, inputlastname, inputaddress + inputprice);

    PizzaParlor.addAccount(createAccount);
    $("#outputName").html(inputfirstname + " " + inputlastname + " " + inputaddress + " Your total is $ " + inputprice);
    $("output").html(createAccount.address);
  });

})


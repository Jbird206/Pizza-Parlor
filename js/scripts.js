function PizzaParlor() {
  this.account = [];
  this.currentId = 0
}

PizzaParlor.prototype.addAccount = function (account){
account.id = this.assignId();
this.account.push(account);
}

PizzaParlor.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
}

///////////////////////////////////////Biz////////////////////
var Account = function (firstName, lastName, myAddress) {
  this.firstName = firstName,
  this.lastName = lastName,
  this.address = myAddress;
  return this.firstName + this.lastName + this.address;
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

    var createAccount = new Account(inputfirstname, inputlastname, inputaddress);

    PizzaParlor.addAccount(createAccount);
    $("#outputName").html(inputfirstname + " " + inputlastname + " " + inputaddress);
    $("output").html(createAccount.address);
  
});

//add toppings////////////

// $("form#toppings").submit(function(event) {
//   event.preventDefault();

// })

function calcscore(){
  var score = 0;
  $(".calc:checked").each(function(){
      score+=parseInt($(this).val(),10);
  });
  $("input[name=sum]").val(score)
}
$().ready(function(){
  $(".calc").change(function(){
      calcscore()
  });
});
})

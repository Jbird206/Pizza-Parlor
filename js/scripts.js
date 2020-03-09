function PizzaParlor() {
  this.account = [];
  this.order = [];
  this.price = [];
  this.currentId = 0;
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

// PizzaParlor.prototype.addPrice = function(price) {
// this.
// }


var Account = function(firstName, lastName, myAddress, myPrice) {
  this.firstName = firstName,
    this.lastName = lastName,
    this.address = myAddress,
    this.price = myPrice;
  return this.firstName + this.lastName + this.address + this.price;
};


///////////////////////////////////front end///////////////////////
var PizzaParlor = new PizzaParlor();
$(document).ready(function() {

  // function calcprice() {
  //   var price = 0;
  //   $(".calc:checked").each(function() {
  //     price += parseInt($(this).val(), 10);
  //   });
  
    $("input#output").val(price)
    $("#outputOrder").html(price);
  // }
  // $().ready(function() {
  //   $(".calc").change(function() {
  //     calcprice()
  //  });
  // });

  function calcPrice() {
    var price = 0;
    $("input[type=radio][data-price]:checked").each(function(i, el) {
      price += +$(el).data("price");
    });
    $("#price").text(price);
  }
  
  $("input[type=radio]").on("change", calcPrice);
  calcPrice();

  $("form#create-account").submit(function(event) {
    event.preventDefault();
    var inputfirstname = $("input#firstname").val();
    var inputlastname = $("input#lastname").val();
    var inputaddress = $("input#address").val();
    // works var inputprice = $('input[class="calc"]:checked').val();
    var inputprice =$("input[type=radio][data-price]:checked").val()
    // var inputprice = $("input#price").val();
    var createAccount = new Account(inputfirstname, inputlastname, inputaddress + inputprice);

    PizzaParlor.addAccount(createAccount);
    $("#outputName").html(inputfirstname + " " + inputlastname + " " + inputaddress + " Your total is $ " + inputprice);
    $("output").html(createAccount.address);
  });

})


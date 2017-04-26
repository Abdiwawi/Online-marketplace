$(document).ready(function() {
  $("#blanks form").submit(function(event){ /*referncing of form*/
    var Firstname = $("input#Firstname") .val();
    var Surname = $("input#Surname") .val();
    var Residence = $("input#Residence") .val();
    var StreetAddress = $("input#StreetAddress") .val();
    var HouseNumber = $("input#HouseNumber") .val();

    $(".Firstname").append(FirstnameInput);
         $(".Surname").append(SurnameInput);
         $(".Residence").append(ResidenceInput);
         $(".StreetAddress").append(StreetAddressInput);
         $(".verb").append(verbInput);
         $(".noun").append(nounInput);

}

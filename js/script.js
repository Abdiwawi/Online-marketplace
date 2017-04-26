$(document).ready(function() {
    $("#blanks form").submit(function(event){ /*referncing of form*/
      var Firstname = $("input#Firstname") .val();
      var Surname = $("input#Surname") .val();
      var Residence = $("input#Residence") .val();
      var StreetAddress = $("input#StreetAddress") .val();
      var HouseNumber = $("input#HouseNumber") .val();

      $(".Firstname").append(Firstname);
      $(".Surname").append(Surname);
      $(".Residence").append(Residence);
      $(".StreetAddress").append(StreetAddress);
      $(".HouseNumber").append(HouseNumber);

      $("#story").show();
      $(".Receipt").show();

      event.preventDefault();
    });
  });

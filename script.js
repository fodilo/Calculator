var operation="";
var result=0;
var currentOp="";

$(document).ready(function() {
  /*add on click action to buttons*/


  $(".btn").click(function(event) {
    var texto=$(this).text();
    var a = parseInt(texto);
      if(! isNaN(a) ) {
        // if it's a digit
            if( currentOp.length==12)alert("Only 12 characters are accepted .");
            else {
              operation=operation.concat(texto);
            $("#operation").text(operation);
              currentOp=parseFloat(currentOp.concat(texto)).toString();
            $("#result").text(currentOp);


            }
      }
      // make dot
      else if (texto===".") {if (!currentOp.includes(".")) {
        operation=operation.concat(texto);
        $("#operation").text(operation);

        currentOp=currentOp.concat(".");
          $("#result").text(currentOp);


      }}
      // clear variable
      else if (texto==="C") {
        console.log("hhhh");
        operation=operation.slice(0, -currentOp.length);
        $("#operation").text(operation);
        currentOp="0";
          $("#result").text(currentOp);
      }
          // Clear ALL
      else if (texto==="CE") {
        currentOp="0";operation="";
        $("#result").text(currentOp);
        $("#operation").text(operation);
      }
      else if (texto==="%") {
        if( currentOp.length>=12)alert("Only 12 characters are accepted .");
        else {currentOp=(parseFloat(currentOp)*0.01).toString();
        $("#result").text(currentOp);}

      }
      else if (texto==="=") {

        eval("test=".concat(operation));

        eval ( '$("#result").text(test.toPrecision(7));');
      }else  {if(operation.endsWith("/") ||operation.endsWith("*")
    ||operation.endsWith("+")||operation.endsWith("-"))
    {

    }
    else {
      operation=operation.concat(texto);
      $("#operation").text(operation);

      currentOp="0";

    }
      }




  });
});

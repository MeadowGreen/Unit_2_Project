"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 10
   Case Problem 1

   Author: Meadow Green
   Date:   2-3-20
   
   Filename: tc_cart.js
	
*/
//starts the value of the total at 0
var orderTotal = 0;
//adds the table of the cart to the html
var cartHTML = "<table> <tr> <th>Item</th><th>Description</th><th>Price</th><th>Qty</th><th>Total</th> </tr>";
//goes through the items and adds it to the html in order
for(var i = 0; i<item.length; i++){
    cartHTML += "<tr> <td><img src='tc_" + item[i] +".png' alt=" + item[i] + "/></td>";
    cartHTML += "<td>" + itemDescription[i] + "</td> <td>$" + itemPrice[i] + "</td> <td>" + itemQty[i] + "</td>";
    var itemCost = itemPrice[i] * itemQty[i];
    cartHTML += "<td>$" + itemCost + "</td></tr>";
    orderTotal += itemCost;
}
//adds the total at the end of the tablle in the html
cartHTML += "<tr> <td colspan='4'>Subtotal</td> <td>$" + orderTotal + "</td> </tr> </table>";
document.getElementById("cart").innerHTML = cartHTML;


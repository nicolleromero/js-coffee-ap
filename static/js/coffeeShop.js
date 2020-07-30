"use strict";

// Adds a row (selected item, string) to the cart
const addItemToCart = (itemName) => {
  $('#cart-items').append(`
    <tr>
      <td>${itemName}</td>
    </tr>
  `);
};

// Clears everything out of the cart and resets total to 0
const resetCart = () => {
  $('#cart-total').html('0.00');
  $('#cart-items').empty();
};


// Calculates the total for all items in cart
const incrementCartTotal = (price) => {
  const cartTotal = $('#cart-total');

  let total = Number(cartTotal.html());
  total += price;

  cartTotal.html(total.toFixed(2));
};

// Updates running total of coffees sold up top
const incrementCoffeeSold = (amountSold) => {
  let coffeeSold = Number($('#coffee-sold-counter').html());
  coffeeSold += amountSold;

  $('#coffee-sold-counter').html(coffeeSold);
};

const setProgressAndStatus = (progressVal, statusMsg) => {
  $('#order-progress').attr('value', progressVal);
  $('#order-status-message').html(statusMsg);
};


//
// Add your event handlers below.
//

const button = $('.add-to-order');

button.on('click', () => {
  addItemToCart('Coffee');
  incrementCartTotal(1.50);
  incrementCoffeeSold($('#cart-items').children().length);
  setProgressAndStatus(50, "Successfully added to cart");
});

$('#place-order').on('click', () => {
  setProgressAndStatus(100, "Your order is complete!");
  resetCart();
});

$('#new-order').on('click', () => {
  // $('#coffee-sold-counter').html('0')
  setProgressAndStatus(0, "Start a new order...");
});

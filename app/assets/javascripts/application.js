// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require jquery
//= require jquery.turbolinks
//= require jquery_ujs
//= require_tree .
//= require gritter
//= require tether
//= require popper
//= require bootstrap-sprockets
//= require turbolinks


$('#donateButton').on('click', function(e) {
  e.preventDefault();

  $('#error_explanation').html('');

  var amount = $('input#amount').val();
  amount = amount.replace(/\$/g, '').replace(/\,/g, '')

  amount = parseFloat(amount);

  if (isNaN(amount)) {
    $('#error_explanation').html('<p>Please enter a valid amount in USD ($).</p>');
  }
  else if (amount < 5.00) {
    $('#error_explanation').html('<p>Donation amount must be at least $5.</p>');
  }
  else {
    amount = amount * 100; // Needs to be an integer!
    handler.open({
      amount: Math.round(amount)
    })
  }
});


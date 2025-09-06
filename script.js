// script.js

document.getElementById('driverBtn').addEventListener('click', function() {
  alert('Welcome, Driver! You will be redirected to the driver page.');
  // Redirect to driver page
  // window.location.href = 'driver.html';
});

document.getElementById('passengerBtn').addEventListener('click', function() {
  // Redirect to passenger signup page
  window.location.href = 'passenger.html';
});

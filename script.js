$(document).ready(function () {
  // Submit form
  $("#emailForm").submit(function (event) {
    event.preventDefault(); // Prevent the form from submitting normally

    // Get the email value
    var email = $("#email").val();

    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    $("#successModal").modal("show");
  });
});

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

$(document).ready(function () {
  var totalPrice = 0;

  $(".add-to-cart").click(function () {
    var name = $(this).data("name");
    var price = parseFloat($(this).data("price"));
    totalPrice += price;
    $("#total-price").text(totalPrice.toFixed(2));

    $("#cart-items").append(
      '<li class="list-group-item">' +
        name +
        " - $" +
        price.toFixed(2) +
        ' <button type="button" class="btn px-2 mx-5  btn-danger btn-sm remove-from-cart" data-price="' +
        price +
        '">Remove</button></li>'
    );
  });

  $("#cart").on("click", ".remove-from-cart", function () {
    var price = parseFloat($(this).data("price"));
    totalPrice -= price;
    $("#total-price").text(totalPrice.toFixed(2));
    $(this).closest("li").remove();
  });
});

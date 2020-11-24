$(function () {
  // debugger;
  function after_form_submitted(data) {
    let dataTrim = data.trim();
    let name = document.getElementById("name").value;
    let phone = document.getElementById("phone").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    if (dataTrim == "Message has been sent") {
      window.location.href = "thank-you.html";
      $("form#contactform").hide();
      $("#success_message").show();
      $("#error_message").hide();
      name = "";
      phone = "";
      email = "";
      message = "";
    } else {
      $("#error_message").append("<ul></ul>");

      jQuery.each(data.errors, function (key, val) {
        $("#error_message ul").append("<li>" + key + ":" + val + "</li>");
      });
      $("#success_message").hide();
      $("#error_message").show();

      //reverse the response on the button
      $('button[type="button"]', $form).each(function () {
        $btn = $(this);
        label = $btn.prop("orig_label");
        if (label) {
          $btn.prop("type", "submit");
          $btn.text(label);
          $btn.prop("orig_label", "");
        }
      });
    } //else
  }

  $("#contactform").submit(function (e) {
    e.preventDefault();

    $form = $(this);
    // console.log($form);
    //show some response on the button
    $('button[type="submit"]', $form).each(function () {
      $btn = $(this);
      $btn.prop("type", "button");
      $btn.prop("orig_label", $btn.text());
      $btn.text("Sending ...");
    });

    $.ajax({
      type: "POST",
      url: "skilled.php",
      data: $form.serialize(),
      success: after_form_submitted,
      // dataType: 'json',
    });
  });
});

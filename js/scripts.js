  $(document).ready(function () {
    //form function
    function feedback(form) {
      var name = document.forms["feedback"]["name"].value;
      var email = document.forms["feedback"]["email"].value;
      var message = document.forms["feedback"]["message"].value;
      alert(
        " Your message has been well received! "
      );
    }
  });
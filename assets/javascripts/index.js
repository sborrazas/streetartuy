(function (global) {

  function openModal(id) {
    $(id).fadeIn(500);
  }

  function init() {
    // Open modal links
    $("a.modal-link").click(function (event) {
      event.preventDefault();
      event.stopPropagation();
      openModal($(event.target).attr("rel"));
    });

    // Close modal links
    $("a.close-modal").click(function (event) {
      event.preventDefault();
      $(".modal").fadeOut(500);
    });

    // Click outside modal
    $(document).click(function (event) {
      var $modal = $(".modal");
      if ($modal.is(":visible")) {
        $modal.fadeOut(500);
      }
    });
  };

  (function () {
    var script = document.createElement("script")
      , body = document.getElementsByTagName("body")[0];

    script.type = "text/javascript";
    script.async = true;
    script.src = "https://ajax.googleapis.com/ajax/libs/jquery/1.9.0/jquery.min.js"; // jQuery
    script.onload = init;
    body.appendChild(script);
  }());

}(window));

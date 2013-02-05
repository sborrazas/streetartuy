(function (global) {

  function asyncScriptLoad(url, callback) {
    var script = document.createElement("script")
      , body = document.getElementsByTagName("body")[0];

    script.type = "text/javascript";
    script.async = true;
    script.src = url;
    script.onload = callback;
    body.appendChild(script);
  }

  asyncScriptLoad("https://ajax.googleapis.com/ajax/libs/jquery/1.9.0/jquery.min.js", function () {
    var $toggleNav = $("#toggle-nav");

    // Open modal links
    $("a.modal-link").click(function (event) {
      event.preventDefault();
      event.stopPropagation();
      $($(event.target).attr("rel")).fadeIn(500);
    });

    // Close modal links
    $("a.close-modal").click(function (event) {
      event.preventDefault();
      $(".modal").fadeOut(500);
    });

    // Click outside modal
    $(document).click(function (event) {
      var $modal = $(".modal")
        , $target = $(event.target)
        , clickedInsideModal = $target.parents(".modal").length > 0 || $target.hasClass("modal");

      if ($modal.is(":visible") && !clickedInsideModal) {
        $modal.fadeOut(500);
      }
    });

    $toggleNav.click(function (event) {
      event.preventDefault();

      $toggleNav.toggleClass("active");
      $("nav").toggleClass("active");
    });

    asyncScriptLoad("/assets/javascripts/bootstrap.min.js", function () {
      $("[rel='tooltip']").tooltip();
    });
  });

}(window));

$(document).ready(function() {
  $("a.droppy").click(function() {
    $(this).siblings(".dropdown").toggleClass("active")
  })
})

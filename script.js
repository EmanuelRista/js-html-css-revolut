$(document).ready(function() {
  $("a.droppy").click(function() {
    $(this).siblings().toggleClass("active")
  })
})

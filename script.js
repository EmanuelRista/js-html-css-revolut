$(document).ready(function() {
  $("a.droppy").click(function() {
    $(this).siblings(".mydropdown").toggleClass("active")
  })
})

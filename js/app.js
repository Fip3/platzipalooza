$(document).foundation()

$('[data-toggle-dia]').click(function onclick (ev) {
  var panel = $(this).data('toggleDia')
  $('#lineup-tabs').foundation('selectTab', panel)
})
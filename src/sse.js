function sse()
{
  var sse = new EventSource('sse.php');
  var h   = document.getElementById('header');
  var b   = document.getElementById('body');
  sse.addEventListener('update', function(e)
  {
    var data = JSON.parse(e.data);
    h.innerHTML = '<h1>' + data.header + '</h1>';
    b.innerHTML = '<p>' + data.body + '</p>';
  }, false);
}

window.onload = function()
{
  sse();
};

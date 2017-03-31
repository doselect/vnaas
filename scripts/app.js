var bazUrl = "https://us-central1-vnaas-baz.cloudfunctions.net/baz-dev"

$(document).ready(
function()
{
  $('#value').change(function() {

  //get category value
  var name = $("#value option:selected").text();

  if ( name === "Rust" || name === "C#" || name === "Go" || name === "Java" || name === "Javascript" || name === "Swift" || name === ".NET" ) {
    var result = $.get(bazUrl,"camel")
  }

  if ( name === "F#" ) {
    var result = $.get(bazUrl,"pascal")
  }

  if ( name === "Python" || name === "Ruby" || name === "Rust" || name === "Elixir" || name === "Eiffel" || name === "C" || name === "Perl" || ) {
    var result = $.get(bazUrl,"snake")
  }

  if ( name === "Lisp" ) {
    var result = $.get(bazUrl,"kebab")
  }

  else {
    var result = $.get(bazUrl,"camel")
  }

  });
});

// camel: Rust, C#, Go, Java, Javascript, Swift, .NET
// pascal: F#
// snake: Python, Ruby, Rust, Elixir, Eiffel, C, Perl
// kebab: Lisp

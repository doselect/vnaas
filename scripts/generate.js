$(document).ready(
function()
{
  $('#value').change(function() {

  //get category value
  name = $("#value option:selected").text();

  if ( name === "Rust" || name === "C#" || name === "Go" || name === "Java" || name === "Javascript" || name === "Swift" || name === ".NET" ) {
    "camel"
  }

  if ( name === "F#" || ) {
    "pascal"
  }

  if ( name === "Python" || name === "Ruby" || name === "Rust" || name === "Elixir" || name === "Eiffel" || name === "C" || name === "Perl" || ) {
    "snake"
  }

  if ( name === "Lisp" || ) {
    "kebab"
  }

  else {

  }

  });
});


// camel: Rust, C#, Go, Java, Javascript, Swift, .NET
// pascal: F#
// snake: Python, Ruby, Rust, Elixir, Eiffel, C, Perl
// kebab: Lisp

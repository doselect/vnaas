var bazUrl = 'https://us-central1-vnaas-baz.cloudfunctions.net/baz-dev'

$(document).ready(function () {
  $('#case_select').change(function () {
  // Get category value
    var name = $('#case_select option:selected').val()
    var reqParam = {}

    if (name === 'rust' || name === 'csharp' || name === 'go' || name === 'java' || name === 'javascript' || name === 'swift' || name === 'dotnet') {
      reqParam.case = 'camel'
    } else if (name === 'fsharp') {
      reqParam.case = 'pascal'
    } else if (name === 'python' || name === 'ruby' || name === 'elixir' || name === 'eiffel' || name === 'c' || name === 'perl') {
      reqParam.case = 'snake'
    } else if (name === 'lisp') {
      reqParam.case = 'kebab'
    } else {
      reqParam.case = 'camel'
    }

    $.get(bazUrl, reqParam)
      .success(function (resp) {
        $('#case_display').text(resp.variable)
      })
  })
})

// Case mapping
// camel: Rust, C#, Go, Java, Javascript, Swift, .NET
// pascal: F#
// snake: Python, Ruby, Rust, Elixir, Eiffel, C, Perl
// kebab: Lisp

var bazUrl = 'https://us-central1-vnaas-baz.cloudfunctions.net/baz-dev'

var messages = [
  'Deep learning from Github...',
  'Asking Rob Pike...',
  'Contacting HAL-9000...',
  'Asking Elon Musk...',
  'Asking Satoshi Nakamoto...',
  'Digging up some Pascal code...',
  'Thinking...',
  'Procrastinating...',
  'Contacting Skynet...',
  'Still counting bytes...'
]

var generateVariable = function (msgEl) {
  var name = $('#language').val()
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

  var message = messages[Math.floor(Math.random()*messages.length)];

  msgEl.text(message)
  msgEl.css('visibility', 'visible')
  $.get(bazUrl, reqParam)
    .success(function (resp) {
      $('#var').val(resp.variable)
      msgEl.css('visibility', 'hidden')
    })
}

$(document).ready(function () {
  var msgEl = $('#msg')
  $('#generateButton').click(function () {
    generateVariable(msgEl)
  })
})

// $(document).ready(function () {
//   $('#case_select').change(function () {
//   // Get category value
//     var name = $('#case_select option:selected').val()
//     var reqParam = {}

//     if (name === 'rust' || name === 'csharp' || name === 'go' || name === 'java' || name === 'javascript' || name === 'swift' || name === 'dotnet') {
//       reqParam.case = 'camel'
//     } else if (name === 'fsharp') {
//       reqParam.case = 'pascal'
//     } else if (name === 'python' || name === 'ruby' || name === 'elixir' || name === 'eiffel' || name === 'c' || name === 'perl') {
//       reqParam.case = 'snake'
//     } else if (name === 'lisp') {
//       reqParam.case = 'kebab'
//     } else {
//       reqParam.case = 'camel'
//     }

//     $.get(bazUrl, reqParam)
//       .success(function (resp) {
//         $('#case_display').text(resp.variable)
//       })
//   })
// })

// Case mapping
// camel: Rust, C#, Go, Java, Javascript, Swift, .NET
// pascal: F#
// snake: Python, Ruby, Rust, Elixir, Eiffel, C, Perl
// kebab: Lisp

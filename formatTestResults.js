const getResultsTable = results => {
  const heads = []
  const rows = []
  for(let col = 0 ; col < results.length ; col++) {
    const studRes = results[col]
    if(! heads[col]) {
      heads.push(studRes.name)
    }
    for(let row = 0 ; row < studRes.tests.length ; row++) {
      const test = studRes.tests[row]
      if(! rows[row]) {
        rows[row] = [test.file]
      }
      rows[row][col + 1] = test.status
    }
  }
  // console.log(heads, rows)
  const thead = `<tr><th>Test</th>${ heads.reduce((c, h) => c + `<th>${h}</th>`, '') }</tr>`
  // console.log(thead)
  const tbody = rows.reduce((htmlRows, row) => htmlRows +
    `<tr>${ row.reduce((c, col, i) => c + (i > 0 ? `<td class="${col?'ok':'fail'}">${col}</td>` : `<th>${col}</th>`), '') }</tr>\n`,
    ''
  )
  return `<table class="table table-condensed table-striped">
    <thead>
      ${thead}
    </thead>
    <tbody>
      ${tbody}
    </tbody>
  </table>`
}

const getHtml = table => `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>Test run</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css">
    <style>
    .ok {
      background: #7f7;
    }
    .fail {
      background: #f77;
    }
    </style>
  </head>
  <body>
    <div class="container-fluid">
      <div id="main">${table}</div>
    </div>
    <script src="app.js"></script>
  </body>
</html>`

const r = [
  {
    name: 'Ben',
    branchName: 'ben',
    tests: [
      { file: 'boucles/ex01', status: true },
      { file: 'boucles/ex02', status: false },
      { file: 'boucles/ex02', status: true }
    ]
  },
  {
    name: 'Joe',
    branchName: 'joe',
    tests: [
      { file: 'boucles/ex01', status: false },
      { file: 'boucles/ex02', status: false },
      { file: 'boucles/ex02', status: true }
    ]
  },
]

const formatResults = r => getHtml(getResultsTable(r))
// console.log(formatResults(r))

module.exports = formatResults
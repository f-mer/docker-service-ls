var tape = require('tape')
var ls = require('./')

// requires docker running in swarm mode

tape('works', function (t) {
  ls(function (err, services) {
    t.notOk(err, 'no err')
    t.ok(Array.isArray(services), 'returns a list')
    t.end()
  })
})

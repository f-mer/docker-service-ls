var docker = require('docker-remote-api')

module.exports = ls

function ls (opts, cb) {
  if (typeof opts === 'function') return ls(null, opts)
  if (!opts) opts = {}

  var request = docker(opts.host, {version: 'v1.31'})

  function format (s) {
    return {
      id: s.ID,
      version: s.Version,
      createdAt: s.CreatedAt,
      updatedAt: s.UpdatedAt,
      spec: s.Spec,
      endpoint: s.Endpoint
    }
  }

  request.get('/services', {json: true}, function (err, services) {
    if (err) return cb(err)
    cb(null, services.map(format))
  })
}

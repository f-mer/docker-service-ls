# docker-service-ls
Lists services running inside a docker swarm using the [docker api](https://docs.docker.com/engine/api/v1.31/#operation/ServiceList).

## Usage
```js
var ls = require('docker-service-ls')

ls(function (err, services) {
  console.log(services)
})
```

## API
### ls([opts], callback(err, services))
Fetches services running inside a docker swarm.
`opts` can contain the following filter values:

- **opts.id**: Service ID
- **opts.label**: Service Label
- **opts.mode**: Service Mode ([replicated|global])
- **opts.name**: Service Name

[api docs](https://docs.docker.com/engine/api/v1.31/#operation/ServiceList)

## Installation
```
npm i docker-service-ls
```

## License
[MIT](https://tldrlegal.com/license/mit-license)

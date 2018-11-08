const routes = require('next-routes')

module.exports = routes()
    .add('/', 'index')
    .add('/especialidades', 'especialidades')
    .add('/especialidades/:id', 'especialidade')
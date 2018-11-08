const routes = require('next-routes')

module.exports = routes()
    .add('/', 'home')
    .add('/especialidades', 'especialidades')
    .add('/especialidades/:id', 'especialidade')
const routes = require('next-routes')

module.exports = routes()
    .add('/', 'index')
    .add('/especialidades', 'especialidades')
    .add('/especialidades/:id', 'especialidade')
    .add('/cursos_e_materiais', 'cursosemateriais')
    .add('/painel', 'painel')
    .add('/experiencias', 'experiencias')
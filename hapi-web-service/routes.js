const routes = [
    {
        method: 'GET',
        path: '/',
        handler: (request, h) => {
            return 'Home page!'
        }
    },
    {
        method: '*',
        path: '/',
        handler: (request, h) => {
            return 'Halaman tidak dapat diakses dengan method tersebut'
        }
    },
    {
        method: 'GET',
        path: '/about',
        handler: (request, h) => {
            return 'About page!'
        }
    },
    {
        method: '*',
        path: '/about',
        handler: (request, h) => {
            return 'Halaman tidak dapat diakses dengan method tersebut'
        }
    },
    {
        method: '*',
        path: '/{any*}',
        handler: (request, h) => {
            return 'Halaman tidak dapat diakses dengan method tersebut'
        }
    }
]

module.exports = routes
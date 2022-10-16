'use strict';

(function () {
    function init() {
        var router = new Router([
            new Route('home', 'inicio.html', true),

            new Route('addclient', 'clienteagregar.html'),
            new Route('listclient', 'clientelistar.html'),
            new Route('searchclient', 'clientebuscar.html'),

            new Route('addcatego', 'catecrear.html'),
            new Route('catelist', 'catelistar.html'),
            new Route('cateadmin', 'cateadmin.html'),
            new Route('catedelete', 'cateborrar.html'),
            new Route('cateactual', 'cateactualizar.html'),

            new Route('prodlist', 'productolistar.html'),
            new Route('prodadd', 'produccrear.html'),
            new Route('prodadmin', 'producadmin.html'),
            new Route('prodDelete', 'producborrar.html'),

            new Route('listprovee', 'proveedorlistar.html'),
            
            new Route('proadmin', 'admin.html'),
            new Route('login', 'acceso.html')
        ]);
    }
    init();
}());

package org.mintic.back03.controladores;

import java.util.List;
import org.mintic.back03.entidades.Categoria;
import org.mintic.back03.servicios.CategoriaServicio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/categorias")
@CrossOrigin(origins = "*")
public class CategoriaControlador {

    @Autowired
    private CategoriaServicio cateServi;

    @ResponseStatus(HttpStatus.OK)
    @RequestMapping(value = "/todas", method = RequestMethod.GET)
    public List<Categoria> obtenerTodasCategorias() {
        return cateServi.consultar();
    }
}

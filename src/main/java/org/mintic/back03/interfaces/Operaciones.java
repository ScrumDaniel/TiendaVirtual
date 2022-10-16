package org.mintic.back03.interfaces;

import java.util.List;

public interface Operaciones<T> {

    public List<T> consultar();

    public Boolean agregar(T miObjeto);

    public Integer cantidadRegistros();

    public Boolean eliminar(Integer llavePrimaria);

    public Boolean actualizar(T miObjeto);

    public T buscar(Integer llavePrimaria);

}

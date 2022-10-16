package org.mintic.back03.repositorios;

import java.util.List;
import org.mintic.back03.entidades.Categoria;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface CategoriaRepositorio extends JpaRepository<Categoria, Integer> {

    @Query("SELECT cat FROM Categoria cat")
    public List<Categoria> obtenerTodas();

}

package org.mintic.back03.entidades;

import java.io.Serializable;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name = "inventarios")
public class Inventario implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @Column(name = "cod_producto")
    private Integer codProducto;

    @Column(name = "cantidad_producto")
    private int cantidadProducto;

    @Column(name = "minimo_producto")
    private int minimoProducto;

    @Column(name = "maximo_producto")
    private int maximoProducto;

    @JoinColumn(name = "cod_producto", referencedColumnName = "cod_producto", insertable = false, updatable = false)
    @OneToOne(optional = false)
    private Producto productos;

    public Inventario() {
    }

    public Inventario(Integer codProducto) {
        this.codProducto = codProducto;
    }

    public Inventario(Integer codProducto, int cantidadProducto, int minimoProducto, int maximoProducto) {
        this.codProducto = codProducto;
        this.cantidadProducto = cantidadProducto;
        this.minimoProducto = minimoProducto;
        this.maximoProducto = maximoProducto;
    }

    public Integer getCodProducto() {
        return codProducto;
    }

    public void setCodProducto(Integer codProducto) {
        this.codProducto = codProducto;
    }

    public int getCantidadProducto() {
        return cantidadProducto;
    }

    public void setCantidadProducto(int cantidadProducto) {
        this.cantidadProducto = cantidadProducto;
    }

    public int getMinimoProducto() {
        return minimoProducto;
    }

    public void setMinimoProducto(int minimoProducto) {
        this.minimoProducto = minimoProducto;
    }

    public int getMaximoProducto() {
        return maximoProducto;
    }

    public void setMaximoProducto(int maximoProducto) {
        this.maximoProducto = maximoProducto;
    }

    public Producto getProductos() {
        return productos;
    }

    public void setProductos(Producto productos) {
        this.productos = productos;
    }

    @Override
    public int hashCode() {
        int hash = 0;
        hash += (codProducto != null ? codProducto.hashCode() : 0);
        return hash;
    }

    @Override
    public boolean equals(Object object) {
        if (!(object instanceof Inventario)) {
            return false;
        }
        Inventario other = (Inventario) object;
        if ((this.codProducto == null && other.codProducto != null) || (this.codProducto != null && !this.codProducto.equals(other.codProducto))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "org.mintic.back03.entidades.Inventarios[ codProducto=" + codProducto + " ]";
    }

}

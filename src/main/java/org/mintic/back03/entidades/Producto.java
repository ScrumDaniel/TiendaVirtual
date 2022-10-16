package org.mintic.back03.entidades;

import java.io.Serializable;
import java.math.BigDecimal;
import java.util.List;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name = "productos")
public class Producto implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "cod_producto")
    private Integer codProducto;

    @Column(name = "nombre_producto")
    private String nombreProducto;

    @Column(name = "precio_producto")
    private BigDecimal precioProducto;

    @Column(name = "iva_producto")
    private int ivaProducto;

    @OneToMany(cascade = CascadeType.ALL, mappedBy = "codProducto")
    private List<Detallefactura> detallefacturasList;

    @OneToOne(cascade = CascadeType.ALL, mappedBy = "productos")
    private Inventario inventarios;

    @JoinColumn(name = "cod_categoria", referencedColumnName = "cod_categoria")
    @ManyToOne
    private Categoria codCategoria;

    @JoinColumn(name = "cod_proveedor", referencedColumnName = "cod_proveedor")
    @ManyToOne
    private Proveedor codProveedor;

    public Producto() {
    }

    public Producto(Integer codProducto) {
        this.codProducto = codProducto;
    }

    public Producto(Integer codProducto, String nombreProducto, BigDecimal precioProducto, int ivaProducto) {
        this.codProducto = codProducto;
        this.nombreProducto = nombreProducto;
        this.precioProducto = precioProducto;
        this.ivaProducto = ivaProducto;
    }

    public Integer getCodProducto() {
        return codProducto;
    }

    public void setCodProducto(Integer codProducto) {
        this.codProducto = codProducto;
    }

    public String getNombreProducto() {
        return nombreProducto;
    }

    public void setNombreProducto(String nombreProducto) {
        this.nombreProducto = nombreProducto;
    }

    public BigDecimal getPrecioProducto() {
        return precioProducto;
    }

    public void setPrecioProducto(BigDecimal precioProducto) {
        this.precioProducto = precioProducto;
    }

    public int getIvaProducto() {
        return ivaProducto;
    }

    public void setIvaProducto(int ivaProducto) {
        this.ivaProducto = ivaProducto;
    }

    public List<Detallefactura> getDetallefacturasList() {
        return detallefacturasList;
    }

    public void setDetallefacturasList(List<Detallefactura> detallefacturasList) {
        this.detallefacturasList = detallefacturasList;
    }

    public Inventario getInventarios() {
        return inventarios;
    }

    public void setInventarios(Inventario inventarios) {
        this.inventarios = inventarios;
    }

    public Categoria getCodCategoria() {
        return codCategoria;
    }

    public void setCodCategoria(Categoria codCategoria) {
        this.codCategoria = codCategoria;
    }

    public Proveedor getCodProveedor() {
        return codProveedor;
    }

    public void setCodProveedor(Proveedor codProveedor) {
        this.codProveedor = codProveedor;
    }

    @Override
    public int hashCode() {
        int hash = 0;
        hash += (codProducto != null ? codProducto.hashCode() : 0);
        return hash;
    }

    @Override
    public boolean equals(Object object) {
        if (!(object instanceof Producto)) {
            return false;
        }
        Producto other = (Producto) object;
        if ((this.codProducto == null && other.codProducto != null) || (this.codProducto != null && !this.codProducto.equals(other.codProducto))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "org.mintic.back03.entidades.Productos[ codProducto=" + codProducto + " ]";
    }

}

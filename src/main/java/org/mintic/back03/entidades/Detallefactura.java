package org.mintic.back03.entidades;

import java.io.Serializable;
import java.math.BigDecimal;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "detallefacturas")
public class Detallefactura implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "cod_detalle")
    private Integer codDetalle;

    @Column(name = "cantidad")
    private int cantidad;

    @Column(name = "subotal")
    private BigDecimal subotal;

    @Column(name = "subtotaliva")
    private BigDecimal subtotaliva;

    @JoinColumn(name = "cod_facturas", referencedColumnName = "cod_facturas")
    @ManyToOne(optional = false)
    private Factura codFacturas;

    @JoinColumn(name = "cod_producto", referencedColumnName = "cod_producto")
    @ManyToOne(optional = false)
    private Producto codProducto;

    public Detallefactura() {
    }

    public Detallefactura(Integer codDetalle) {
        this.codDetalle = codDetalle;
    }

    public Detallefactura(Integer codDetalle, int cantidad, BigDecimal subotal, BigDecimal subtotaliva) {
        this.codDetalle = codDetalle;
        this.cantidad = cantidad;
        this.subotal = subotal;
        this.subtotaliva = subtotaliva;
    }

    public Integer getCodDetalle() {
        return codDetalle;
    }

    public void setCodDetalle(Integer codDetalle) {
        this.codDetalle = codDetalle;
    }

    public int getCantidad() {
        return cantidad;
    }

    public void setCantidad(int cantidad) {
        this.cantidad = cantidad;
    }

    public BigDecimal getSubotal() {
        return subotal;
    }

    public void setSubotal(BigDecimal subotal) {
        this.subotal = subotal;
    }

    public BigDecimal getSubtotaliva() {
        return subtotaliva;
    }

    public void setSubtotaliva(BigDecimal subtotaliva) {
        this.subtotaliva = subtotaliva;
    }

    public Factura getCodFacturas() {
        return codFacturas;
    }

    public void setCodFacturas(Factura codFacturas) {
        this.codFacturas = codFacturas;
    }

    public Producto getCodProducto() {
        return codProducto;
    }

    public void setCodProducto(Producto codProducto) {
        this.codProducto = codProducto;
    }

    @Override
    public int hashCode() {
        int hash = 0;
        hash += (codDetalle != null ? codDetalle.hashCode() : 0);
        return hash;
    }

    @Override
    public boolean equals(Object object) {
        if (!(object instanceof Detallefactura)) {
            return false;
        }
        Detallefactura other = (Detallefactura) object;
        if ((this.codDetalle == null && other.codDetalle != null) || (this.codDetalle != null && !this.codDetalle.equals(other.codDetalle))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "org.mintic.back03.entidades.Detallefacturas[ codDetalle=" + codDetalle + " ]";
    }

}

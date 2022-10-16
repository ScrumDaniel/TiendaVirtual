package org.mintic.back03.entidades;

import java.io.Serializable;
import java.math.BigDecimal;
import java.util.Date;
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
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

@Entity
@Table(name = "facturas")
public class Factura implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "cod_facturas")
    private Integer codFacturas;

    @Column(name = "fecha_factura")
    @Temporal(TemporalType.DATE)
    private Date fechaFactura;

    @Column(name = "valor_factura")
    private BigDecimal valorFactura;

    @JoinColumn(name = "cod_cliente", referencedColumnName = "cod_cliente")
    @ManyToOne(optional = false)
    private Cliente codCliente;

    @OneToMany(cascade = CascadeType.ALL, mappedBy = "codFacturas")
    private List<Detallefactura> detallefacturasList;

    public Factura() {
    }

    public Factura(Integer codFacturas) {
        this.codFacturas = codFacturas;
    }

    public Factura(Integer codFacturas, Date fechaFactura, BigDecimal valorFactura) {
        this.codFacturas = codFacturas;
        this.fechaFactura = fechaFactura;
        this.valorFactura = valorFactura;
    }

    public Integer getCodFacturas() {
        return codFacturas;
    }

    public void setCodFacturas(Integer codFacturas) {
        this.codFacturas = codFacturas;
    }

    public Date getFechaFactura() {
        return fechaFactura;
    }

    public void setFechaFactura(Date fechaFactura) {
        this.fechaFactura = fechaFactura;
    }

    public BigDecimal getValorFactura() {
        return valorFactura;
    }

    public void setValorFactura(BigDecimal valorFactura) {
        this.valorFactura = valorFactura;
    }

    public Cliente getCodCliente() {
        return codCliente;
    }

    public void setCodCliente(Cliente codCliente) {
        this.codCliente = codCliente;
    }

    public List<Detallefactura> getDetallefacturasList() {
        return detallefacturasList;
    }

    public void setDetallefacturasList(List<Detallefactura> detallefacturasList) {
        this.detallefacturasList = detallefacturasList;
    }

    @Override
    public int hashCode() {
        int hash = 0;
        hash += (codFacturas != null ? codFacturas.hashCode() : 0);
        return hash;
    }

    @Override
    public boolean equals(Object object) {
        if (!(object instanceof Factura)) {
            return false;
        }
        Factura other = (Factura) object;
        if ((this.codFacturas == null && other.codFacturas != null) || (this.codFacturas != null && !this.codFacturas.equals(other.codFacturas))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "org.mintic.back03.entidades.Facturas[ codFacturas=" + codFacturas + " ]";
    }

}

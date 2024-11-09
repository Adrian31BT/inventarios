package com.krakedev.inventarios.bdd;

import java.math.BigDecimal;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

import com.krakedev.inventarios.entidades.Categorias;
import com.krakedev.inventarios.entidades.Producto;
import com.krakedev.inventarios.entidades.UnidadesMedida;
import com.krakedev.inventarios.excepciones.KrakeDevException;
import com.krakedev.inventarios.utils.ConexionBDD;

public class ProductosBDD {
	public ArrayList<Producto> buscar(String subcadena) throws KrakeDevException {
		ArrayList<Producto> productos = new ArrayList<Producto>();
		Connection con = null;
		PreparedStatement ps = null;
		ResultSet rs = null;
		Producto producto = null;
		try {
			con = ConexionBDD.obtenerConexion();
			ps = con.prepareStatement("select prod.codigo_pro, prod.nombre as nombre_producto,\r\n"
					+ "udm.codigo_udm as nombre_udm, udm.descripcion as descripcion_udm,\r\n"
					+ "cast(prod.precio_venta as decimal(6,2)), prod.tiene_iva, cast(prod.coste as decimal(6,2)),\r\n"
					+ "prod.categoria, cat.nombre as nombre_categoria, prod.stock\r\n"
					+ "from productos prod, unidades_medida udm, categorias cat\r\n"
					+ "where prod.udm = udm.codigo_udm\r\n"
					+ "and prod.categoria = cat.codigo_cat\r\n"
					+ "and upper(prod.nombre) like ?");
			ps.setString(1, "%" + subcadena.toUpperCase() + "%");
			rs = ps.executeQuery();

			while (rs.next()) {
				
				int codigo_pro = rs.getInt("codigo_pro");
				String nombre_producto = rs.getString("nombre_producto");
				String nombre_udm = rs.getString("nombre_udm");
				String descripcion_udm = rs.getString("descripcion_udm");
				BigDecimal precio_venta = rs.getBigDecimal("precio_venta");
				boolean tiene_iva = rs.getBoolean("tiene_iva");
				BigDecimal coste = rs.getBigDecimal("coste");
				int codigoCategoria = rs.getInt("categoria");
				String nombre_categoria = rs.getString("nombre_categoria");
				int stock = rs.getInt("stock");
				
				UnidadesMedida udm = new UnidadesMedida();
				udm.setCodigo_udm(nombre_udm);
				udm.setDescripcion(descripcion_udm);
				
				Categorias categoria = new Categorias();
				categoria.setCodigo_cat(codigoCategoria);
				categoria.setNombre(nombre_categoria);

				producto = new Producto();
				producto.setCodigo_pro(codigo_pro);
				producto.setNombre(nombre_producto);
				producto.setUdm(udm);
				producto.setPrecio_venta(precio_venta);
				producto.setTiene_iva(tiene_iva);
				producto.setCoste(coste);
				producto.setCategoria(categoria);
				producto.setStock(stock);
				
				productos.add(producto);
			}

		} catch (KrakeDevException e) {
			e.printStackTrace();
			throw e;
		} catch (SQLException e) {
			e.printStackTrace();
			throw new KrakeDevException("Error al consultar productos, detalle: " + e.getMessage());
		}
		return productos;
	}
}
import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, Text, View, TextInput, Button, Alert, ScrollView } from 'react-native';
import { useState } from 'react';

let productos = [
  { nombre: "Doritos", categoria: "Snacks", precioCompra: "0.40", precioVenta: "0.45", id: "100" },
  { nombre: "Manicho", categoria: "Golocinas", precioCompra: "0.20", precioVenta: "0.25", id: "101" },
  { nombre: "Coca Cola", categoria: "Bebida", precioCompra: "0.60", precioVenta: "0.75", id: "102" },
  { nombre: "Corona", categoria: "Bebida con alcohol", precioCompra: "0.80", precioVenta: "1.00", id: "103" },
  { nombre: "Yogurt", categoria: "Bebida", precioCompra: "0.55", precioVenta: "0.75", id: "104" }
];

let esNuevo = true;
let indiceSeleccionado = -1;

export default function App() {

  const [txtId, setTxtId] = useState();
  const [txtNombre, setTxtNombre] = useState();
  const [txtCategoria, setTxtCategoria] = useState();
  const [txtPrecioCompra, setTxtPrecioCompra] = useState();
  const [txtPrecioVenta, setTxtPrecioVenta] = useState();
  const [numElementos, setNumElementos ] = useState(productos.length);

  let existeProducto = () =>{
    for(let i = 0; i < productos.length; i++){
      if(productos[i].id == txtId){
        return true;
      }
    }
    return false;
  }

  let camposVacios = () =>{
    if(txtId==null || txtNombre==null || txtCategoria==null || txtPrecioCompra==null ||txtId=="" || txtNombre=="" || txtCategoria=="" || txtPrecioCompra==""){
      return true;
    }else{
      return false;
    }
  }

  let guardarProducto = () => {
    if(camposVacios()){
      Alert.alert("INFO", "Ingrese todos los campos obligatorios");
    }else{
      if(esNuevo){
        if(existeProducto()){
          Alert.alert("INFO", "Ya existe un producto con el id");
        }else{
          let floatPrecioCompra = parseFloat(txtPrecioCompra);
          let precioVentaCalculado = floatPrecioCompra + (floatPrecioCompra * 0.20);
          precioVentaCalculado = precioVentaCalculado.toFixed(2);
          let producto = {
            id: txtId,
            nombre: txtNombre,
            categoria: txtCategoria,
            precioCompra: txtPrecioCompra,
            precioVenta: precioVentaCalculado
          };
          productos.push(producto);
        }
      }else{
        productos[indiceSeleccionado].nombre = txtNombre;
        productos[indiceSeleccionado].categoria = txtCategoria;
        productos[indiceSeleccionado].precioCompra = txtPrecioCompra;
        let floatPrecioCompra = parseFloat(productos[indiceSeleccionado].precioCompra);
        let precioVentaCalculado = floatPrecioCompra + (floatPrecioCompra * 0.20);
        productos[indiceSeleccionado].precioVenta = precioVentaCalculado.toFixed(2); 
      }
      limpiar();
      setNumElementos(productos.length);
    }
  }

  let ItemProducto = (props) => {
    return (
      <View style={styles.producto}>
        <View style={styles.itemIndice}>
          <Text style={styles.texto1}>
            {props.producto.id}
          </Text>
        </View>
        <View style={styles.itemContenido}>
          <Text style={styles.texto1}>
            {props.producto.nombre} ({props.producto.categoria})
          </Text>
          <Text style={styles.texto2}>
            USD {props.producto.precioVenta}
          </Text>
        </View>
        <View style={styles.itemBotones}>
          <Button
            title=" E "
            color="green"
            onPress={() => {
              setTxtId(props.producto.id);
              setTxtNombre(props.producto.nombre);
              setTxtCategoria(props.producto.categoria);
              setTxtPrecioCompra(props.producto.precioCompra);
              setTxtPrecioVenta(props.producto.precioVenta); 
              esNuevo = false;
              indiceSeleccionado = props.indice;
            }}
          />
          <Button
            title=" X "
            color="red"
            onPress={() => {
              indiceSeleccionado = props.indice;
              productos.splice(indiceSeleccionado, 1);
              setNumElementos(productos.length);
            }}
          />
        </View>
      </View>
    )
  }

  let limpiar = () => {
    setTxtId(null);
    setTxtNombre(null);
    setTxtCategoria(null);
    setTxtPrecioCompra(null);
    setTxtPrecioVenta(null);
    esNuevo = true;
  }

  return (
    <View style={styles.container}>
      <ScrollView> 
      <View style={styles.areaCabecera}>
        <Text style={styles.titulo}>PRODUCTOS</Text>
        <TextInput style={styles.txt}
          value={txtId}
          placeholder='Ingrese id'
          onChangeText={setTxtId}
          keyboardType='numeric'
          editable={esNuevo}
        />
        <TextInput style={styles.txt}
          value={txtNombre}
          placeholder='Ingrese nombre'
          onChangeText={setTxtNombre}
        />
        <TextInput style={styles.txt}
          value={txtCategoria}
          placeholder='Ingrese categoría'
          onChangeText={setTxtCategoria}
        />
        <TextInput style={styles.txt}
          value={txtPrecioCompra}
          placeholder='Ingrese precio de compra'
          onChangeText={setTxtPrecioCompra}
          keyboardType='numeric'
        />
        <TextInput style={styles.txt}
          value={txtPrecioVenta}
          placeholder='Precio de venta'
          onChangeText={setTxtPrecioVenta}
          keyboardType='numeric'
          editable={false}
        />
        <View style={styles.areaBotones}>
          <Button
            title="Guardar"
            onPress={() => {
              guardarProducto();
            }}
          />
          <Button
            title="Nuevo"
            onPress={() => {
              limpiar();
            }}
          />
          <Text>Elementos: {numElementos}</Text>
        </View>
        
      </View>
      </ScrollView> 
      <View style={styles.areaContenido}>
        <FlatList
          data={productos}
          renderItem={(elemento) => {
            return <ItemProducto indice={elemento.index} producto={elemento.item} />
          }}
          keyExtractor={(item) => {
            return item.id
          }}
        />
      </View>
      <View style={styles.areaPie}>
        <Text>Autor: Adrian Bacilio</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: "column",
    paddingTop: 60
  },
  titulo: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 18,
  },
  producto: {
    backgroundColor: "#d6ecf0",
    marginBottom: 10,
    marginHorizontal: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderWidth: 2,
    borderColor: '#3cb4ca',
    borderRadius: 10,
    flexDirection: "row"
  },
  texto1: {
    fontSize: 16,
  },
  texto2: {
    fontSize: 14,
    fontWeight: "bold"
  },
  areaCabecera: {
    flex: 4,
    /* backgroundColor: "chartreuse", */
    paddingHorizontal: 10
  },
  areaContenido: {
    flex: 6,
    /* backgroundColor: "coral" */
  },
  areaPie: {
    flex: 1,
    /* backgroundColor: "cornflowerblue", */
    justifyContent: "center",
    alignItems: 'flex-end',
    paddingHorizontal: 10
  },
  itemIndice: {
    flex: 1,
    /*     backgroundColor: "darkgray", */
    justifyContent: "center",
    alignItems: "center"
  },
  itemContenido: {
    paddingLeft: 5,
    /*     backgroundColor: "darkorange", */
    flex: 6
  },
  itemBotones: {
    flexDirection: "row",
    flex: 2,
    alignItems: "center",
    justifyContent: "space-between"
  },
  txt: {
    borderWidth: 1,
    borderColor: "gray",
    paddingVertical: 3,
    paddingHorizontal: 5,
    marginBottom: 5
  },
  areaBotones: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 5
  }
});

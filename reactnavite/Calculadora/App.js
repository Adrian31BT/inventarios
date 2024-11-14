import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { useState } from 'react'

export default function App() {

  const [valor1, setValor1] = useState(0);
  const [valor2, setValor2] = useState(0);
  const [resultado, setResultado] = useState(0);

  return (
    <View style={styles.container}>
      <Text>Calculadora</Text>
      <Text></Text>
      <TextInput 
        style = {styles.cajaTexto}
        placeholder='Ingresar valor 1'
        value={valor1}
        onChangeText={(txt)=>{
          setValor1(txt);
        }}
      />
      <Text></Text>
      <TextInput 
        style = {styles.cajaTexto}
        placeholder='Ingresar valor 2'
        value={valor2}
        onChangeText={(txt)=>{
          setValor2(txt);
        }}
      />
      <Text></Text>
      <Text>Resultado: {resultado}</Text>
      <Text></Text>
      <Button
        title="Sumar"
        onPress={()=>{
          let resultado = parseInt(valor1)+parseInt(valor2);
          setResultado(resultado);
        }}
      />
      <Button
        title="retar"
        onPress={()=>{
          let resultado = parseInt(valor1)-parseInt(valor2);
          setResultado(resultado);
        }}
      />
      <Button
        title="Multiplicar"
        onPress={()=>{
          let resultado = parseInt(valor1)*parseInt(valor2);
          setResultado(resultado);
        }}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cajaTexto: {
    borderColor: "black",
    borderWidth: 1,
    paddingTop: 5,
    paddingHorizontal: 10,
  }
});

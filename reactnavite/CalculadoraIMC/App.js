import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button} from 'react-native';
import { useState } from 'react';

export default function App() {

  const [estatura, setEstatura] = useState(0);
  const [peso, setPeso] = useState(0);
  const [resultado, setResultado] = useState(0);
  const [resultadoTexto, setResultadoTexto] = useState("");

  return (
    <View style={styles.container}>
      <View style={styles.contenedor1}>
        <Text style={styles.titulo}>Caluladora IMC</Text>
      </View>
      <View style={styles.contenedor2}>
        <View style={styles.contenedor4}>
          <Text style={styles.etiquetas}>Estatura: </Text>
          <TextInput 
            style = {styles.cajaTexto}
            placeholder='En centimetro'
            value={estatura}
            onChangeText={(valor)=>{
              setEstatura(valor);
            }}
          />
        </View>
        <View style={styles.contenedor5}>
          <Text style={styles.etiquetas}>Peso: </Text>
          <TextInput 
            style = {styles.cajaTexto}
            placeholder='En kilogramos'
            value={peso}
            onChangeText={(valor)=>{
              setPeso(valor);
            }}
          />
        </View>
      </View>
      <View style={styles.contenedor3}>
        <Text style={styles.etiquetas}>Resultado IMC: {resultado}</Text>
        <Text style={styles.etiquetas}>{resultadoTexto}</Text>
        <Button
          title="Calcular"
          onPress={()=>{
           let imc = 0;
           let pesoF = parseFloat(peso);
           let estaturaF = parseFloat(estatura);
           let estaturaMetro = estaturaF / 100;
           imc = pesoF / (estaturaMetro * estaturaMetro);
           imc = imc.toFixed(2);
           setResultado(imc);
            if(imc < 18.5){
              setResultadoTexto("Su peso es inferior al normal");
            }else if(imc >= 18.5 && imc < 25.0){
              setResultadoTexto("Su peso es normal");
            }else if(imc >= 25.0 && imc < 30.0){
              setResultadoTexto("Su peso es superior normal");
            }else{
              setResultadoTexto("Tiene obesidad");
            }

          }}
        />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  contenedor1: {
    flex: 4,
    justifyContent: 'flex-end',
  },
  contenedor2: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  contenedor3: {
    flex: 4,
    justifyContent: 'flex-start',
  },
  contenedor4: {
    flex: 1,
    justifyContent: 'center',
  },
  contenedor5: {
    flex: 1,
    justifyContent: 'center',
  },
  titulo: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10
  },
  etiquetas: {
    fontSize: 14,
    fontWeight: "bold",
    paddingHorizontal: 10,
    marginBottom: 1
  },
  cajaTexto: {
    borderColor: "grey",
    borderWidth: 1,
    paddingTop: 5,
    paddingHorizontal: 10,
    marginHorizontal: 10,
    marginBottom: 10
  }
});

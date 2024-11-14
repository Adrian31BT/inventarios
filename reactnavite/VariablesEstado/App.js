import { StatusBar } from 'expo-status-bar';
import { Alert, Button, StyleSheet, Text, View } from 'react-native';
import { useState } from 'react'

export default function App() {
  const [contadorEstado, setContadorEstado] = useState(0);
  const [contadorVidas, setcontadorVidas] = useState(5);

  const incrementar = () =>{
    setContadorEstado(contadorEstado + 1);
  }

  const decrementar = () =>{
    setContadorEstado(contadorEstado - 1);
  }

  /* Reto 21 */
  const perderVida = () =>{
    if(contadorVidas>0){
      setcontadorVidas(contadorVidas - 1);
    }else{
      mostrarAlerta();
    }
  }

  const premiarVida = () =>{
    setcontadorVidas(contadorVidas + 1);
  }

  const mostrarAlerta = () =>{
    Alert.alert("ADVERTENCIA","GAME OVER");
  }

  return (
    <View style={styles.container}>
      <Text>Variables de Estado</Text>
      <Text>Contador estado: {contadorEstado}</Text>
      <Button 
        title='Incrementar'
        onPress={incrementar}
      />
      <Button 
        title='Decrementar'
        onPress={decrementar}
      />
      <Text>Vida: </Text>
      <Text>Contador estado: {contadorVidas}</Text>
      <Button 
        title='Premiar'
        onPress={premiarVida}
      />
      <Button 
        title='Perder vida'
        onPress={perderVida}
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
});

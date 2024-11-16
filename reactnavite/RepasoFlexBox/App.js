import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Button, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.contenedor1}>
        <Button title='X'/>
        <Button title='Y'/>
        <Button title='Z'/>
      </View>
        <View style={styles.contenedor2}>
          <View style={styles.contenedor4}>
            <View style={styles.contenedor6}>
              <Button title='Boton1'/>
              <Button title='Boton2'/>
            </View>
            <View style={styles.contenedor7}>
              <Button title='Operacion1'/>
              <Button title='Operacion2'/>
              <Button title='Operacion3'/>
            </View>
          </View>
          <View style={styles.contenedor5}>
            <Button title='A1'/>
            <Button title='A2'/>
          </View>
        </View>
      <View style={styles.contenedor3}>
        <Button title='BotonFinal'/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d8d8d8',
    flexDirection: 'column'
  },
  contenedor1: {
    flex: 1,
    backgroundColor: '#45edd3',
    flexDirection: 'row',
    justifyContent: "flex-end",
    alignItems: "center"
  },
  contenedor2: {
    flex: 6,
    backgroundColor: '#59e12f',
    flexDirection: 'column'
  },
  contenedor3: {
    flex: 1,
    backgroundColor: '#f07b23',
    flexDirection: 'column',
    justifyContent: "center",
    alignItems: "flex-start"
  },
  contenedor4: {
    flex: 4,
    backgroundColor: '#b939d9',
    flexDirection: 'row'
  },
  contenedor5: {
    flex: 1,
    backgroundColor: '#3979d9',
    flexDirection: 'row',
    justifyContent: "center",
    alignItems: "flex-end"
  },
  contenedor6: {
    flex: 1,
    backgroundColor: '#f7ed32',
    flexDirection: 'column',
    justifyContent: "space-around",
    alignItems: "stretch"
  },
  contenedor7: {
    flex: 1,
    backgroundColor: '#ffffff',
    flexDirection: 'column',
    justifyContent: "center",
    alignItems: "flex-start"
  }
});

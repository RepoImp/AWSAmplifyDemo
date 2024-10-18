import {StyleSheet,View} from 'react-native';
import React from 'react';
import Stacknavigation from './src/navigation/Stacknavigation';

function App() {

  return (
    <View style={styles.container}>
      <Stacknavigation />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;

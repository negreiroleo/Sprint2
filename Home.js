import React from 'react';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';

const Home = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <View style={styles.container}>
        <Text style={styles.title}>
          Bem-vindo à Página Inicial!
        </Text>
        <View style={styles.tilesContainer}>
          <View style={styles.row}>
            <View style={[styles.tile, { backgroundColor: 'red' }]} />
            <View style={[styles.tile, { backgroundColor: 'blue' }]} />
          </View>
          <View style={styles.row}>
            <View style={[styles.tile, { backgroundColor: 'green' }]} />
            <View style={[styles.tile, { backgroundColor: 'yellow' }]} />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 50,
  },
  tilesContainer: {
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  tile: {
    width: 100,
    height: 100,
    borderRadius: 8,
    margin: 10,
  },
});

export default Home;

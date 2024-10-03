import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import {Button, View, Text, Image, FlatList, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


//Home screen
function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home Screen</Text>
      <Button
        title="GET STARTED"
        onPress={() => navigation.navigate('Tasks')}
      />
    </View>
  );
}

function Tasks({ navigation }) {
  
    <View>
      <Button
        title="Chat"
        color='red'
        onPress={() => navigation.navigate('Home')}
      />

    </View>
    

    
  

  
}

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Tasks" component={Tasks} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    marginVertical: 16,
  },
});

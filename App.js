import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, View, Text, Image, TextInput, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Home screen
function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image source={require('./assets/BigLogo.png')} style={styles.notepad} />
      <Text style={styles.title}>MANAGE YOUR TASK</Text>
      <View style={styles.inputContainer}>
        {/* <Icon name="envelope" size={20} color="grey" style={styles.icon} /> */}
        <TextInput 
          style={styles.input} 
          placeholder="Enter your name"
        />
      </View>
      <Button
        title="GET STARTED"
        onPress={() => navigation.navigate('Tasks')}
        color="#007AFF" // Màu xanh cho nút
      />
    </View>
  );
}

function Tasks({ navigation }) {
  return (
    <View>
      <Button
        title="Chat"
        color='red'
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
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
    // backgroundColor: '#ADD8E6', // Màu nền xanh nhạt
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    marginVertical: 16,
    color: '#0000FF', // Màu chữ xanh
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 5,
    width: '80%',
    paddingHorizontal: 10,
    marginVertical: 12,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: 40,
  },
  notepad: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
});

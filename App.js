import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button, View, Text, TextInput, StyleSheet,FlatList, icon } from 'react-native';

const Stack = createNativeStackNavigator();

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>MANAGE YOUR TASK</Text>
      <View style={styles.inputContainer}>
        <TextInput 
          style={styles.input} 
          placeholder="Enter your name"
        />
      </View>
      <Button
        title="GET STARTED"
        onPress={() => navigation.navigate('Tasks')}
        color="#007AFF"
      />
    </View>
  );
}

function Tasks({ navigation }) {
  const tasks = [
    { id: '1', text: 'Check email' },
    { id: '2', text: 'Learn JavaScript basics' },
    { id: '3', text: 'Learn HTML Advanced' },
    { id: '4', text: 'Medical App UI' },
    { id: '5', text: 'Learn Java' },
  ];

  const renderItem = ({ item }) => (
    <View style={styles.taskItem}>
      
      <Text style={styles.taskText}>{item.text}</Text>
      
    </View>
  );

  return (
    <View style={styles.tasksContainer}>
      <Text style={styles.greeting}>Hi Twinkle</Text>
      <Text style={styles.subGreeting}>Have a great day ahead</Text>
      <TextInput 
        style={styles.searchBar} 
        placeholder="Search"
      />
      <FlatList
        data={tasks}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        style={styles.taskList}
      />
      <Button
        title="Add Task"
        onPress={() => alert('Add Task')}
        color="#007AFF"
      />
    </View>
  );
}

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
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    marginVertical: 16,
    color: '#0000FF',
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
  input: {
    flex: 1,
    height: 40,
  },
  tasksContainer: {
    flex: 1,
    padding: 20,
  },
  greeting: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  subGreeting: {
    fontSize: 16,
    color: 'grey',
  },
  searchBar: {
    height: 40,
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginVertical: 10,
  },
  taskList: {
    marginTop: 20,
  },
  taskItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
  },
  taskText: {
    flex: 1,
    fontSize: 18,
  },
  icon: {
    marginHorizontal: 10,
  },
});

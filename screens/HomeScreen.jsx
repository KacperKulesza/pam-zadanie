import { StyleSheet, Text, View, Button } from 'react-native';

export default function HomeScreen({ navigation }) {
    return (
      <View style={styles.container}>
        <Text>Welcome to Geometry Dash!</Text>
        <Button
          title="Go to Level List"
          onPress={() => navigation.navigate('Levels')}
        />
      </View>
    );
  }
  
const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#fff',
    }})
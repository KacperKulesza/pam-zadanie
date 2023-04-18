import { StyleSheet, Text, View, Button } from 'react-native';

export default function LevelListScreen({ navigation }) {
    const levels = [
      { name: 'Stereo Madness', difficulty: 'Easy' },
      { name: 'Back on Track', difficulty: 'Easy' },
      { name: 'Polargeist', difficulty: 'Medium' },
      { name: 'Dry Out', difficulty: 'Medium' },
      { name: 'Base After Base', difficulty: 'Hard' },
      { name: 'Cant Let Go', difficulty: 'Hard' },
      { name: 'Jumper', difficulty: 'Insane' },
      { name: 'Time Machine', difficulty: 'Insane' },
    ];
  
    return (
      <View style={styles.container}>
        <Text>Levels:</Text>
        {levels.map((level, index) => (
          <View key={index} style={styles.level}>
            <Text>{level.name}</Text>
            <Text>{level.difficulty}</Text>
          </View>
        ))}
        <Button
          title="Go to Home"
          onPress={() => navigation.navigate('Home')}
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
    },
    level: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '80%',
      marginVertical: 10,
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 10,
      borderWidth: 1,
      borderColor: '#ccc',
    },
  });
import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';
import { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function HomeScreen() {
  const [selectedCommunity, setSelectedCommunity] = useState('');
  const [isButtonPressed, setIsButtonPressed] = useState(false);

  const collegeCommunities = [
    'Braincell Syndicate',
    'GPA Funeral Committee',
    'WiFi Parasite Union',
    'The 2AM Philosophy Club',
    'Canteen Cult',
    'Assignment Avengers',
    'CTRL+C Community',
    'The Last-Bench Lorekeepers',
    'Vibe Attendance Mafia',
    'Procrastination Prophets',
    'Cafeteria Conspiracy',
    'The Untitled Google Docs',
    'Deadline Diplomats',
    'Screenshot Parliament',
    'Mutual Sleep Deprivation Club',
    'Zoom Zombie League',
    'Internal Marks Mafia',
    'Silently Judging Society',
    'The Unofficial Syllabus Readers',
    'The Fridge-Raid Fellowship',
    'Notes Black Market',
    'The "Group Project is Me" Guild',
    'Attendance Alibi Association',
    'Backlog Brotherhood',
    'Brain Buffering Association'
  ];

  useEffect(() => {
    // Select a random community name when component mounts
    const randomIndex = Math.floor(Math.random() * collegeCommunities.length);
    setSelectedCommunity(collegeCommunities[randomIndex]);
  }, []);

  const handleGetStarted = () => {
    console.log('Button pressed, navigating to login...');
    try {
      router.push('/login');
    } catch (error) {
      console.error('Navigation error:', error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      
      <View style={styles.content}>
        <View style={styles.welcomeSection}>
          <Text style={styles.welcomeTitle}>Welcome to .Edu</Text>
          <Text style={styles.welcomeSubtitle}>{selectedCommunity}</Text>
        </View>
        
        <TouchableOpacity 
          style={[
            styles.getStartedButton,
            isButtonPressed && styles.getStartedButtonPressed
          ]} 
          activeOpacity={1}
          onPressIn={() => setIsButtonPressed(true)}
          onPressOut={() => setIsButtonPressed(false)}
          onPress={handleGetStarted}
        >
          {isButtonPressed ? (
            <LinearGradient
              colors={['white', '#f8b55f', 'white']}
              style={styles.gradientBackground}
              start={{ x: 0, y: 0 }}
              end={{ x: 0, y: 1 }}
            >
              <Text style={[styles.buttonText, styles.buttonTextPressed]}>Here we go!</Text>
            </LinearGradient>
          ) : (
            <Text style={styles.buttonText}>Here we go!</Text>
          )}
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    position: 'relative',
  },
  backgroundLogo: {
    position: 'absolute',
    top: '31%',
    left: '82%',
    transform: [{ rotate: '20deg' }],
    opacity: 0.9,
  },
  logoImage: {
    width: 50,
    height: 50,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcomeSection: {
    alignItems: 'center',
    marginBottom: 70,
  },
  welcomeTitle: {
    fontSize: 42,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 5,
    textShadowColor: 'rgba(0, 0, 0, 0.1)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  welcomeSubtitle: {
    fontSize: 15,
    color: '#666',
    textAlign: 'center',
    fontStyle: 'italic',
  },
  getStartedButton: {
    backgroundColor: '#f8b55f',
    paddingHorizontal: 20,
    paddingVertical: 16,
    overflow: 'hidden',
  },
  getStartedButtonPressed: {
    backgroundColor: 'transparent',
  },
  gradientBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: '300',
    textAlign: 'center',
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  buttonTextPressed: {
    color: 'black',
  },
});
import * as ImagePicker from 'expo-image-picker';
import { router } from 'expo-router';
import React, { useState } from 'react';
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function RegisterScreen() {
  const [agree, setAgree] = useState(false);
  const [image, setImage] = useState<ImagePicker.ImagePickerAsset | null>(null);

  const goToLogin = () => {
    router.push('/login');
  };

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: false,
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0]);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent} keyboardShouldPersistTaps="handled">
        <View style={styles.logoContainer}>
          <Image
            source={require('../assets/images/logo.png')}
            style={styles.logo}
            resizeMode="contain"
          />
        </View>
        <TouchableOpacity style={{ position: 'absolute', right: 20, top: 50 }} onPress={goToLogin}>
          <Text style={{ color: 'black', fontSize: 16 }}>Already have a account?
            <Text style={{ color: '#8d4ca4', fontSize: 14, marginLeft: 8 }}> Login</Text>
          </Text>
        </TouchableOpacity>
        <View style={{ marginTop: -10 }} />
        <Text style={styles.sectionTitle}>1. Upload your ID – Card :</Text>
        <View>
          {image ? (
            <Text style={{ marginBottom: 10 }}>{image.fileName || image.uri.split('/').pop()}</Text>
          ) : (
            <TouchableOpacity style={styles.imageButton} onPress={pickImage}>
              <Text style={{ color: '#888' }}>Select an image</Text>
            </TouchableOpacity>
          )}
        </View>
        <TouchableOpacity style={styles.verifyButton}>
          <Text style={{ color: 'white' }}>VERIFY ID</Text>
        </TouchableOpacity>
        <Text style={styles.sectionTitle}>2. Tell us about yourself :</Text>
        <View style={styles.inputRow}>
          <Text style={styles.inputLabel}>My name</Text>
          <TextInput style={styles.input} placeholder="Same as your ID-Card" placeholderTextColor="#888" />
        </View>
        <View style={styles.inputRow}>
          <Text style={styles.inputLabel}>roleNo.</Text>
          <TextInput style={styles.input} placeholder="Role Number" placeholderTextColor="#888" />
        </View>
        <View style={styles.inputRow}>
          <Text style={styles.inputLabel}>CollegeMailId</Text>
          <TextInput style={styles.input} placeholder="MailId" placeholderTextColor="#888" />
        </View>
        <Text style={styles.sectionTitle}>3. Password :</Text>
        <View style={styles.inputRow}>
          <Text style={styles.inputLabel}>My password</Text>
          <TextInput style={styles.input} placeholder="Must be above 8 character" placeholderTextColor="#888" secureTextEntry />
        </View>
        <View style={styles.inputRow}>
          <Text style={styles.inputLabel}>Re–enter</Text>
          <TextInput style={styles.input} placeholder="The same password" placeholderTextColor="#888" secureTextEntry />
        </View>
        <Text style={styles.sectionTitle}>4. Just few more things :</Text>
        <View style={styles.checkboxRow}>
          <TouchableOpacity onPress={() => setAgree(!agree)} style={styles.checkboxBox}>
            {agree && <View style={styles.checkboxTick} />}
          </TouchableOpacity>
          <Text style={styles.checkboxLabel}>Read and agree to <Text style={{ color: '#d16fa6' }}>Terms and Conditions</Text></Text>
        </View>
        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.createButton}>
            <Text style={styles.createButtonText}>Create my account</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.cancelButton} onPress={goToLogin}>
            <Text style={styles.cancelButtonText}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContent: {
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 0,
    flexGrow: 1,
  },
  logoContainer: {
    alignItems: 'flex-start',
    marginBottom: 10,
    padding: 0,
  },
  logo: {
    width: 50,
    height: 50,
    overflow: 'hidden',
    marginTop: 15,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 10,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 18,
    marginBottom: 8,
    color: '#222',
  },
  imageButton: {
    backgroundColor: '#eee',
    alignSelf: 'flex-start',
    paddingHorizontal: 18,
    paddingVertical: 6,
    borderRadius: 3,
    marginBottom: 10,
  },
  verifyButton: {
    backgroundColor: '#8d4ca4',
    alignSelf: 'center',
    paddingHorizontal: 40,
    paddingVertical: 10,
    borderRadius: 2,
    marginBottom: 18,
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  inputLabel: {
    width: 90,
    color: '#444',
    fontSize: 14,
  },
  input: {
    flex: 1,
    backgroundColor: '#eee',
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 2,
    fontSize: 13,
    color: '#222',
  },
  checkboxRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 12,
  },
  checkboxBox: {
    width: 20,
    height: 20,
    borderWidth: 1.5,
    borderColor: '#d16fa6',
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  checkboxTick: {
    width: 12,
    height: 12,
    backgroundColor: '#d16fa6',
    borderRadius: 2,
  },
  checkboxLabel: {
    marginLeft: 8,
    color: '#444',
    fontSize: 14,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 10,
    gap: 10,
  },
  createButton: {
    backgroundColor: '#3d365c',
    alignItems: 'center',
    paddingVertical: 14,
    paddingHorizontal: 28,
    borderRadius: 2,
    marginRight: 10,
  },
  createButtonText: {
    color: 'white',
    fontSize: 16,
  },
  cancelButton: {
    backgroundColor: '#8d4ca4',
    alignItems: 'center',
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderRadius: 2,
  },
  cancelButtonText: {
    color: 'white',
    fontSize: 16,
  },
}); 
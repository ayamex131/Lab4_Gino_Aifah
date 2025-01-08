import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

function Register({ onNavigate }) {
  const handleLogin = () => {
    onNavigate('login');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Create Account</Text>
      <TextInput placeholder="Username" placeholderTextColor="#AAAAAA" style={styles.input} />
      <TextInput placeholder="Email" placeholderTextColor="#AAAAAA" style={styles.input} />
      <TextInput placeholder="Password" placeholderTextColor="#AAAAAA" secureTextEntry={true} style={styles.input} />
      <TextInput placeholder="Confirm Password" placeholderTextColor="#AAAAAA" secureTextEntry={true} style={styles.input} />

      <TouchableOpacity style={styles.registerButton}>
        <Text style={styles.registerButtonText}>Register</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={handleLogin}>
        <Text style={styles.linkText}>Already have an account? Log In</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1B1B1B',
    padding: 16,
  },
  header: {
    fontSize: 32,
    color: '#FFFFFF',
    marginBottom: 30,
  },
  input: {
    width: '80%',
    padding: 15,
    marginVertical: 10,
    backgroundColor: '#333333',
    borderRadius: 8,
    color: '#FFFFFF',
  },
  registerButton: {
    backgroundColor: '#800000',
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 8,
    marginTop: 20,
  },
  registerButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  linkText: {
    color: '#CCCCCC',
    marginTop: 20,
    fontSize: 14,
  },
});

export default Register;
import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

function ForgotPassword({ onNavigate }) {
  const handleLogin = () => {
    onNavigate('login');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Reset Password</Text>
      <TextInput placeholder="Enter your email" placeholderTextColor="#AAAAAA" style={styles.input} />

      <TouchableOpacity style={styles.resetButton}>
        <Text style={styles.resetButtonText}>Reset Password</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={handleLogin}>
        <Text style={styles.linkText}>Back to Log In</Text>
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
  resetButton: {
    backgroundColor: '#800000',
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 8,
    marginTop: 20,
  },
  resetButtonText: {
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

export default ForgotPassword;
import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

function Login({ onNavigate }) {
  const mockUser = {
    avatar: { uri: 'https://images4.alphacoders.com/129/1293917.png' },
    firstName: 'Bocchi',
    lastName: 'DRock',
    joinDate: 'August 13, 2003',
  };

  const handleLogin = () => {
    onNavigate('profile', mockUser);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Welcome Back</Text>
      <TextInput 
        placeholder="Username" 
        placeholderTextColor="#AAAAAA" 
        style={styles.input} 
      />
      <TextInput 
        placeholder="Password" 
        placeholderTextColor="#AAAAAA" 
        secureTextEntry={true} 
        style={styles.input} 
      />

      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginButtonText}>Log In</Text>
      </TouchableOpacity>

      {/* Navigation options for Register and Forgot Password */}
      <View style={styles.navigationLinks}>
        <TouchableOpacity onPress={() => onNavigate('register')}>
          <Text style={styles.linkText}>Create Account</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => onNavigate('forgotPassword')}>
          <Text style={styles.linkText}>Forgot Password?</Text>
        </TouchableOpacity>
      </View>
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
    marginBottom: 40,
  },
  input: {
    width: '80%',
    padding: 15,
    marginVertical: 10,
    backgroundColor: '#333333',
    borderRadius: 8,
    color: '#FFFFFF',
  },
  loginButton: {
    backgroundColor: '#800000',
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 8,
    marginTop: 20,
  },
  loginButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  navigationLinks: {
    marginTop: 20,
    alignItems: 'center',
  },
  linkText: {
    color: '#AAAAAA',
    fontSize: 14,
    marginVertical: 5,
    textDecorationLine: 'underline',
  },
});

export default Login;

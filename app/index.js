import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import Login from '../components/Login';
import Register from '../components/Register';
import ForgotPassword from '../components/ForgotPassword';
import Profile from '../components/Profile';

function App() {
  const [currentPage, setCurrentPage] = useState('login');
  const [user, setUser] = useState(null);

  const handlePageChange = (page, userData = null) => {
    setCurrentPage(page);
    if (userData) {
      setUser(userData);
    }
  };

  return (
    <View style={styles.container}>
      {currentPage === 'login' && <Login onNavigate={handlePageChange} />}
      {currentPage === 'register' && <Register onNavigate={handlePageChange} />}
      {currentPage === 'forgotPassword' && <ForgotPassword onNavigate={handlePageChange} />}
      {currentPage === 'profile' && <Profile user={user} onNavigate={handlePageChange} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1B1B1B',
  },
});

export default App;

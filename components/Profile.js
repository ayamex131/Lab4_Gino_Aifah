import React from 'react';
import { View, Text, StyleSheet, Switch, TouchableOpacity, Image } from 'react-native';

export default function Profile({ user, onNavigate }) {
  if (!user) {
    return <Text style={styles.error}>User data is missing</Text>;
  }

  return (
    <View style={styles.container}>
      {/* Profile Section */}
      <View style={styles.profileSection}>
        <Image source={user.avatar} style={styles.profileImage} />
        <View style={styles.profileText}>
          <Text style={styles.userName}>{user.firstName} {user.lastName}</Text>
          <Text style={styles.joinDate}>Joined {user.joinDate}</Text>
        </View>
      </View>

      <Text style={styles.sectionHeader}>Profile</Text>
      <TouchableOpacity style={styles.option}>
        <Text style={styles.optionText}>Manage User</Text>
      </TouchableOpacity>

      <Text style={styles.sectionHeader}>Settings</Text>
      <View style={styles.settingsSection}>
        <TouchableOpacity style={styles.option}>
          <Text style={styles.optionText}>Notifications</Text>
          <Switch />
        </TouchableOpacity>
        <TouchableOpacity style={styles.option}>
          <Text style={styles.optionText}>Dark Mode</Text>
          <Switch />
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.signOutButton} onPress={() => onNavigate('login')}>
        <Text style={styles.signOutText}>Sign Out</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f7f7f7',
    marginTop: 40,
  },
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 15,
  },
  profileText: {
    justifyContent: 'center',
  },
  userName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  joinDate: {
    fontSize: 16,
    color: '#666',
  },
  sectionHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  settingsSection: {
    marginTop: 20,
  },
  option: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    marginBottom: 20,
  },
  optionText: {
    fontSize: 16,
    color: '#333',
  },
  signOutButton: {
    alignItems: 'center',
    marginTop: 30,
  },
  signOutText: {
    fontSize: 16,
    color: '#d9534f',
  },
  error: {
    color: '#ff0000',
    fontSize: 18,
    textAlign: 'center',
    marginTop: 20,
  },
});

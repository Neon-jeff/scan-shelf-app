import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { LogoutCurve, Scan } from 'iconsax-react-native';

import HeaderLogo from '../../../components/Header/HeaderLogo';

const Home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerLogo}>
      <HeaderLogo />
      </View>
      <View style={styles.header}>
        <Text style={styles.welcomeText}>Welcome,</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>NFC Tools</Text>
        <View style={styles.toolsContainer}>
          <TouchableOpacity style={styles.tool}>
            <View style={styles.iconContainer}>
            <Scan size="32" color="#FF8A65"/>
            </View>
            <Text style={styles.toolText}>Scan Shelf</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tool}>
            <View style={styles.iconContainer}>
            <LogoutCurve size="32" color="#008000"/>
            </View>
            <Text style={styles.toolText}>Logout</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingTop: 40,
    paddingBottom: 40,
    paddingLeft: 20,
    paddingRight: 20,
  },
  headerLogo: {
    alignItems: 'flex-start',
    marginTop: 12,
    marginBottom: 15,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    width: 40,
    height: 40,
    marginRight: 10,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333333',
  },
  card: {
    backgroundColor: '#F5F5F5',
    borderRadius: 10,
    padding: 20,
    marginTop: 26,
    height: 250,
  },
  iconContainer: {
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    padding: 15,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    alignItems: 'start',
  },
  toolsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 20,
  },
  tool: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    width: '45%',
  },
  toolText: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default Home;
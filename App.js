// App.js
import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';

import Header from './src/Header';
import Footer from './src/Footer';
import Shiin1 from './src/ShiinM/Shiin1';
import Shiin2 from './src/ShiinM/Shiin2';
import Boin1 from './src/BoinM/Boin1';
import Bonso1 from './src/BoinM/Bonso1';
import Bonso2 from './src/BoinM/Bonso2';

const App = () => {
  const [selectedTab, setSelectedTab] = useState('Shiin1');

  const renderContent = () => {
    switch (selectedTab) {
      case 'Shiin1':
        return <Shiin1 />;
      case 'Shiin2':
        return <Shiin2 />;
      case 'Boin1':
        return <Boin1 />;
      case 'Bonso1':
        return <Bonso1 />;
      case 'Bonso2':
        return <Bonso2 />;
      default:
        return <View />;
    }
  };

  return (
    <View style={styles.container}>
      <Header onTabSelect={setSelectedTab} />
      <View style={styles.content}>
        {renderContent()}
      </View>
      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  content: {
    flex: 1, // メインコンテンツに利用可能なスペースの全てを割り当てる
  }
});

export default App;

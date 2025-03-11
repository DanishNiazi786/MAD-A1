import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'; // You can choose other icon sets like FontAwesome, etc.
import Countdown from 'react-native-countdown-circle-timer'; // Optional, for the countdown timer

const FlashSaleScreen = () => {
  const [timeLeft, setTimeLeft] = useState(36 * 60); // 36 minutes in seconds

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const headphoneData = [
    {
      name: 'Audionic 22e',
      price: '$16.00',
      originalPrice: '$20.00',
      image: 'https://powerhouseexpress.com.pk/cdn/shop/files/xo-be35-headphone.jpg?v=1704442010&width=533',
    },
    {
      name: 'Audionic 24e',
      price: '$16.00',
      originalPrice: '$20.00',
      image: 'https://www.skullcandy.com/cdn/shop/files/crusher_anc_2_buy_box_1_true_black_400x.png?v=1709612294',
    },
    {
      name: 'Audionic 25e',
      price: '$16.00',
      originalPrice: '$20.00',
      image: 'https://www.space-tech.co/cdn/shop/files/001_48a9a638-b0d2-499e-9f69-f9d2e765efc9_2048x.jpg?v=1738130380',
    },
    {
      name: 'Audionic 26e',
      price: '$16.00',
      originalPrice: '$20.00',
      image: 'https://powerhouseexpress.com.pk/cdn/shop/collections/wireless-headphones.jpg?v=1703921935',
    },
  ];

  return (
    <View style={styles.container}>
      {/* Header with Flash Sale and Countdown */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Flash Sale</Text>
        <View style={styles.timerContainer}>
          <Text style={styles.timerLabel}>00 {formatTime(timeLeft)}</Text>
        </View>
        <Text style={styles.subHeader}>Choose Your Discount</Text>
      </View>

      {/* Discount Badge */}
      <View style={styles.discountBadge}>
        <Text style={styles.discountText}>20% Discount</Text>
      </View>

      {/* Headphone Products */}
      <View style={styles.productsContainer}>
        {headphoneData.map((item, index) => (
          <View key={index} style={styles.productCard}>
            <Image
              source={{ uri: item.image }}
              style={styles.productImage}
              resizeMode="contain"
            />
            <Text style={styles.productName}>{item.name}</Text>
            <Text style={styles.productPrice}>
              {item.price} <Text style={styles.originalPrice}>{item.originalPrice}</Text>
            </Text>
          </View>
        ))}
      </View>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem}>
          <Icon name="home" size={24} color="#1e88e5" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Icon name="favorite" size={24} color="#1e88e5" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Icon name="list" size={24} color="#1e88e5" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Icon name="shopping-bag" size={24} color="#1e88e5" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Icon name="person" size={24} color="#1e88e5" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: '#e3f2fd',
    padding: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    alignItems: 'center',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1e88e5',
  },
  timerContainer: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 5,
    marginVertical: 10,
  },
  timerLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1e88e5',
  },
  subHeader: {
    fontSize: 16,
    color: '#666',
  },
  discountBadge: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: '#ff4444',
    borderRadius: 10,
    padding: 5,
  },
  discountText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  productsContainer: {
    padding: 20,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  productCard: {
    width: '48%',
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    padding: 10,
    marginBottom: 15,
    alignItems: 'center',
  },
  productImage: {
    width: '100%',
    height: 150,
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 5,
  },
  productPrice: {
    fontSize: 14,
    color: '#000',
    fontWeight: 'bold',
  },
  originalPrice: {
    textDecorationLine: 'line-through',
    color: '#666',
    fontSize: 12,
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
    paddingVertical: 10,
    backgroundColor: '#fff',
  },
  navItem: {
    padding: 10,
  },
});

export default FlashSaleScreen;
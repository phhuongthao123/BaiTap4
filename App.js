import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      backgroundColor: '#fff', // Màu nền ban đầu của component cha
    };
  }

  // Hàm xử lý khi button được nhấn, thay đổi màu nền và hiện thông báo
  handleButtonClick = (newColor) => {
    this.setState({ backgroundColor: newColor }, () => {
      // Hiện thông báo sau khi thay đổi màu thành công
      Alert.alert('Thành công', 'Bạn đã đổi màu thành công!');
    });
  };

  render() {
    return (
      <View style={[styles.container, { backgroundColor: this.state.backgroundColor }]}>
        <ButtonComponent
          backgroundColor="green"
          label="GREEN"
          onClick={this.handleButtonClick}
          colorChange="#32CD32" // green
        />
        <ButtonComponent
          backgroundColor="blue"
          label="BLUE"
          onClick={this.handleButtonClick}
          colorChange="#00FF00" // blue
        />
        <ButtonComponent
          backgroundColor="brown"
          label="BROWN"
          onClick={this.handleButtonClick}
          colorChange="#8B4726" // brown
        />
        <ButtonComponent
          backgroundColor="yellow"
          label="YELLOW"
          onClick={this.handleButtonClick}
          colorChange="#FFFF00" // yellow
        />
        <ButtonComponent
          backgroundColor="red"
          label="RED"
          onClick={this.handleButtonClick}
          colorChange="#FF0000" // red
        />
        <ButtonComponent
          backgroundColor="black"
          label="BLACK"
          onClick={this.handleButtonClick}
          colorChange="#000000" // black
        />
      </View>
    );
  }
}

class ButtonComponent extends Component {
  render() {
    const { backgroundColor, label, onClick, colorChange } = this.props;
    return (
      <TouchableOpacity
        style={[styles.button, { backgroundColor: backgroundColor }]}
        onPress={() => onClick(colorChange)}
      >
        <Text style={styles.buttonText}>{label}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginVertical: 20,
    width: '80%', // Đặt chiều rộng của button để vừa với màn hình
    alignItems: 'center', // Căn giữa nội dung
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default App;

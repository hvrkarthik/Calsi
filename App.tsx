import React, {Component} from 'react';
import {SafeAreaView, StatusBar, StyleSheet, Text, View} from 'react-native';

import Button from './src/components/Button';
import Row from './src/components/Row';
import calculator, {initialState} from './src/function/Calculator';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#202020',
    justifyContent: 'flex-end',
  },
  value: {
    color: '#fff',
    fontSize: 50,
    textAlign: 'right',
    marginRight: 20,
    marginBottom: 10,
  },
});

class App extends Component {
  state = initialState;

  handleTap = (type: string, value: number | string) => {
    this.setState(state => calculator(type, value, state));
  };

  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <SafeAreaView>
          <Text style={styles.value}>{this.state.currentValue}</Text>
          <Row>
            <Button
              text="Clear"
              theme="secondary"
              onPress={() => this.handleTap('clear', 0)}
            />
            <Button
              text="+/-"
              theme="secondary"
              onPress={() => this.handleTap('posneg', 0)}
            />
            <Button
              text="%"
              theme="secondary"
              onPress={() => this.handleTap('percentage', 0)}
            />
            <Button
              text="/"
              theme="secondary"
              onPress={() => this.handleTap('operator', '/')}
            />
          </Row>

          <Row>
            <Button text="7" onPress={() => this.handleTap('number', 7)} />
            <Button text="8" onPress={() => this.handleTap('number', 8)} />
            <Button text="9" onPress={() => this.handleTap('number', 9)} />
            <Button
              text="x"
              theme="secondary"
              onPress={() => this.handleTap('operator', '*')}
            />
          </Row>

          <Row>
            <Button text="4" onPress={() => this.handleTap('number', 4)} />
            <Button text="5" onPress={() => this.handleTap('number', 5)} />
            <Button text="6" onPress={() => this.handleTap('number', 6)} />
            <Button
              text="-"
              theme="secondary"
              onPress={() => this.handleTap('operator', '-')}
            />
          </Row>

          <Row>
            <Button text="1" onPress={() => this.handleTap('number', 1)} />
            <Button text="2" onPress={() => this.handleTap('number', 2)} />
            <Button text="3" onPress={() => this.handleTap('number', 3)} />
            <Button
              text="+"
              theme="secondary"
              onPress={() => this.handleTap('operator', '+')}
            />
          </Row>

          <Row>
            <Button
              text="0"
              size="double"
              onPress={() => this.handleTap('number', 0)}
            />
            <Button text="." onPress={() => this.handleTap('number', '.')} />
            <Button
              text="="
              theme="secondary"
              onPress={() => this.handleTap('equal', 0)}
            />
          </Row>
        </SafeAreaView>
      </View>
    );
  }
}

export default App;

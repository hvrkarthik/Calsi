import React, { FC, useState } from 'react';
import { SafeAreaView, StatusBar, StyleSheet, Text, View, Dimensions } from 'react-native';
import Button from './src/components/Button';
import Row from './src/components/Row';
import calculator, { CalculatorState, initialState } from './src/function/calculator';

const App: FC = () => {
  const [state, setState] = useState<CalculatorState>(initialState);

  const handleTap = (type: string, value: number | string) => {
    setState(prevState => calculator(type, value, prevState));
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#000000" barStyle="light-content" />
      <SafeAreaView>
        <Text style={styles.value}>{state.currentValue}</Text>
        <Row>
          <Button
            text="Clear"
            theme="secondary"
            onPress={() => handleTap('clear', 0)}
          />
          <Button
            text="+/-"
            theme="secondary"
            onPress={() => handleTap('posneg', 0)}
          />
          <Button
            text="%"
            theme="secondary"
            onPress={() => handleTap('percentage', 0)}
          />
          <Button
            text="/"
            theme="secondary"
            onPress={() => handleTap('operator', '/')}
          />
        </Row>

        <Row>
          <Button text="7" onPress={() => handleTap('number', 7)} />
          <Button text="8" onPress={() => handleTap('number', 8)} />
          <Button text="9" onPress={() => handleTap('number', 9)} />
          <Button
            text="x"
            theme="secondary"
            onPress={() => handleTap('operator', '*')}
          />
        </Row>

        <Row>
          <Button text="4" onPress={() => handleTap('number', 4)} />
          <Button text="5" onPress={() => handleTap('number', 5)} />
          <Button text="6" onPress={() => handleTap('number', 6)} />
          <Button
            text="-"
            theme="secondary"
            onPress={() => handleTap('operator', '-')}
          />
        </Row>

        <Row>
          <Button text="1" onPress={() => handleTap('number', 1)} />
          <Button text="2" onPress={() => handleTap('number', 2)} />
          <Button text="3" onPress={() => handleTap('number', 3)} />
          <Button
            text="+"
            theme="secondary"
            onPress={() => handleTap('operator', '+')}
          />
        </Row>

        <Row>
          <Button
            text="0"
            size="double"
            onPress={() => handleTap('number', 0)}
          />
          <Button text="." onPress={() => handleTap('number', '.')} />
          <Button
            text="="
            theme="secondary"
            onPress={() => handleTap('equal', 0)}
          />
        </Row>
      </SafeAreaView>
    </View>
  );
};

const { width } = Dimensions.get('window');
const buttonWidth = width / 4;

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
  }
});

export default App;
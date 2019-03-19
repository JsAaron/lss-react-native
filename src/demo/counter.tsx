import * as React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

interface Props {
  name: string;
  count?: number;
  onInc?: () => void;
  onDec?: () => void;
}

interface LabelledValue {
  size?: number;
  label?: string;
}

function printLabel(labelledObj: LabelledValue): { label: string } {
  console.log(111, labelledObj.label);
}

let myObj = { size: 10, label: '14423' };
printLabel(myObj);

export default ({ name, count = 1, onInc, onDec }: Props) => (
  <View style={styles.root}>
    <Text>
      Counter {name}: {count}
    </Text>
    <View>
      <Button title="1+" onPress={onInc || (() => {})} />
      <Button title="-" onPress={onDec || (() => {})} />
    </View>
  </View>
);

// styles
const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    alignSelf: 'center'
  },
  buttons: {
    flexDirection: 'row',
    minHeight: 70,
    alignItems: 'stretch',
    alignSelf: 'center',
    borderWidth: 5
  },
  button: {
    flex: 1,
    paddingVertical: 0
  },
  greeting: {
    color: '#999',
    fontWeight: 'bold'
  }
});

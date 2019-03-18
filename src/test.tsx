import * as React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

interface Props {
  name: string;
  count?: number;
  onInc?: () => void;
  onDec?: () => void;
}

export default ({ name, count = 10, onInc, onDec }: Props) => (
  <View style={styles.root}>
    <Text>
      Counter {name}: {count}
    </Text>
    <View>
      <Button title="+11" onPress={onInc || (() => {})} />
      <Button title="21-10" onPress={onDec || (() => {})} />
    </View>
  </View>
);

// styles
const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    alignSelf: 'center',
  },
  buttons: {
    flexDirection: 'row',
    minHeight: 170,
    alignItems: 'stretch',
    alignSelf: 'center',
    borderWidth: 150,
  },
  button: {
    flex: 1,
    paddingVertical: 0,
  },
  greeting: {
    color: '#999',
    fontWeight: 'bold',
  },
});
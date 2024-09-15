import { StyleSheet, Text, View } from 'react-native';
import {defaultStyles} from "./Styles";
import { SafeAreaView } from 'react-native-web';

export default function App() {
  return (
    <SafeAreaView style = {defaultStyles.background}>
      <View style={defaultStyles.quadro}>
        <Text style = {defaultStyles.title}>Noiser</Text>
      </View>
    </SafeAreaView>
  );
}

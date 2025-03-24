import { Picker } from "@react-native-picker/picker";
import { Text, StyleSheet, Platform, View } from "react-native";
import { useState } from "react";

function PickComponent(params) {
  const [currency, setCurrency] = useState('US Dollar');

  return (
    <View style={styles.view}>
      <Picker
        selectedValue={currency}
        onValueChange={currentCurrency => setCurrency(currentCurrency)}
        style={styles.picker}
        mode={Platform.OS === 'android' ? 'dialog' : 'dropdown'}
      >
        <Picker.Item label="USD" value="US Dollars" style={styles.pickerItem} />
        <Picker.Item label="Rupees" value="Indian Rs" style={styles.pickerItem} />
        <Picker.Item label="YEN" value="Japanese yen" style={styles.pickerItem} />
        <Picker.Item label="EUR" value="European" style={styles.pickerItem} />
      </Picker>

      <Text style={styles.selectedCurrencyText}>Selected currency: {currency}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  pickerItem: {
    textAlign: 'center',
    fontSize: 18,
    marginTop: 20,
  },
  picker: {
    width: '80%',
    padding: 1,
    backgroundColor: 'white'
  },
  view: {
    borderRadius: 10,
    width: '100%',
    marginTop: 20,
    marginBottom: 20,
    alignItems: 'center'
  },
  selectedCurrencyText: {
    color: 'black',
    fontSize: 18,
    textAlign: 'center',
    marginTop: 20,
  },
});

export default PickComponent;

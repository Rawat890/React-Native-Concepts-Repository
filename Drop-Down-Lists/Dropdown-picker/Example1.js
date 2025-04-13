import { useState } from "react"
import { View, Text } from "react-native"
import DropDownPicker from "react-native-dropdown-picker"
function Example1() {

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: 'Apple', value: 'apple' },
    { label: 'Banana', value: 'banana' }
  ]);


  return (
    <View>
      <DropDownPicker setOpen={setOpen} setValue={setValue} setItems={setItems} open={open} value={value} items={items} />

    </View>
  )
}

export default Example1

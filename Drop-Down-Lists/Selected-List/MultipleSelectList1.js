import { View, Text } from 'react-native'
import { MultipleSelectList } from 'react-native-dropdown-select-list'
import { useState } from 'react';

function MultipleSelectList1(params) {

  const [selected, setSelected] = useState([]);

  const data = [
    { key: '1', value: 'Mobiles', disabled: true },
    { key: '2', value: 'Appliances' },
    { key: '3', value: 'Cameras' },
    { key: '4', value: 'Computers', disabled: true },
    { key: '5', value: 'Vegetables' },
    { key: '6', value: 'Diary Products' },
    { key: '7', value: 'Drinks' },
  ]

  return (
    <MultipleSelectList data={data} setSelected={(item) => setSelected(item)} placeholder='Select' save='value' onSelect={() => alert(selected)} />
  )
}

export default MultipleSelectList1
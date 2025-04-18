import { SelectList } from 'react-native-dropdown-select-list'
import { View, Text } from 'react-native'
import { useState } from 'react'

function SelectList1(params) {

  //Single selection
  const [selected, setSelected] = useState('')

  function selectedItem(params) {
    console.log("selected item is ", selected)
  }

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
    <SelectList data={data} save='value' setSelected={(val) => setSelected(val)} onSelect={selectedItem} placeholder='Select' defaultOption={{ key: '3', value: 'Cameras' }} />
  )



}

export default SelectList1
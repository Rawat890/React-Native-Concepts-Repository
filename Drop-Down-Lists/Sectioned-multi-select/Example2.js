import { View, Text } from 'react-native'
import SectionedMultiSelect from 'react-native-sectioned-multi-select'
import { MaterialIcons as Icon } from '@expo/vector-icons';
import { useState } from 'react';

function Example2(params) {
  const items = [
    { name: 'Cars', id: 1 },
    { name: 'Vans', id: 2 },
    { name: 'SUVs', id: 3 },
    { name: 'Motorbikes', id: 4 },
    { name: 'Trucks', id: 5 },
  ];

  const [selectedItems, setSelectedItems] = useState([])

  return (
    <>
      <Text>Hello</Text>
      <SectionedMultiSelect IconRenderer={Icon} items={items} uniqueKey='id' onSelectedItemsChange={setSelectedItems} selectedItems={selectedItems} />
    </>
  )
}

export default Example2
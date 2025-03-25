import React, { Component } from 'react'
import { Text, View, StyleSheet, Pressable, TextInput } from 'react-native'

function Form6() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Contact Us</Text>
      </View>

      <View style={styles.topInputContainer}>

        <View>
          <Text style={styles.topInputText}>Email</Text>
          <TextInput placeholder='Enter email....' style={styles.topInput} />
        </View>

        <View>
          <Text style={styles.topInputText}>Phone</Text>
          <TextInput placeholder='Enter phone no..' style={styles.topInput} />
        </View>

      </View>

      <View style={styles.mainInputContainer}>
        <TextInput placeholder='Enter Name...' style={styles.mainInput} />
        <TextInput placeholder='Enter email' style={styles.mainInput} />

        <View style={styles.mainInputContainer}>

          <View>
            <Text style={styles.mainInputText}>Email</Text>
            <TextInput placeholder='Enter email....' style={styles.mainInput} />
          </View>

          <View>
            <Text style={styles.mainInputText}>Phone</Text>
            <TextInput placeholder='Enter phone no..' style={styles.mainInput} />
          </View>

        </View>
      </View>

    </View>
  )

}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    backgroundColor: '#F3115D',
    height: 200
  },
  headerText: {
    marginTop: 135,
    fontSize: 30,
    marginLeft: 15,
    color: 'white',
    fontWeight: 'bold'
  },
  topInputContainer: {
    marginTop: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15
  },
  topInputText: {
    fontWeight: '600',
    fontSize: 12
  },
  topInput: {
    borderRadius: 10,
    color: '#F3115D',
    fontSize: 10,
    marginTop: -5
  },
  mainInput: {
    padding: 17,
    width: '95%',
    marginLeft: 10,
    borderWidth: 2,
    borderColor: 'red',
    marginBottom: 10,
    borderRadius: 10
  }

})

export default Form6

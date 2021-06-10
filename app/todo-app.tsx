import React from "react"
import { Text, View, ViewStyle } from "react-native"

const CENTER: ViewStyle = {
  flex: 1,
  justifyContent: "center",
  alignItems: "center",
}

function Todos() {
  return (
    <View style={CENTER}>
      <Text>Hello</Text>
    </View>
  )
}

export default Todos

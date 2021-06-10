import React from "react"
import { Text } from "react-native"
import { List } from "react-native-paper"

function Todo({ id, title, complete }) {
  return (
    <List.Item
      title={title}
      onPress={() => {}}
      right={(props) => <Text {...props} children={complete ? "(complete)" : ""} />}
    />
  )
}

export default React.memo(Todo)

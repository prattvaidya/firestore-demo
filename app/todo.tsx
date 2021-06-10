import React from "react"
import { Text } from "react-native"
import firestore from "@react-native-firebase/firestore"
import { List } from "react-native-paper"

function Todo({ id, title, complete }) {
  async function toggleComplete() {
    await firestore().collection("todos").doc(id).update({
      complete: !complete,
    })
  }

  return (
    <List.Item
      title={title}
      onPress={() => toggleComplete()}
      right={(props) => <Text {...props} children={complete ? "(complete)" : ""} />}
    />
  )
}

export default React.memo(Todo)

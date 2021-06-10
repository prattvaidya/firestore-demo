import React, { useState } from "react"
import { ScrollView, Text } from "react-native"

import { initialWindowMetrics } from "react-native-safe-area-context"

import firestore from "@react-native-firebase/firestore"
import { Appbar, TextInput, Button } from "react-native-paper"

function Todos() {
  const [todo, setTodo] = useState("")
  const ref = firestore().collection("todos")

  const {
    insets: { top, bottom },
  } = initialWindowMetrics

  async function addTodo() {
    await ref.add({
      title: todo,
      complete: false,
    })
    setTodo("")
  }

  return (
    <>
      <Appbar style={{ marginTop: top }}>
        <Appbar.Content title={"TODOs List"} />
      </Appbar>

      <ScrollView style={{ flex: 1, padding: 10 }}>
        <Text>List of TODOs!</Text>
      </ScrollView>

      <TextInput label={"New Todo"} textAlign="left" value={todo} onChangeText={setTodo} />

      <Button
        style={{ marginBottom: bottom }}
        onPress={() => {
          addTodo()
        }}
      >
        Add TODO
      </Button>
    </>
  )
}

export default Todos

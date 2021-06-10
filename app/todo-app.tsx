import React, { useState, useEffect } from "react"
import { FlatList } from "react-native"

import { initialWindowMetrics } from "react-native-safe-area-context"

import firestore from "@react-native-firebase/firestore"
import { Appbar, TextInput, Button } from "react-native-paper"

import Todo from "./todo"

function Todos() {
  const [todo, setTodo] = useState("")
  const [todos, setTodos] = useState([])

  const ref = firestore().collection("todos")

  const {
    insets: { top, bottom },
  } = initialWindowMetrics

  useEffect(() => {
    return (
      ref
        // .where("complete", "!=", true)
        .onSnapshot((querySnapshot) => {
          const list = []
          querySnapshot.forEach((doc) => {
            const { title, complete } = doc.data()
            list.push({
              id: doc.id,
              title,
              complete,
            })
          })

          setTodos(list)
        })
    )
  }, [])

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

      <FlatList
        style={{ flex: 1 }}
        data={todos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Todo {...item} />}
      />

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

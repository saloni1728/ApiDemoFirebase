import CheckBox from "@react-native-community/checkbox";
import { onValue, push, remove,ref,update } from "firebase/database";
import { useEffect, useState } from "react";
import { Button, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import { db } from "../../firebase.config";
import React from "react";



const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 12
    },
    contentContainerStyle: {
        padding: 24
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#afafaf',
        borderRadius: 5,
        paddingHorizontal: 10,
        marginVertical: 20,
        fontSize: 20
    },
    todoItem: {
        flexDirection: 'row',
        marginVertical: 10,
        alignItems: 'center'
    },
    todoText: {
        paddingHorizontal: 5,
        fontSize: 16
    }
});

export const Todos = () => {
    const [todos, setTodos] = useState({});
    const [presentTodo, setPresentTodo] = useState('');
    const todosKeys = Object.keys(todos);

    useEffect(() => {
        return onValue(ref(db, '/todos'), querySnapshot => {
            let data = querySnapshot.val() || {};
            let todoItems = { ...data };
            setTodos(todoItems);
        })
    }, [])

    const addNewTodo = () => {
        push(ref(db, '/todos'), {
            done: false,
            title: presentTodo
        })
        setPresentTodo('');
    }

    const clearTodos = () => {
        remove(ref(db, '/todos'));
    }

    return (
        <ScrollView
            style={styles.container}
            contentContainerStyle={styles.contentContainerStyle}>
                <View>
                    { todosKeys.length > 0 ? (
                        todosKeys.map(key=>(
                            <ToDoItem
                                key={key}
                                id={key}
                                todoItem={todos[key]}
                            />
                        ))
                    ):(<Text>No todo Item</Text>)
                    }
                </View>
                <TextInput
                    placeholder="New todo"
                    value={presentTodo}
                    style={styles.textInput}
                    onChangeText={text=>{
                        setPresentTodo(text);
                    }}
                    onSubmitEditing={addNewTodo}
                />
                <View>
                    <View style={{marginTop:20}}>
                        <Button 
                            title="Add new Todo"
                            onPress={addNewTodo}
                            color='green'
                            disabled={presentTodo==''}
                        />
                    </View>

                    <View style={{marginTop:20}}>
                        <Button 
                            title="Clear the todo list"
                            onPress={clearTodos}
                            color='red'
                            style={{marginTop:20}}
                        />
                    </View>
                </View>
        </ScrollView>
    )
}

const ToDoItem = ({ todoItem: { title, done }, id }) => {
    const [doneState, setDone] = useState(done);
    const onCheck = (ischecked) => {
        setDone(ischecked);
        update(ref(db, '/todos'), {
            [id]: {
                title,
                done: !doneState
            }
        })
    };
    return (
        <View style={styles.todoItem}>
            <CheckBox
                onValueChange={onCheck}
                value={doneState}
            />
            <Text style={[styles.todoText, { opacity: doneState ? 0.2 : 1 }]}>{title}</Text>
        </View>
    )
}
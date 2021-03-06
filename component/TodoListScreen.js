
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, TextInput, FlatList, TouchableOpacity, Image,Dimensions } from 'react-native';
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';

import BackHeader from './BackHeader'
const { height, width } = Dimensions.get('window')

export default function TodoListScreen(props) {
   
    return (
        <SafeAreaView style={styles.todo_area}>
            <BackHeader />

            <View style={styles.todolist_container}>
                <Text style={styles.todolist_lefttext}>> ToDo</Text>
                <Text style={styles.todolist_righttext}> List</Text>
                </View>
         
            <SafeAreaView style={styles.todo_list_box}>
                <FlatList
                    data={props.screenProps.listData}
                    renderItem={props.screenProps.renderMethod}
                    keyExtractor={(item, index) => index.toString()} 
                   />
            </SafeAreaView>
        </SafeAreaView>

    )
}






const styles = StyleSheet.create({


    //Todo설정과 관련한 부분이 뜨는 부분
    todo_area: {
        flex: 1,
        backgroundColor: '#fec8c9',
        justifyContent: 'center',
        // borderWidth: 5,
        // borderColor: 'red',
    },
    //Todo 지역 내의 Todo List가 랜더링 되는 부분을 구분하는 box
    todo_list_box: {
        // borderWidth: 3,
        // borderColor: 'green',
       
        flex: 3,
    },
    todolist_container: {
        flexDirection: 'row',
        marginBottom: height*0.05,
        marginLeft:width*0.05,
    },
    todolist_lefttext: {
        fontSize: width*0.12,
        fontFamily: 'DungGeunMo',
        color: '#ff7f80',
    }, 
    todolist_righttext: {
        fontSize: width * 0.12,
        fontFamily: 'DungGeunMo',
        color: '#fff',
    }


});

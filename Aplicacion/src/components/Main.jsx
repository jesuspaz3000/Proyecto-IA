import React from "react";
import { Text, View } from 'react-native';
import RepositoryList from "./RepositoryList";
import AppBar from "./AppBar";
import { Redirect, Route, Routes } from "react-router-native";

const Main = () => {
    return (
        <View style={{ flex: 1 }}>
            <AppBar />
            <Routes>
                <Route path = '/' element={ <RepositoryList /> } exact />
                <Route path='/signin' element={ <Text>Working on it</Text> } exact />
                <Redirect to='/' />
            </Routes>
        </View>
    )
}

export default Main;

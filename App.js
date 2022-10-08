import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from "react";
import {FlatList} from "react-native-web";
import axios from "axios";
import MyTab from "./src/MyTab";
import StatusBar from "react-native-web/dist/exports/StatusBar";

export default function App() {

    const [data, setData] = useState([]);
    const [page, setPage] = useState(1);

    const getMovies = () => {


        const apiCall = axios.get(`https://api.thecatapi.com/v1/images/search?limit=10&page=${page}&category_ids=1`);
        apiCall.then(r => r.data).then(x => {
            setData([...data, ...x])
        }).catch((error) => {
                console.log(error);
            }
        );
    }

    useEffect(() => {
        getMovies();
    }, [page])


    const renderItem = ({item}) => (
        <View>
            <Text>"name" : {item?.id}</Text>
            <Text>"width" : {item?.width}</Text>
            <Text>
                <img style={{width: 50, height: 50}} src={item?.url} alt=""/> </Text>
        </View>
    )

    const keyExtractor = () => {
        return new Date().getTime().toString() + (Math.floor(Math.random() * Math.floor(new Date().getTime()))).toString();
    };

    return (
        <View style={styles.container}>
            <Text>Open </Text>
            <FlatList style={styles.item}
                      data={data}
                      onEndReached={() => setPage(page + 1)}
                      onEndReachedThreshold={0.5}
                      renderItem={renderItem}
                      keyExtractor={keyExtractor}

            />
            <MyTab/>

            <StatusBar style="auto"/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 30,
        padding: 20,
    },
    item: {
        backgroundColor: '#f5f520',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
});

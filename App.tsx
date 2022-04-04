import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text} from 'react-native';
import Box from './templates/Box';
import fetchBEResponse from './api_calls/bdf';

type Template = {
  type: string;
  id: string;
}
export default function App() {
  const [templates,setTemplates] = useState([]);
  const [dataState, setDataState] = useState({});
  useEffect(()=>{
    const apiResponse = fetchBEResponse();
    setTemplates(apiResponse.templates);
    setDataState(apiResponse.state);
  },[])
  return (
    <View style={styles.container}>
      {/* <Box title="DTU"></Box>
      <Box title="Students" subtitle='Batch of 2024'></Box> */}
      {
        templates.map((item : Template)=>(
          <Box {...dataState[item.id]} />
        )
        )
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingVertical: 10
  },
});

import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, View, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Login from '../components/Login'

export default TimeTableApiCall = ({navigation}) => {
  const days = ['요일','월','화','수','목','금']

  const [isLoading, setLoading] = useState(true);
  const [weekDayBind, setWeekDayBind] = useState({});

  

  const getTimeTable = async () => {
    try {
      //const weekTime = await fetch('https://open.neis.go.kr/hub/hisTimetable?KEY=1cf2ddd16d844b86a22e9be5d267bcb8&Type=json&pIndex=1&pSize=100&ATPT_OFCDC_SC_CODE=G10&SD_SCHUL_CODE=7430148&ALL_TI_YMD=20211025&GRADE=3&CLASS_NM=8');
      const weekTime = await fetch('https://open.neis.go.kr/hub/hisTimetable?KEY=1cf2ddd16d844b86a22e9be5d267bcb8&Type=json&pIndex=1&pSize=100&ATPT_OFCDC_SC_CODE=G10&SD_SCHUL_CODE=7430148&GRADE=3&CLASS_NM=8&TI_FROM_YMD=20211025&TI_TO_YMD=20211029');
      const json = await weekTime.json();
      const weekRow = json.hisTimetable[1];
      let weekArranged = {mon:[], tue:[], wed:[], thu:[], fri:[]};
      for(let i=0;i<7;i+=1) {
        weekArranged.mon.push(weekRow.row[i])
        weekArranged.tue.push(weekRow.row[i+7])
        weekArranged.wed.push(weekRow.row[i+14])
        weekArranged.thu.push(weekRow.row[i+21])
        weekArranged.fri.push(weekRow.row[i+28])
      }
      setWeekDayBind(weekArranged)
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getTimeTable();
    navigation.setOptions({
      title:"Timetable",
      headerStyle: {
        backgroundColor: '#fff',
        shadowColor: "none",
      },
      headerTintColor: "#000",
  })
  }, []);

  return (
    <View style={{ flex: 1, padding: 10, backgroundColor: '#fff' }}>
      {isLoading ? <ActivityIndicator/> : (
        <View>
          <View style = {{flexDirection: 'row', marginTop: 20}}>
            {days.map((value, idx) => {
              return(
                <View style = {styles.dayCell} key={idx}>
                  <Text style={styles.tableText}>{value}</Text>
                </View>
              )
            })}
          </View>
          {/* <FlatList
            data={data.row}
            keyExtractor={item => item.PERIO.toString()}
            renderItem={({ item }) => (
                <View style={styles.tableContainer}>
                  <View style={styles.tableCell}><Text style={styles.tableText}>{item.PERIO}교시</Text></View>
                  <View style={styles.tableCell}><Text style={styles.tableText}>{item.ITRT_CNTNT}</Text></View>
                  
                </View>
            )}
          /> */}
          <View style = {{flexDirection: 'row'}}>
            <View style = {{flexDirection: 'column', flex:1}}>
              {weekDayBind.mon.map((value, idx) => {
                return(
                  <View style={styles.subjectCell} key={idx}>
                    <Text style={styles.tableText}>{value.PERIO}교시</Text>
                  </View>
                )
              })}
            </View>
            <View style = {{flexDirection: 'column', flex:1}}>
              {weekDayBind.mon.map((value, idx) => {
                return(
                  <View style={styles.subjectCell} key={idx}>
                    <Text style={styles.tableText}>{value.ITRT_CNTNT}</Text>
                  </View>
                )
              })}
            </View>
            <View style = {{flexDirection: 'column', flex:1}}>
              {weekDayBind.tue.map((value, idx) => {
                return(
                  <View style={styles.subjectCell} key={idx}>
                    <Text style={styles.tableText}>{value.ITRT_CNTNT}</Text>
                  </View>
                )
              })}
            </View>
            <View style = {{flexDirection: 'column', flex:1}}>
              {weekDayBind.wed.map((value, idx) => {
                return(
                  <View style={styles.subjectCell} key={idx}>
                    <Text style={styles.tableText}>{value.ITRT_CNTNT}</Text>
                  </View>
                )
              })}
            </View>
            <View style = {{flexDirection: 'column', flex:1}}>
              {weekDayBind.thu.map((value, idx) => {
                return(
                  <View style={styles.subjectCell} key={idx}>
                    <Text style={styles.tableText}>{value.ITRT_CNTNT}</Text>
                  </View>
                )
              })}
            </View>
            <View style = {{flexDirection: 'column', flex:1}}>
              {weekDayBind.fri.map((value, idx) => {
                return(
                  <View style={styles.subjectCell} key={idx}>
                    <Text style={styles.tableText}>{value.ITRT_CNTNT}</Text>
                  </View>
                )
              })}
            </View>
            
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  tableContainer: {
    flex: 1,
    flexDirection: 'row'
  },
  dayCell: {
    flex: 1,
    borderColor: "black",
    borderWidth: 1,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tableText: {
    textAlign: 'center'
  },
  subjectCell: {
    borderColor: "black",
    borderWidth: 1,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
  }
})
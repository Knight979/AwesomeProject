import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  SectionList,
  StatusBar,
  Alert,
} from 'react-native';

const DATA = [
  {
    title: 'Main dishes',
    data: ['Pizza', 'Burger', 'Risotto'],
  },
  {
    title: 'Sides',
    data: ['French Fries', 'Onion Rings', 'Fried Shrimps'],
  },
  {
    title: 'Drinks',
    data: ['Water', 'Coke', 'Beer'],
  },
  {
    title: 'Desserts',
    data: ['Cheese Cake', 'Ice Cream'],
  },
];

const Index = () => (
    
  <SafeAreaView style={styles.container}>
    <SectionList 
      sections={DATA}
      keyExtractor={(item, index) => item + index}
      renderItem={({item}) => (
        <View style={styles.item}>
          <Text style={styles.title}>{item}</Text>
        </View>
      )}
      renderSectionHeader={({section: {title}}) => (
        <Text style={styles.header}>{title}</Text>
      )}
       ItemSeparatorComponent={()=>{
        // 声明项目之间的分隔符
        return <View style={{borderBottomWidth:1,borderBottomColor:'red'}}></View>
       }}
       ListEmptyComponent={()=>{
        // 列表数据为空时，展示的组件
        return <Text style={{fontSize:30}} >空空如也!</Text>
        
        
       }}
       refreshing={true}
       onRefresh={()=>{
        alert('下拉刷新')
       }}
    />
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    marginHorizontal: 16,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
  },
  header: {
    fontSize: 32,
    backgroundColor: '#fff'
  },
  title: {
    fontSize: 24,
  },
});

export default Index;
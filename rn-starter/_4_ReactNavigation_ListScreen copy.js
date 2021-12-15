import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

/**
 * 
 * @returns There are two ways to solve 'key' issue
 * FlatList element allows scrolling of it's list
 * Method1=>
 * To each obect we will add a key property
 * Key must be a string, must be consistent between renters, it must be unique compare to all the other objects inside of our array of data.
 * Example=>
 * const friends = [
        { name: 'friends #1', key:'1' },
        { name: 'friends #2', key:'2' },
        { name: 'friends #3', key:'3' },...

  Second Method=>PREFERRED WAY
  use keyExtractor prop in FlatList JSX element.  
  
  keyExtractor={(friend) => { return friend.name }}
  keyExtractor={(friend,index) => { return friend.name }}
  keyExtractor={friend => { return friend.name }}

  We will call a function in this.
  This function is going to be called many different times
  It's going to be called with a single argument that we're going to call friend.
  This friend argument right here is going to be first object, then second object ,then third and so on.... in friends array.I.E. keyExtractor will be called with every object inside of our array.
  Inside this function, we have to inspect htat object and then return the key property to use for it.
  So, the only difference here is that now we're going to essentially define our key property like at runtime right here when we pass our data into flat list as opposed to kind of ahead of time of on our list of friend objects.
  So, once again we can return some unique character or some unique string that is consistent across rerenders of our list.
  In this case we can use name property of object which suit all conditions i.e. it is string, it is unique. so can be used as key.    
 ]
 */

const ListScreen = (navigation) => {

    const friends = [
        { name: 'friends #1', age:20 },
        { name: 'friends #2', age:22 },
        { name: 'friends #3', age:23 },
        { name: 'friends #4', age:24 },
        { name: 'friends #5', age:25 },
        { name: 'friends #6', age:27 },
        { name: 'friends #7', age:50 },
    ];

    return (
        <SafeAreaProvider>
            <View>
                <FlatList
                    // horizontal//makes list horizontally appear in screen
                    // showsHorizontalScrollIndicator={false}//hides scrollbar at bottom of screen for horizontal list
                    keyExtractor={friend => { return friend.name }}
                    data={friends}

                    /* 
                    renderItem={(element)=>{ This function will be called for each element
    when we console.log(element)
    it is an object with following properties=>
    element={index:0,item:{name:'friend #1'},...} so instead of using element as parameter we can directly refer to item property of element object as done below=>

    renderItem={({item})=>{
                        here item==={name:'friend #1'}
                        return (some JSX to be displayed on screen);
                                    }}
                    }}
                    */

                    renderItem={({ item }) => {
                        return <Text style={styles.textStyle}>{item.name} - Age {item.age}</Text>;
                    }}
                />
            </View>
        </SafeAreaProvider>
    );

};

const styles = StyleSheet.create({
    textStyle: {
        marginVertical: 60,
    },
});

export default ListScreen;
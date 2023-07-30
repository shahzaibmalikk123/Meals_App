import { Pressable, View, Text, StyleSheet, Platform } from "react-native";

function CategoryGridTitle({title, color, onPress, }){
    return(
        <View style={styles.gridItem}>
            <Pressable
                onPress={onPress}
                android_ripple={{color: '#ccc'}}  
                style={({pressed})  => [{flex:1, }, pressed ? styles.buttonPressed : null]}>
                <View style={[styles.innerContainer,{backgroundColor: color}]}>
                    <Text style={styles.title}>
                        {title}
                    </Text>
                </View>
            </Pressable>
        </View>
    )
}

export default CategoryGridTitle; 

const styles = StyleSheet.create({
    gridItem:{
        flex:1,
        margin:16,
        height:150,
        borderRadius:8,
        elevation: 4,
        shadowColor:'black',
        shadowOffset:{ width: 0, height: 2},
        shadowOpacity: 0.25,
        shadowRadius: 8,
        backgroundColor: 'white',
        overflow: Platform.OS === 'android' ?'hidden' : 'visible'
    },
    innerContainer:{
        flex:1,
        justifyContent:'center',
        padding:16,
        alignItems:'center',
        borderRadius:8,

    },
    title:{
        fontWeight:'bold',
        fontSize: 18
    },
    buttonPressed:{
        opacity: 0.5,
    }
})
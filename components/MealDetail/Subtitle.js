import { View, Text, StyleSheet } from "react-native";
function Subtitle({children}){
    return(
        <View style={styles.subtitleContainer}>
        <Text style={styles.subtitle}>{children}</Text>
        </View>
    )
}

export default Subtitle;
const styles = StyleSheet.create({
    subtitle:{
        color: '#e2b497',
        fontSize: 18,
        fontWeight: 'bold',
        margin: 8,
        padding:6,
        textAlign:'center',
        borderBottomColor:'#e2b497',
        borderBottomWidth: 2
    },
    subtitleContainer:{
        padding:6,
        borderBottomColor:'#e2b497',
        borderBottomWidth: 2,
        margin: 4,
        marginHorizontal:12,
        marginVertical: 4

    }
})
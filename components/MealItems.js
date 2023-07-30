import { View, Text, Pressable,Platform , Image, StyleSheet} from 'react-native'
import { useNavigation } from '@react-navigation/native';
import MealDetails from './MealDetails';
  function MealItems ({id, title, imageUrl, duration, complexity, affordability }){
    const navigation = useNavigation(); 
    function selectMealItemHandler(){
        navigation.navigate('MealDetail',{
            mealId : id
        });
    } 
    
    return(
        <View style={styles.menuItem}>
            <Pressable 
              onPress={selectMealItemHandler}
              android_ripple={{ color: '#ccc' }}
              style={({pressed})  => ( pressed ? styles.buttonPressed : null)} 
            
            >
                <View style={{overflow:'hidden', borderRadius:8}}>
                <View>
                    <Image source={{uri : imageUrl}} style={styles.image}/>
                    <Text style={styles.title}>
                        {title}
                    </Text>
                </View>
                <MealDetails duration={duration} complexity={complexity} affordability={affordability}/>
                </View>
            </Pressable>
        </View>
    )
}
 export default MealItems;

 const styles = StyleSheet.create({
    menuItem:{
        margin: 16,
        borderRadius:8,
        backgroundColor:'white',
        elevation:4,
        shadowColor:'black',
        shadowOffset:{ width: 0, height: 2},
        shadowOpacity: 0.35,
        shadowRadius: 16,
        overflow: Platform.OS === 'android' ?'hidden' : 'visible'
    },
    image:{
        width: '100%',
        height: 200
    },
    title:{
        fontWeight:'bold',
        textAlign:'center',
        fontSize: 18,
        margin:8
    },
    
    buttonPressed:{
        opacity: 0.5,
    }
 })
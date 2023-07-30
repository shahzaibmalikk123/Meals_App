import CategoryGridTitle from "../components/CategoryGridTitle";
import { CATEGORIES } from "../data/dummy-data";
import { FlatList } from "react-native";
import { useState } from "react";


function CategoriesScreen({navigation}){
    const [numColumn,setNumColumns] = useState(2);
    function renderCategoryItem(itemData){
        function pressHandler(){
            navigation.navigate('MealsOverview',{
                categoryId: itemData.item.id,
            })
    
        }
        return(
            <CategoryGridTitle 
                title={itemData.item.title} 
                color={itemData.item.color} 
                onPress={pressHandler}
                
            />
        );
    }
    return(
        <FlatList data={CATEGORIES} 
                  keyExtractor={(item) => item.id } 
                  renderItem={renderCategoryItem}
                  numColumns={numColumn}
                  />
    )

}

export default CategoriesScreen;
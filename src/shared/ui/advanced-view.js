import { View } from "react-native";
import { StyleSheet } from "react-native";

export const AdvancedView =({full,fullW,fullH,children,...props})=>{

   return <View  {...props}>{children}</View>
};

const styles = StyleSheet.create({

})
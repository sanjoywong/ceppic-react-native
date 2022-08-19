import { StyleSheet, View,Text, Pressable } from "react-native";
export default function LienItem(props) {
    console.log(props.id);
    return(
        <Pressable onPress={props.onSupprimerItem.bind(this,props.id) } >
        <View style={styles.lienItem}>
              <Text style={styles.lienText}>{props.text}</Text>
            </View>
            </Pressable>
    );
};

const styles = StyleSheet.create({
    lienItem: {
        backgroundColor: "edcedc",
        marginTop: 20,
        padding: 8,
        color: "#ggg",
      },
      lienText:{
        color:"green"
      },
});

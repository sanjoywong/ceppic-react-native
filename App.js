//import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import reactDom from "react-dom";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  ImageBackground,
  Image,
  FlatList,
} from "react-native";
import LienItem from "./components/LienItem";
const image = { uri: "https://reactjs.org/logo-og.png" };
export default function App() {
  const [lienTexteSaisie, setLientexteSaisie] = useState("");
  const [listeLiens, setListeLiens] = useState([]);
  function ajoutLienHandler() {
    //console.log(lienTexteSaisie);
    setListeLiens((currentListeLines) => [
      ...listeLiens,
      { text: lienTexteSaisie, id: Math.random().toString() },
    ]);
    setLientexteSaisie("");
  }

  function lienInputHandler(textSaisie) {
    // console.log(textSaisie);
    setLientexteSaisie(textSaisie);
  }

  return (
    <View style={styles.container}>
      {/* <ImageBackground source={image} resizeMode="cover" style={styles.image}>  </ImageBackground> */}
      <Image
        style={styles.tinyLogo}
        source={{
          uri: "https://reactnative.dev/img/tiny_logo.png",
        }}
      />
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Nouveau lien ..."
          style={styles.inputLien}
          onChangeText={lienInputHandler}
          value={lienTexteSaisie}
        />
        <Button title="Ajoute un lien" onPress={ajoutLienHandler} />
      </View>
      <View style={styles.lienContainer}>
        <Text> Listed des liens ...</Text>
        <FlatList
          data={listeLiens}
          keyExtractor={(item,index)=>{return item.id}}
          // renderItem={({item})=>(<Text>{item}</Text>)}/>
          renderItem={(itemData) => {
            return(
              <LienItem text={itemData.item.text}/>
            );
          }}
        />
        {/* {listeLiens.map((lien) => (
          <Text key={lien}>{lien}</Text>
        ))} */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 50,
  },
  StyleTexte: {
    color: "red",
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
  inputLien: {
    borderColor: "grey",
    borderWidth: 1,
    padding: 8,
    width: "70%",
  },
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  lienContainer: {
    flex :3
   /*  height: 80,
    borderColor: "green",
    borderWidth: 2, */
  },
  lienItem: {
    backgroundColor: "#edcedc",
    marginTop: 20,
    padding: 8,
    color: "#ggg",
  },
});

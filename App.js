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
import LienInput from "./components/lienInput";
import LienItem from "./components/LienItem";
const image = { uri: "https://reactjs.org/logo-og.png" };
export default function App() {
  //const [lienTexteSaisie, setLientexteSaisie] = useState("");
  const [listeLiens, setListeLiens] = useState([]);

  function ajoutLienHandler(lienTexteSaisie) {
    // console.log(lienTexteSaisie);
    setListeLiens((currentListeLiens) => [
      ...listeLiens,
      { text: lienTexteSaisie, id: Math.random().toString() },
    ]);
    // setLientexteSaisie("");
  }

  function supprimerItemHandler(id) {
    setListeLiens((currentListeLiens)=>{
      return currentListeLiens.filter((lien)=>lien.id !== id);
    });
  }

  const [TexteSaisie, setTexteSaisie] = useState("");
  const [ListeTexts, setListeTexts] = useState([]);

  function ajoutTextHandler() {
    setListeTexts([...ListeTexts, TexteSaisie]);
    //console.log(ListeTexts);
    setTexteSaisie("");
  }

  function TextInputHandler(textSaisie) {
    setTexteSaisie(textSaisie);
    // console.log(TexteSaisie);
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
      <LienInput ajoutLien={ajoutLienHandler} />
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="input Nouveau text ..."
          style={styles.inputLien}
          onChangeText={TextInputHandler}
          value={TexteSaisie}
        />
        <Button title="Ajoute des texts" onPress={ajoutTextHandler} />
      </View>

      <View style={styles.lienContainer}>
        <Text> Listed des liens ...</Text>
        <FlatList
          data={listeLiens}
          keyExtractor={(item, index) => {
            return item.id;
          }}
          // renderItem={({item})=>(<Text>{item}</Text>)}/>
          renderItem={(itemData) => {
            return <LienItem text={itemData.item.text} 
            id={itemData.item.id}
            onSupprimerItem={supprimerItemHandler}/>;
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
    paddingTop: 20,
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },

  lienContainer: {
    flex: 3,
    height: 10,
    /*  height: 80,
    borderColor: "green",
    borderWidth: 2, */
    padding: 1,
  },
});

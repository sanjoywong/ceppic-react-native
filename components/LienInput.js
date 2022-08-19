import { useState } from "react";
import { StyleSheet,View, TextInput, Button } from "react-native";

export default function LienInput(props) {
  const [lienTexteSaisie, setLientexteSaisie] = useState("");


  function ajoutLienHandler() {
   // console.log(lienTexteSaisie);
    /* setListeLiens((currentListeLiens) => [
      ...listeLiens,
      { text: lienTexteSaisie, id: Math.random().toString() },
    ]);
    console.log(listeLiens); */
    props.ajoutLien(lienTexteSaisie);
    setLientexteSaisie("");
  }

  function lienInputHandler(textSaisie) {
    // console.log(textSaisie);
    setLientexteSaisie(textSaisie);
  }
  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="Nouveau lien ..."
        style={styles.inputLien}
        onChangeText={lienInputHandler}
        value={lienTexteSaisie}
      />
      <Button title="Ajoute un lien" onPress={ajoutLienHandler} />
    </View>
  );
}

const styles = StyleSheet.create({
  StyleTexte: {
    color: "red",
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
});

import React, { useState } from 'react';
import { signInWithEmailAndPassword } from "firebase/auth";
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { FIREBASE_AUTH } from '../../firebaseConfig'; // Importe o objeto FIREBASE_AUTH
import { useNavigation } from '@react-navigation/native';

function LoginScreen({ navigation }) { // Certifique-se de receber a prop de navegação
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        FIREBASE_AUTH,
        email,
        password
      );
      console.log("Usuário autenticado:", userCredential.user);

      // Navegue para a próxima tela após o login bem-sucedido
      navigation.navigate('Welcome'); // Substitua 'Welcome' pelo nome da próxima tela
    } catch (error) {
      console.error("Erro ao autenticar o usuário:", error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>E-mail:</Text>
      <TextInput
        style={styles.input}
        onChangeText={setEmail}
        value={email}
        placeholder="Seu e-mail"
      />
      <Text style={styles.label}>Senha:</Text>
      <TextInput
        style={styles.input}
        onChangeText={setPassword}
        value={password}
        placeholder="Sua senha"
        secureTextEntry
      />
      <Button title="Login" onPress={handleLogin} />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center', // Centralize verticalmente e horizontalmente
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
  },
});

export default LoginScreen;

import AsyncStorage from '@react-native-async-storage/async-storage';
import {useForm, Controller} from 'react-hook-form';
import {Button, Text, TextInput, View} from 'react-native';
import {useContext} from 'react';
import {MainContext} from '../contexts/MainContext';
import {useLogin} from '../hooks/ApiHooks';

const LoginForm = () => {
  const {isLoggedIn, setIsLoggedIn} = useContext(MainContext);
  const {postLogin} = useLogin();
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    defaultValues: {username: '', password: ''},
  });

  const logIn = async (loginCredentials) => {
    try {
      console.log('Button pressed', isLoggedIn);
      const userData = await postLogin(loginCredentials);
      await AsyncStorage.setItem('userToken', userData.token);
      setIsLoggedIn(true);
    } catch (error) {
      console.error('Login - logIn', error);
    }
  };

  return (
    <View>
      <Text>Login Form</Text>
      <Controller
        control={control}
        rules={{
          required: true,
          minLength: 3,
        }}
        render={({field: {onChange, onBlur, value}}) => (
          <TextInput
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            placeholder="Username"
          />
        )}
        name="username"
      />
      {errors.username?.type === 'required' && <Text>This is required.</Text>}
      {errors.username?.type === 'minLength' && <Text>Min 3 characters.</Text>}

      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({field: {onChange, onBlur, value}}) => (
          <TextInput
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            secureTextEntry={true}
            placeholder="Password"
          />
        )}
        name="password"
      />
      {errors.password && <Text>This is required.</Text>}
      <Button title="Sign in!" onPress={handleSubmit((data) => logIn(data))} />
    </View>
  );
};

export default LoginForm;

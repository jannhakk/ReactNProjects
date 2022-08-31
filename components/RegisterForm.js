import {useForm, Controller} from 'react-hook-form';
import {Button, Text, TextInput, View} from 'react-native';
import {useContext} from 'react';
import {MainContext} from '../contexts/MainContext';
import {useUser} from '../hooks/ApiHooks';

const RegisterForm = () => {
  const {isLoggedIn, setIsLoggedIn} = useContext(MainContext);
  const {postUser} = useUser();
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    defaultValues: {username: '', email: '', password: '', full_name: ''},
  });

  const register = async (userData) => {
    console.log('register userData', userData);
    try {
      const result = await postUser(userData);
      console.log('registration result', result);
      // TODO: AUTOLOGIN (postLogin -> save token -> setLogged in)
    } catch (error) {
      console.error('RegisterForm  error', error);
    }
  };

  return (
    <View>
      <Text>Registeration Form</Text>
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
            placeholder="Email"
          />
        )}
        name="email"
      />
      {errors.email && <Text>This is required.</Text>}

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
            secureTextEntry={true}
            placeholder="Password"
          />
        )}
        name="password"
      />
      {errors.password && <Text>This is required.</Text>}

      <Controller
        control={control}
        rules={{
          required: false,
          minLength: 3,
        }}
        render={({field: {onChange, onBlur, value}}) => (
          <TextInput
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            secureTextEntry={true}
            placeholder="Full name"
          />
        )}
        name="full_name"
      />
      <Button title="Register" onPress={handleSubmit(register)} />
    </View>
  );
};

export default RegisterForm;

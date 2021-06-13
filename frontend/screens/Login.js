import React from 'react'
import {StyleSheet, View, Text, Pressable} from 'react-native';
import {RedButton} from "../components/RedButton";
import * as Yup from "yup";
import {Formik} from 'formik';
import {TextInput} from "react-native-gesture-handler";
import {TouchableOpacity} from "react-native-web";

const initialValuesLogin = {
    email: '',
    password: '',
}

const loginSchema = Yup.object().shape({
    email: Yup.string().email('Adresse mail invalide').required('Champs requis'),
    password: Yup.string().min(8, 'Le mot de passe doit contenir au moins 8 caractères').matches(/^((?=.*[a-z])(?=.*[A-Z])(?=.*\d))[a-zA-Z0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]*$/, 'Le mot de passe doit contenir au moins 8 caractères, une minuscule et une majuscule').required('Champ requis')
});


class Login extends React.Component {


    render() {
        return (
            <View style={styles.container}>
                <Text style={{fontSize: 35}}>
                    Se connecter
                </Text>
                <Text style={{fontSize: 12, marginTop: 20}}>
                    Entrez vos informations
                </Text>
                <Formik
                    initialValues={initialValuesLogin}
                    validationSchema={loginSchema}
                    onSubmit={values => console.log(values)}
                >
                    {({values, handleChange, errors, setFieldTouched, touched, isValid, handleSubmit}) => (
                        <View style={styles.subcontainer}>
                            <TextInput
                                style={styles.textInput}
                                value={values.email}
                                onChangeText={handleChange('email')}
                                onBlur={() => setFieldTouched('email')}
                                placeholder="Email"
                            />
                            {touched.email && errors.email &&
                            <Text style={{fontSize: 12, color: '#FF0D10', marginTop: 10}}>{errors.email}</Text>
                            }
                            <TextInput
                                style={styles.textInput}
                                value={values.password}
                                onChangeText={handleChange('password')}
                                onBlur={() => setFieldTouched('password')}
                                secureTextEntry={true}
                                placeholder="Password"
                            />
                            {touched.description && errors.description &&
                            <Text style={{fontSize: 12, color: '#FF0D10'}}>{errors.password}</Text>
                            }
                            <RedButton
                                buttonText="Se Connecter"
                                buttonStyle={{marginTop: 50}}
                                onPress={handleSubmit}
                            />
                        </View>

                    )}
                </Formik>
                    <Text style={{fontSize: 12, marginTop: 50, color:'#7C7D7E'}} onPress={() =>console.log('okok')}>
                        Mot de passe oublié ?
                    </Text>

                <Text style={{fontSize: 12, bottom: 50, position: 'absolute'}}>
                    Vous n'avez pas de compte ? <Text style={{fontSize: 12, marginTop: 50, color:'#BD0404'}} onPress={() =>console.log('okok')}>Inscrivez-vous</Text>
                </Text>
            </View>
        )
    }

}


const styles = StyleSheet.create({
    text: {
        marginTop: 50,
        textAlign: 'center'
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    subcontainer: {
        width: '100%',
        alignItems: 'center'
    },
    button: {
        marginTop: 50,
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#bd0101'
    },
    textInput: {
        height: 50,
        borderRadius: 30,
        width: '80%',
        backgroundColor: '#F2F2F2',
        marginTop: 50,
        paddingLeft: 20
    }
})


export default Login
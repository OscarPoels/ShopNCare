import React from 'react'
import {StyleSheet, View, Text, Pressable} from 'react-native';
import {RedButton} from "../components/RedButton";
import * as Yup from "yup";
import {Formik} from 'formik';
import {TextInput} from "react-native-gesture-handler";

const initialValuesSignUp = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    telephone: '',
    address: ''
}

const signUpSchema = Yup.object().shape({
    email: Yup.string().email('Adresse mail invalide').required('Champs requis'),
    name: Yup.string().required('Champs requis'),
    password: Yup.string().min(8, 'Le mot de passe doit contenir au moins 8 caractères').matches(/^((?=.*[a-z])(?=.*[A-Z])(?=.*\d))[a-zA-Z0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]*$/, 'Le mot de passe doit contenir au moins 8 caractères, une minuscule et une majuscule'),
    confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Les mots de passe doivent correspondre').required('Champ requis'),
    telephone: Yup.string().required('Champ requis')

});


class SignUp extends React.Component {


    render() {
        return (
            <View style={styles.container}>
                <Text style={{fontSize: 35}}>
                    Inscription
                </Text>
                <Text style={{fontSize: 12, marginTop: 20}}>
                    Entrez vos informations
                </Text>
                <Formik
                    initialValues={initialValuesSignUp}
                    validationSchema={signUpSchema}
                    onSubmit={values => console.log(values)}
                >
                    {({values, handleChange, errors, setFieldTouched, touched, isValid, handleSubmit}) => (
                        <View style={styles.subcontainer}>
                            <TextInput
                                style={styles.textInput}
                                value={values.name}
                                onChangeText={handleChange('name')}
                                onBlur={() => setFieldTouched('name')}
                                placeholder="Name"
                            />
                            {touched.name && errors.name &&
                            <Text style={{fontSize: 12, color: '#FF0D10', marginTop: 10}}>{errors.name}</Text>
                            }
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
                                value={values.telephone}
                                onChangeText={handleChange('telephone')}
                                onBlur={() => setFieldTouched('telephone')}
                                placeholder="Téléphone"
                            />
                            {touched.telephone && errors.telephone &&
                            <Text style={{fontSize: 12, color: '#FF0D10', marginTop: 10}}>{errors.telephone}</Text>
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
                            <TextInput
                                style={styles.textInput}
                                value={values.confirmPassword}
                                onChangeText={handleChange('confirmPassword')}
                                onBlur={() => setFieldTouched('confirmPassword')}
                                secureTextEntry={true}
                                placeholder="Confirmer le mot de passe"
                            />
                            {touched.description && errors.description &&
                            <Text style={{fontSize: 12, color: '#FF0D10'}}>{errors.password}</Text>
                            }
                            <RedButton
                                buttonText="S'inscrire"
                                buttonStyle={{marginTop: 50}}
                                onPress={handleSubmit}
                            />
                        </View>

                    )}
                </Formik>

                <Text style={{fontSize: 12, bottom: 50, position: 'absolute'}}>
                    Vous avez déjà un compte ? <Text style={{fontSize: 12, marginTop: 50, color:'#BD0404'}} onPress={() =>console.log('okok')}>Connectez-vous</Text>
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


export default SignUp
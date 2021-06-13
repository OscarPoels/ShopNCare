import React from 'react'
import {StyleSheet, View, Text, Pressable} from 'react-native';
import {RedButton} from "../components/RedButton";
import * as Yup from "yup";
import {Formik} from 'formik';
import {TextInput} from "react-native-gesture-handler";
import {TouchableOpacity} from "react-native-web";

const initialValuesResetPasswordEmail = {
    email: ''
}

const resetPasswordEmailSchema = Yup.object().shape({
    email: Yup.string().email('Adresse mail invalide').required('Champs requis')
});


class ResetPasswordEmail extends React.Component {


    render() {
        return (
            <View style={styles.container}>
                <Text style={{fontSize: 35, textAlign: 'center', width: '80%'}}>
                    Réinistialiser votre mot de passe
                </Text>
                <Text style={{fontSize: 12, marginTop: 20, textAlign: 'center',width: '80%'}}>
                    Entrez votre adresse mail afin de recevoir un mail de réinisialisation
                </Text>
                <Formik
                    initialValues={initialValuesResetPasswordEmail}
                    validationSchema={resetPasswordEmailSchema}
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
                            <RedButton
                                buttonText="Envoyer"
                                buttonStyle={{marginTop: 50}}
                                onPress={handleSubmit}
                            />
                        </View>

                    )}
                </Formik>
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


export default ResetPasswordEmail
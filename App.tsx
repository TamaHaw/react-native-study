import React, { useState } from 'react'
import { Text, StyleSheet, View, SafeAreaView, ScrollView, TouchableOpacity, TextInput, Alert } from 'react-native'
import BouncyCheckbox from 'react-native-bouncy-checkbox'
import  * as Yup from 'yup'
import { Formik } from 'formik'

const PasswordSchema = Yup.object().shape({
  passwordLength: Yup.number()
  .min(4, 'Should be min of 4 characters')
  .max(16, 'Should be max of 16 characters')
  .typeError('Must be a number')
  .required('Lengths is required'),
})

const App = () => {
  const [password, setPassword] = useState('')
  const [isPassGenerated, setIsPassGenerated] = useState(false)

  const [lowerCase, setLowerCase] = useState(true)
  const [upperCase, setUpperCase] = useState(true)
  const [numbers, setNumbers] = useState(true)
  const [specialChar, setSpecialChar] = useState(true)

  const generatePasswordString = (passWordLength: number) => {
    let characterList = '';
    const upperCaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowerCaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const numberChars = '0123456789';
    const specialChars = '!@#$%^&*()_+';

    if (upperCase) {
      characterList += upperCaseChars;
    }
    if (lowerCase) {
      characterList += lowerCaseChars;
    }
    if (numbers) {
      characterList += numberChars;
    }
    if (specialChar) {
      characterList += specialChars;
    }

    const passwordResult = createPassword(characterList, passWordLength)
    setPassword(passwordResult)
    setIsPassGenerated(true)
  }

  const createPassword = (characters: string, passWordLength: number) => {
    let result = ''
    for (let i = 0; i < passWordLength; i++) {
      const characterIndex = Math.round(Math.random() * characters.length)
      result += characters.charAt(characterIndex)
    }
    return result
  }

  const resetPasswordState = () => {
    setPassword('')
    setIsPassGenerated(false)
    setUpperCase(false)
    setLowerCase(true)
    setNumbers(false)
    setSpecialChar(false)
  }

  return (
    <ScrollView keyboardShouldPersistTaps='handled'>
      <SafeAreaView style={styles.appContainer}>
        <View style={styles.container}>
          <Text style={styles.title}>Password Generator</Text>
          <Formik
            initialValues={{ passwordLength: '' }}
            validationSchema={PasswordSchema}
            onSubmit={ values => {
              console.log(values.passwordLength)
              if (!(lowerCase || upperCase || numbers || specialChar)) {
                Alert.alert('Validation Error', 'At least one character type must be selected');
                return;
              }              
              generatePasswordString(Number(values.passwordLength))
              // generatePasswordString(+values.passwordLength) ---- it will also work
            }}
          >
            {({
              values,
              errors,
              touched,
              isValid,
              handleChange,
              handleSubmit,
              handleReset,
              /* and other goodies */
            }) => (
              <>
              <View style={styles.inputWrapper}>
                <View style={styles.inputColumn}>
                  <Text style={styles.heading}>Password Length</Text>
                  {touched.passwordLength && errors.passwordLength && (
                    <Text style={styles.errorText}>
                      {errors.passwordLength}
                    </Text>
                  )}
                </View>
                  <TextInput
                  style={styles.inputStyle}
                  value={values.passwordLength}
                  onChangeText={handleChange('passwordLength')}
                  placeholder='Ex: 8'
                  keyboardType='numeric'
                  />
              </View>
              <View style={styles.inputWrapper}>                
                <Text style={styles.heading}>Include lowercase</Text>
                <View>
                  <BouncyCheckbox
                  useBuiltInState
                  isChecked={lowerCase}
                  onPress={() => setLowerCase(!lowerCase)}
                  fillColor='#29AB87'
                  />
                </View>
              </View>
              <View style={styles.inputWrapper}>
                <Text style={styles.heading}>Include uppercase</Text>
                <View>
                  <BouncyCheckbox
                  useBuiltInState
                  isChecked={upperCase}
                  onPress={() => setUpperCase(!upperCase)}
                  fillColor='#29AB87'
                  />
                </View>
              </View>
              <View style={styles.inputWrapper}>
                <Text style={styles.heading}>Include numbers</Text>
                <View>
                  <BouncyCheckbox
                  useBuiltInState
                  isChecked={numbers}
                  onPress={() => setNumbers(!numbers)}
                  fillColor='#29AB87'
                  />
                </View>
              </View>
              <View style={styles.inputWrapper}>
                <Text style={styles.heading}>Include special characters</Text>
                <View>
                  <BouncyCheckbox
                  useBuiltInState
                  isChecked={specialChar}
                  onPress={() => setSpecialChar(!specialChar)}
                  fillColor='#29AB87'
                  />
                </View>
              </View>

              <View style={styles.formActions}>
                <TouchableOpacity                
                onPress={() => {
                  handleSubmit();
                }}
                style={styles.primaryButton}                
                >
                  <Text style={styles.primaryButtonText}>
                    Generate Password
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                disabled={!isPassGenerated}
                onPress={() => {
                  handleReset();
                  resetPasswordState();
                }}
                style={styles.secondaryButton}
                >
                  <Text style={styles.secondaryButtonText}>
                    Reset
                  </Text>
                </TouchableOpacity>
              </View>
              </>
            )}
          </Formik>
        </View>
        {isPassGenerated ? (
          <View style={[styles.card, styles.cardElevated]}>
            <Text style={styles.subTitle}>Result:</Text>
            <Text selectable={true} style={styles.generatedPassword}>{password}</Text>
            <Text style={styles.description}>Long Press in the generated password to copy</Text>
          </View>
        ) : null}
      </SafeAreaView>
    </ScrollView>
  )
}

export default App

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    marginHorizontal: 20,
    marginVertical: 20
  },
  container: {},
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 12
  },
  formActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20
  },
  inputColumn: {
    flexDirection: 'column'
  },
  inputStyle: {
    padding: 10,
    borderColor: '#29AB87',
    borderWidth: 1,
    borderRadius: 5,
    width: '15%',
    textAlign: 'center'
  },
  heading: {
    fontSize: 16
  },
  errorText: {
    fontSize: 12,
    color: 'red'
  },
  primaryButton: {
    backgroundColor: '#29AB87',
    padding: 10,
    borderRadius: 5,
    width: '48%',
    alignItems: 'center'
  },
  primaryButtonText: {
    color: '#fff',
    fontSize: 16
  },
  secondaryButton: {
    backgroundColor: '#F0F0F0',
    padding: 10,
    borderRadius: 5,
    width: '48%',
    alignItems: 'center'
  },
  secondaryButtonText: {
    color: '#29AB87',
    fontSize: 16
  },
  card: {
    padding: 20,
    marginVertical: 20,
    borderRadius: 5
  },
  cardElevated: {
    shadowColor: '#29AB87',
    shadowOffset: {
      width: 1,
      height: 1
    },
    shadowOpacity: 0.9,
    shadowRadius: 5,
    elevation: 1
  },
  subTitle: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  description: {
    fontSize: 12,
    color: '#29AB87',
    textAlign: 'center',
    marginTop: 28
  },
  generatedPassword: {
    fontSize: 16,
    marginVertical: 8
  }
})

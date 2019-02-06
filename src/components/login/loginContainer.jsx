import React, {Component} from 'react';
import {connect} from "react-redux";
import Login from "./login";
import {
    currentLoginCreator,
    currentPasswordCreator,
    currentResetCheckboxCreator, currentResetLoginCreator, currentResetPasswordCreator,

} from "../../redux/loginPageReducer";
import {loginThunk} from "../../redux/authReducer";


const mapStateToProps = (state) => {

    return {
        currentLogin: state.loginPage.currentLogin,
        currentPassword: state.loginPage.currentPassword,
        isLoggedIn: state.authPage.isLoggedIn
        // Remember:

    }
}

const mapDispatchToProps = (dispatch) => {

    return {
        onButtonClickLogin:
            () => {
                dispatch(currentResetLoginCreator())
            },
        onButtonClickLogin:
            () => {
                dispatch(currentResetPasswordCreator())
            },
        onLoginChange:
            (event) => {
                let action = currentLoginCreator(event.currentTarget.value)
                dispatch(action)
            },//currentTarget-эвен событие в котором сидит текст ареа
        onPasswordChange:
            (event) => {
                let action = currentPasswordCreator(event.currentTarget.value)
                dispatch(action)//currentTarget-эвен событие в котором сидит текст ареа
            },
        rememberUser:
            (e) => {
                let action = currentResetCheckboxCreator(e.currentTarget.value);
                dispatch(action)
            },
        authUser:
            ()=>{
            dispatch(loginThunk())
            }
    }
}

// const mapStateToProps = (state) => {
//
//     return {
//         loginPage: state.loginPage
//     }
// }
//
// const MapDispatchToProps = (dispatch) => {
//     return {
//         onLoginChange: (login) => {
//             dispatch({
//                 type: loginOnChange,
//                 login: login
//             })
//         },
//         onPasswordChange: (password) => {
//             dispatch({
//                 type: passwordOnChange,
//                 password: password
//             })
//         },
//         onSubmitButtonClick: (click) => {
//             dispatch({
//                 type: onSubmitClick
//
//             })
//         }
//
//
//     }
// }
//



export default connect(mapStateToProps, mapDispatchToProps)(Login);


import React, {Component} from 'react';
import style from './login.module.css';
import {Link, Redirect} from "react-router-dom";
import WOW from 'wowjs';
import {connect} from "react-redux";
import {loginOnChange, onSubmitClick, passwordOnChange} from "../../redux/loginPageReducer";




class Login extends Component {



    componentDidMount() {
        new WOW.WOW().init();
    }



    render() {
debugger
        if (this.props.isLoggedIn) {
            return <Redirect to='/content/dialogs/2'/>
        }

        // let login = this.props.loginPage.currentLogin;
        // let password = this.props.loginPage.currentPassword;

        return (

            <div className={`${style.login_page} ${"wow bounceInDown"}`} data-wow-duration="3s">


                <form className={style.login_form} >
                    <div className={style.login_reg}>
                        <a href="#">Login</a>
                        <a href="#">Registration</a>
                    </div>
                    <div className={style.input_area}>
                        < label htmlFor=""> Email</label>
                        <input
                            type="email"
                            value={this.props.currentLogin}
                            onChange={(e) => {
                                this.props.onLoginChange(e)
                            }}/>
                        <label htmlFor="">Password</label>
                        <input
                            type="password" value={this.props.currentPassword}
                            onChange={(e) => {
                                this.props.onPasswordChange(e)
                            }}/>
                    </div>
                    <div className={style.checkbox}>
                        <label htmlFor=""><input
                            type="checkbox"
                            value={this.props.rememberMe}
                            onchange={(c) => {
                                this.props.rememberUser(c)
                            }
                            }
                        />remember me</label>
                        {/*  <Link to="/content/profile"><input className={style.inputLogin}  type="submit"
                                                           value="Login"/></Link>*/}
                        <button
                            onClick={this.props.authUser}
                            className={style.inputLogin}
                            type="submit">
                            login
                        </button>
                    </div>

                </form>
            </div>
        )
    }
}


export default Login;

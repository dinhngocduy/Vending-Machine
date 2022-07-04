/* 
    Created by thaolt
*/

import { LoginContainer } from 'features/login/view/login.screen';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

const mapStateToProps = (state: any) => ({});

const mapDispatchToProps = (dispatch: Dispatch) => ({});

export const LoginScreen = connect(mapStateToProps, mapDispatchToProps)(LoginContainer);

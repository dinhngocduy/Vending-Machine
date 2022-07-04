import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { AccountContainer } from './view/account.sceen';

const mapStateToProps = (state: any) => ({});

const mapDispatchToProps = (dispatch: Dispatch) => ({});

export const AccountScreen = connect(mapStateToProps, mapDispatchToProps)(AccountContainer);

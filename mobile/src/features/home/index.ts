import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { HomeContainer } from './view/home.screen';

const mapStateToProps = (state: any) => ({});
const mapDispatchToProps = (dispatch: Dispatch) => ({});

export const HomeScreen = connect(mapStateToProps, mapDispatchToProps)(HomeContainer);

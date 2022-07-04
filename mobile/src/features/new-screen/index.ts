import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { NewScreenContainer } from './view/new-screen.screen';

const mapStateToProps = (state: any) => ({});

const mapDispatchToProps = (dispatch: Dispatch) => ({});

export const NewScreen = connect(mapStateToProps, mapDispatchToProps)(NewScreenContainer);

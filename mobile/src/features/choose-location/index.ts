import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { ChooseLocationContainer } from './view/choose-location.screen';
const mapStateToProps = (state: any) => ({});
const mapDispatchToProps = (dispatch: Dispatch) => ({});

export const ChooseLocationScreen = connect(
  mapStateToProps,
  mapDispatchToProps
)(ChooseLocationContainer);

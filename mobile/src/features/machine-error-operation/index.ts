import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { MachineErrorOperationContainer } from './view/machine-error-operation.screen';
const mapStateToProps = (state: any) => ({});
const mapDispatchToProps = (dispatch: Dispatch) => ({});

export const MachineErrorOperationScreen = connect(
  mapStateToProps,
  mapDispatchToProps
)(MachineErrorOperationContainer);

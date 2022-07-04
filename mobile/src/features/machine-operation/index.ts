import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { MachineOperationContainer } from './view/machine-operation.sceen';
const mapStateToProps = (state: any) => ({});
const mapDispatchToProps = (dispatch: Dispatch) => ({});

export const MachineOperationScreen = connect(
  mapStateToProps,
  mapDispatchToProps
)(MachineOperationContainer);

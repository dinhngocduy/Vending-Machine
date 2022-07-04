import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { MachineDetailContainer } from './view/machine-detail.screen';
const mapStateToProps = (state: any) => ({});
const mapDispatchToProps = (dispatch: Dispatch) => ({});

export const MachineDetailScreen = connect(
  mapStateToProps,
  mapDispatchToProps
)(MachineDetailContainer);

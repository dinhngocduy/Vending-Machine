import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { HistoryContainer } from './view/history.screen';

const mapStateToProps = (state: any) => ({});
const mapDispatchToProps = (dispatch: Dispatch) => ({});
export const HistoryScreen = connect(mapStateToProps, mapDispatchToProps)(HistoryContainer);

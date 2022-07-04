import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { HistoryDetailContainer } from './view/history-detail.screen';

const mapStateToProps = (state: any) => ({});
const mapDispatchToProps = (dispatch: Dispatch) => ({});

export const HistoryDetailScreen = connect(
  mapStateToProps,
  mapDispatchToProps
)(HistoryDetailContainer);

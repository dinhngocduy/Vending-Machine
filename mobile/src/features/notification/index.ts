import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { NotificationContianer } from './view/notifications.screen';

const mapStateToProps = (state: any) => ({});
const mapDispatchToProps = (dispatch: Dispatch) => ({});
export const NotificationScreen = connect(
  mapStateToProps,
  mapDispatchToProps
)(NotificationContianer);

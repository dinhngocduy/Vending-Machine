import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { TaskDetailContainer } from './view/task-detail.screen';
const mapStateToProps = (state: any) => ({});
const mapDispatchToProps = (dispatch: Dispatch) => ({});

export const TaskDetailScreen = connect(mapStateToProps, mapDispatchToProps)(TaskDetailContainer);

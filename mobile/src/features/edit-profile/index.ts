import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { EditProfileContainer } from './view/edit-profile.screen';

const mapStateToProps = (state: any) => ({});
const mapDispatchToProps = (dispatch: Dispatch) => ({});

export const EditProfileScreen = connect(mapStateToProps, mapDispatchToProps)(EditProfileContainer);

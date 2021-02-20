import { getUsersRequest } from '../../controllers/transport';

import {
  GET_USERS_STARTING,
  GET_USERS_SUCCESS,
  GET_USERS_ERROR,
  DELETE_USER,
  OPEN_DETAILS_MODAL,
  CLOSE_DETAILS_MODAL,
  SET_SELECTED_USER,
  SET_SEARCH_STRING,
  getUsersDispathInterface,
  getUsersActionSuccess,
  getUsersActionError,
  UserInterface,
  setSearchStringAction,
  setSelectedUserAction,
  closeDetailsModalAction,
  openDetailsModalAction,
  deleteUsersAction
} from './types';

export const getUsers = () => async (dispatch: getUsersDispathInterface): Promise<(getUsersActionSuccess | getUsersActionError | void)> => {
  try{
	dispatch({ type: GET_USERS_STARTING });
	const users: UserInterface[] = await getUsersRequest();
	dispatch({
	  type: GET_USERS_SUCCESS,
	  payload: { users }
	});
  } catch (error) {
	dispatch({
	  type: GET_USERS_ERROR,
	  payload: error,
	});
  }
};

export const deleteUser = (id: number): deleteUsersAction => ({
  type: DELETE_USER,
  payload: { id },
});

export const openDetailsModal = (): openDetailsModalAction => ({
  type: OPEN_DETAILS_MODAL,
});

export const closeDetailsModal = (): closeDetailsModalAction => ({
  type: CLOSE_DETAILS_MODAL,
});

export const setSelectedUser = (id: number): setSelectedUserAction => ({
  type: SET_SELECTED_USER,
  payload: { id },
});

export const setSearchString = (searchString: string): setSearchStringAction => ({
  type: SET_SEARCH_STRING,
  payload: { searchString },
});

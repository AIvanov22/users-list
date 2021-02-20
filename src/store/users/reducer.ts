import { UserStateInterface, UsersActionTypes } from './types';

const initialState: UserStateInterface = {
  list: [],
  loading: true,
  selectedUserData: {
    address: null,
	company: null,
  },
  detailsModalOpen: false,
  searchString: '',
};

export const users = (state = initialState, action: UsersActionTypes): UserStateInterface => {
  switch (action.type) {
	case 'GET_USERS_STARTING': {
	  return { ...state, loading: true };
	}
	case 'GET_USERS_SUCCESS': {
	  const { users: list } = action.payload;
	  return {...state, loading: false, list};
	}
	case 'GET_USERS_ERROR': {
	  return { ...state, loading: false, error: action.payload.error };
	}
	case 'DELETE_USER': {
	  const { id } = action.payload;
	  const list =  state.list.filter(( { id: itemId }) => (itemId !== id))
	  return { ...state, list };
	}
	case 'SET_SELECTED_USER': {
	  const { id } = action.payload;
	  const user = state.list.find(( { id: itemId }) => (itemId === id));
	  if (user) {
	    const { company, address } = user;
		return { ...state, selectedUserData: { address, company } };
	  }
	  return { ...state };
	}
	case 'OPEN_DETAILS_MODAL': {
	  return { ...state, detailsModalOpen: true };
	}
	case 'CLOSE_DETAILS_MODAL': {
	  return { ...state, detailsModalOpen: false };
	}
	case 'SET_SEARCH_STRING': {
	  const { searchString } = action.payload;
	  return { ...state, searchString };
	}
	default:
	  return state;
  }
};

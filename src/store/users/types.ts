export interface CompanyInterface {
  name: string;
  catchPhrase: string;
  bs: string;
}

export interface GeoObject {
  lat: number;
  lng: number;
}

export interface AddressInterface {
  street: string;
  suite: string;
  city: string;
  zipcode: number;
  geo: GeoObject;
}

export interface UserInterface {
  id: number;
  name: string;
  username: string;
  email: string;
  company: CompanyInterface;
  address: AddressInterface;
}

export interface UserStateInterface {
  list: UserInterface[];
  loading: boolean;
  error?: any;
  selectedUserData: {
    address: AddressInterface | null;
    company: CompanyInterface | null;
  };
  detailsModalOpen: boolean;
  searchString: string;
}

export const GET_USERS_STARTING = 'GET_USERS_STARTING';
export const GET_USERS_SUCCESS = 'GET_USERS_SUCCESS';
export const GET_USERS_ERROR = 'GET_USERS_ERROR';

export interface getUsersActionStarting {
  type: typeof GET_USERS_STARTING;
}

export interface getUsersActionSuccess {
  type: typeof GET_USERS_SUCCESS;
  payload: {
    users: UserInterface[];
  };
}

export interface getUsersActionError {
  type: typeof GET_USERS_ERROR;
  payload: {
    error: any
  };
}

export type getUsersDispathInterface = (arg: (getUsersActionSuccess | getUsersActionError | getUsersActionStarting)) => (getUsersActionSuccess | getUsersActionError | getUsersActionStarting)

export const DELETE_USER = 'DELETE_USER';

export interface deleteUsersAction {
  type: typeof DELETE_USER;
  payload: {
    id: number;
  };
}

export const OPEN_DETAILS_MODAL = 'OPEN_DETAILS_MODAL';
export const CLOSE_DETAILS_MODAL = 'CLOSE_DETAILS_MODAL';

export interface openDetailsModalAction {
  type: typeof OPEN_DETAILS_MODAL;
}

export interface closeDetailsModalAction {
  type: typeof CLOSE_DETAILS_MODAL;
}

export const SET_SELECTED_USER = 'SET_SELECTED_USER';

export interface setSelectedUserAction {
  type: typeof SET_SELECTED_USER;
  payload: {
    id: number;
  };
}

export const SET_SEARCH_STRING = 'SET_SEARCH_STRING';

export interface setSearchStringAction {
  type: typeof SET_SEARCH_STRING;
  payload: {
    searchString: string;
  };
}

export type UsersActionTypes =
  getUsersActionStarting |
  getUsersActionSuccess |
  getUsersActionError |
  deleteUsersAction |
  openDetailsModalAction |
  closeDetailsModalAction |
  setSelectedUserAction |
  setSearchStringAction;

export interface RootSelectorInterface {
  users: UserStateInterface;
}


import { createSelectorCreator, defaultMemoize } from 'reselect';
import { UserStateInterface, RootSelectorInterface, UserInterface } from '../../store/users/types';

const selectorCreator = createSelectorCreator(defaultMemoize);

const list = ({ users }: RootSelectorInterface): UserStateInterface['list'] => (users.list);
const searchString = ({ users }: RootSelectorInterface): UserStateInterface['searchString'] => (users.searchString);

export const usersSelector = selectorCreator(
  [list, searchString],
  (usersList, searchString): UserInterface[] => {
    if (searchString && searchString.length > 0) {
      const initialArray: UserInterface[] = [];
      const checkString = (value: string): number => (value.toLowerCase().indexOf(searchString.toLowerCase()));

      return usersList.reduce((acc, user): UserInterface[] => {
        const { name, username, email } = user;
        const checkName = checkString(name);
        const checkUsername = checkString(username);
        const checkEmail = checkString(email);
        if (checkName !== -1 || checkUsername !== -1 || checkEmail !== -1) {
          acc.push(user);
          return acc;
        }
        return acc;
      }, initialArray);
    }
    return usersList;
  }
);

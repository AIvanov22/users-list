import React, { FC, ReactElement, useCallback, useEffect } from 'react';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import { CircularProgress } from '@material-ui/core';
import { getUsers } from '../../store/users/actions';
import { UserCard, Header, DetailsModal } from '../../components';
import { usersSelector } from './selector';
import { UserStateInterface, RootSelectorInterface } from '../../store/users/types';
import { HomeContainer, StyledPaper, UsersList } from './styled';

export const Home: FC = () => {
  const dispatch = useDispatch();
  const { loading } = useSelector(({ users }: RootSelectorInterface): UserStateInterface => users, shallowEqual);
  const usersList = useSelector(usersSelector);

  const getData = useCallback((): void => {
    dispatch(getUsers());
  }, [dispatch]);

  useEffect((): void => {
    getData();
  }, [getData]);

  const onResetClick = useCallback((): void => {
    getData();
  }, [getData]);

  const createUsersList = useCallback((): ReactElement | null => {
    if(usersList && usersList.length > 0){
      return (
        <UsersList>
          {
            usersList.map(({ name, username, email, id }: any) => {
              return <UserCard
                key={id}
                id={id}
                name={name}
                username={username}
                email={email}
              />
            })
          }
        </UsersList>
      )
    }
    return null;
  }, [usersList]);

  return (
    <HomeContainer>
      <StyledPaper elevation={3}>
        <Header onResetClick={onResetClick} />
        {
          loading ? (<CircularProgress />) : (createUsersList())
        }
      </StyledPaper>
      <DetailsModal />
    </HomeContainer>
  );
};

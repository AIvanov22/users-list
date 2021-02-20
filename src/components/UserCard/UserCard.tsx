import React, { FC, useMemo, useCallback, MouseEvent } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import Highlighter from 'react-highlight-words';
import { CardHeader, Avatar, IconButton } from '@material-ui/core';
import { Close as CloseIcon } from '@material-ui/icons';
import { deleteUser, openDetailsModal, setSelectedUser } from '../../store/users/actions';
import { UserStateInterface, RootSelectorInterface } from '../../store/users/types';
import { UserCardContainer, StyledCardContent, TextRow } from './styled';

interface InterfaceUserCard {
  id: number;
  name: string;
  username: string;
  email: string;
}

export const UserCard: FC<InterfaceUserCard> = ({ id, name, username, email }: InterfaceUserCard) => {
  const dispatch = useDispatch();
  const { searchString } = useSelector(({ users }: RootSelectorInterface): UserStateInterface => users, shallowEqual);

  const onUserCardClick = useCallback(async (): Promise<void> => {
	await dispatch(setSelectedUser(id));
	dispatch(openDetailsModal());
  }, [dispatch, id]);

  const onUserDelete = useCallback((e: MouseEvent): void => {
    e.stopPropagation();
	dispatch(deleteUser(id));
  }, [dispatch, id]);

  const avatarLetter = useMemo((): string => {
	return name.substr(0, 1).toUpperCase();
  }, [name]);

  return (
	<UserCardContainer raised onClick={onUserCardClick}>
	  <CardHeader
		avatar={
		  <Avatar aria-label="recipe">
			{avatarLetter}
		  </Avatar>
		}
		action={
		  <IconButton aria-label="Delete" onClick={onUserDelete}>
			<CloseIcon />
		  </IconButton>
		}
	  />
	  <StyledCardContent>
		<TextRow>
		  <strong>Name:</strong>
		  <Highlighter
			searchWords={[searchString]}
			autoEscape={true}
			textToHighlight={name}
		  />
		</TextRow>
		<TextRow>
		  <strong>Username:</strong>
		  <Highlighter
			searchWords={[searchString]}
			autoEscape={true}
			textToHighlight={username}
		  />
		</TextRow>
		<TextRow>
		  <strong>E-mail:</strong>
		  <Highlighter
			searchWords={[searchString]}
			autoEscape={true}
			textToHighlight={email}
		  />
		</TextRow>
	  </StyledCardContent>
	</UserCardContainer>
  );
};

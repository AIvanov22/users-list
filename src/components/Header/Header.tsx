import React, { FC, useCallback, ChangeEvent } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { InputAdornment, Button } from '@material-ui/core';
import { AccountCircle } from '@material-ui/icons';
import { setSearchString } from '../../store/users/actions';
import { UserStateInterface, RootSelectorInterface } from '../../store/users/types';
import { HeaderContainer, StyledTextField } from './styled';

interface InterfaceHeader {
  onResetClick: () => void;
}

export const Header: FC<InterfaceHeader> = ({ onResetClick }: InterfaceHeader) => {
  const dispatch = useDispatch();
  const { searchString } = useSelector(({ users }: RootSelectorInterface): UserStateInterface => users, shallowEqual);

  const onSearchChange = useCallback(({ target: { value }}: ChangeEvent<HTMLInputElement>): void => {
	dispatch(setSearchString(value))
  }, [dispatch]);

  const onResetButtonClick = useCallback((): void => {
	dispatch(setSearchString(''));
	onResetClick();
  }, [dispatch, onResetClick])

  return (
	<HeaderContainer>
		<StyledTextField
		  label="Search"
		  value={searchString}
		  onChange={onSearchChange}
		  InputProps={{
			startAdornment: (
			  <InputAdornment position="start">
				<AccountCircle />
			  </InputAdornment>
			),
		  }}
		/>
	  <Button
		variant="contained"
		color="primary"
		onClick={onResetButtonClick}
	  >
		Reset
	  </Button>
	</HeaderContainer>
    )
};

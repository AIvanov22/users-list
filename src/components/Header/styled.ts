import styled from 'styled-components';
import { TextField } from '@material-ui/core';

export const HeaderContainer = styled.div`
	display: flex;
 	flex-direction: row;
  	justify-content: space-between;
  	margin-bottom: 1rem;
  	width: 100%;
  	align-items: flex-end;
`;

export const StyledTextField = styled(TextField)`
  	width: 75%;
  	margin-left: 1rem
`;

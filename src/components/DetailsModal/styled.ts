import styled from 'styled-components';
import { DialogContent, DialogTitle } from '@material-ui/core';

export const StyledDialogContent = styled(DialogContent)`
	display: flex;
  	flex-direction: row;
  	align-items: flex-start;
  	justify-content: space-between;
`;

export const StyledDialogTitle = styled(DialogTitle)`
  	display: flex;
  	justify-content: flex-start;
  	padding: 16px 0 !important;
`;

export const DialogBlock = styled.div`
  	width: 45%
`;

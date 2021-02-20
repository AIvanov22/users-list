import styled from 'styled-components';
import { Card, CardContent } from '@material-ui/core';

export const UserCardContainer = styled(Card)`
  	width: 100%;
  	margin: 1rem 0;
	cursor: pointer;
`;

export const StyledCardContent = styled(CardContent)`
	display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

export const TextRow = styled.div`
	display: flex;
    flex-direction: row;
    align-items: flex-start;
`;

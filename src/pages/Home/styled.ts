import styled from 'styled-components';
import { Paper } from '@material-ui/core';

export const HomeContainer = styled.div`
	display: flex;
    flex-direction: column;
    align-items: center;
`;

export const StyledPaper = styled(Paper)`
	padding: 2rem;
	width: calc(100vw - 6rem);
	display: flex;
    flex-direction: column;
    align-items: center;
    max-height: calc(90vh - 2.5rem);
    margin: 1rem;
    
	@media (min-width: 425px) { 
    	width: 70%;
	}
	
	@media (min-width: 1024px) { 
    	width: 40%;
	}
`;
export const UsersList = styled.div`
    overflow-y: auto;
    width: 100%;
    padding: 1rem;
`;

import React, { FC, ReactElement, useCallback } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { Dialog, Typography, DialogActions, IconButton } from '@material-ui/core';
import { Close as CloseIcon } from '@material-ui/icons';
import { closeDetailsModal } from '../../store/users/actions';
import { UserStateInterface, RootSelectorInterface } from '../../store/users/types';
import { labels } from './labels';
import { CompanyInterface, AddressInterface, GeoObject } from '../../store/users/types';
import { StyledDialogContent, DialogBlock, StyledDialogTitle } from './styled';

export const DetailsModal: FC = () => {
  const dispatch = useDispatch();
  const { detailsModalOpen, selectedUserData } = useSelector(({ users }: RootSelectorInterface): UserStateInterface => users, shallowEqual);

  const onClose = useCallback((): void => {
    dispatch(closeDetailsModal());
  }, [dispatch]);

  const createTextBlock = useCallback((data: (CompanyInterface | AddressInterface | GeoObject)): ReactElement[] => {
    return Object.keys(data).map((key) => {
      const k = key as keyof (CompanyInterface | AddressInterface | GeoObject);
      if (typeof data[k] !== 'object') {
        return (
          <Typography key={key} variant="body2" component="p">
            <strong>{`${labels[key]}:`}</strong> {data[k] || 'No data'}
          </Typography>
        );
      }

      return <>{createTextBlock(data[k])}</>;
    })
  },[]);


  return (
    <Dialog onClose={onClose} open={detailsModalOpen}>
      <DialogActions>
        <IconButton aria-label="Delete" onClick={onClose}>
          <CloseIcon />
        </IconButton>
      </DialogActions>
      <StyledDialogContent>
        <DialogBlock>
          <StyledDialogTitle>Address</StyledDialogTitle>
          { selectedUserData?.address && createTextBlock(selectedUserData.address) }
        </DialogBlock>
        <DialogBlock>
          <StyledDialogTitle>Company</StyledDialogTitle>
          { selectedUserData?.company && createTextBlock(selectedUserData.company) }
        </DialogBlock>
      </StyledDialogContent>
    </Dialog>
  );
};

import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import CloseIcon from '@mui/icons-material/Close';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Box } from '@mui/material';

export interface IModalFormalization {
  isOpen: boolean;
  title: string;
  description: string;
  onCloseModal: () => void;
}

export const BasicModal: React.FC<IModalFormalization> = ({
  isOpen,
  title,
  description,
  onCloseModal,
}) => {
  return (
    <>
      <Dialog
        open={isOpen}
        // onClose={onCloseModal}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <Box display={'flex'} justifyContent={'end'}>
          <CloseIcon onClick={onCloseModal} />
        </Box>
        <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {description}
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </>
  );
};

//TODO: utilizar dialog do mui https://mui.com/material-ui/react-dialog/

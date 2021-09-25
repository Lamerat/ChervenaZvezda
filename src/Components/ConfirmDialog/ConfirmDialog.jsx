import React, {useState, forwardRef} from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const ConfirmDialog = (props) => {
  const {title, text, okFunc, cancelFunc} = props;

  return (
    <Dialog
      open={true}
      TransitionComponent={Transition}
      keepMounted
      onClose={cancelFunc}
    >
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        <DialogContentText>{text}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={cancelFunc}>Cancel</Button>
        <Button onClick={okFunc}>OK</Button>
      </DialogActions>
    </Dialog>
  );
}

ConfirmDialog.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  okFunc: PropTypes.func.isRequired,
  cancelFunc: PropTypes.func.isRequired,
}

export default ConfirmDialog
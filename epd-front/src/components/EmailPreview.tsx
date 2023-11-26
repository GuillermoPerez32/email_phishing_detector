import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Divider,
  Slide,
} from "@mui/material";
import { TransitionProps } from "@mui/material/transitions";
import React from "react";

type Props = {
  open: boolean;
  onClose: any;
  onDelete: any;
  subject: string;
  body: string;
};

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const EmailPreview = ({ onClose, onDelete, open, body, subject }: Props) => {
  const handleDelete = () => {
    onDelete();
    onClose();
  };

  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={onClose}
      aria-describedby="alert-dialog-slide-description"
      maxWidth="lg"
    >
      <DialogTitle>{subject}</DialogTitle>
      <Divider />
      <DialogContent>
        <DialogContentText id="alert-dialog-slide-description">
          <div dangerouslySetInnerHTML={{ __html: body }} />
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleDelete} color="error">
          Delete
        </Button>
        <Button onClick={onClose}>Exit</Button>
      </DialogActions>
    </Dialog>
  );
};

export default EmailPreview;

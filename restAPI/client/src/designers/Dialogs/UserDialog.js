////הורדתי תעמוד הזה קומפלט מMUIד
import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { useSelector } from "react-redux";
import { useUpdateUserMutation } from '../../users/userApiSlice';

 function UserDialog({user}) {
    const [Edit] = useUpdateUserMutation()
    
  
   
    const [open, setOpen] = React.useState(true);
const [name, setName] = React.useState(user.name)
const [userName, setUserName] = React.useState(user.username)
const [email, setEmail] = React.useState(user.email)
const [address, setAddress] = React.useState(user.address)
const [phone, setPhone] = React.useState(user.phone)
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSave=()=>{
    Edit({_id: user._id, name: name, userName: userName, email: email, address: address, phone: phone})
  }

  return (
    
    <div>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Edit</DialogTitle>
        <DialogContent>
          <DialogContentText>
           Edit the fields you wish
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="name"
            type="text"
            defaultValue = {user.name}
            onChange={(e)=>setName(e.target.value)}
            fullWidth
            
          />

             <TextField
            autoFocus
            margin="dense"
            id="userName"
            label="userName"
            type="text"
            defaultValue=  {user.username}
            onChange={(e)=>setUserName(e.target.value)}

            fullWidth
          />
             <TextField
            autoFocus
            margin="dense"
            id="email"
            label="email"
            type="email"
            defaultValue=  {user.email}
            onChange={(e)=>setEmail(e.target.value)}

            fullWidth
          />
             <TextField
            autoFocus
            margin="dense"
            id="address"
            label="address"
            type="text"
            defaultValue=  {user.address}
            onChange={(e)=>setAddress(e.target.value)}

            fullWidth
          />
             <TextField
            autoFocus
            margin="dense"
            id="phone"
            label="phone"
            type="text"
            defaultValue=  {user.phone}
            onChange={(e)=>setPhone(e.target.value)}

            fullWidth
          />

          
        </DialogContent>
        <DialogActions>
        <Button onClick={() => {
  handleSave();
  handleClose();
}} color="primary">
  Save
</Button>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
        
        </DialogActions>
      </Dialog>
    </div>
  );
  
}
export default UserDialog;


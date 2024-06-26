import React from "react";
import AddIcon from '@mui/icons-material/Add'; 
import Fab from '@mui/material/Fab';
import AddTodoDialog from "./Dialogs/AddTodoDialog";
import AddUserDialog from "./Dialogs/AddUserDialog";
import AddPostDialog from "./Dialogs/AddPostDialog"
import AddPhotoDialog from "./Dialogs/AddPhotoDialog";
import { SignalCellularNullOutlined } from "@mui/icons-material";

const AddButton = ({p})=>{
    const [openDialog, setOpenDialog] = React.useState(false);
    return(
        <>
<Fab color="secondary" aria-label="add" onClick={()=>{setOpenDialog(true)}}>
    

    {openDialog&&p==='Todos'? <AddTodoDialog/>:null}
    {openDialog&&p==='Users'? <AddUserDialog/>:null}
    {openDialog&&p==='Posts'? <AddPostDialog/>:null}
    {openDialog&&p==='Photos'? <AddPhotoDialog/>:null}
    <AddIcon /> 
  </Fab>
        </>
    )
}
export default AddButton
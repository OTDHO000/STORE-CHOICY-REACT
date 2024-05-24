import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import Dialog from '@mui/material/Dialog';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { DataGrid } from '@mui/x-data-grid';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import axios from 'axios';

export default function PlaceList (props){
  

    const [selectedIndex, setSelectedIndex] = React.useState(1);
    const [open, setOpen] = React.useState(false);
    

    const [columns, setColumns] = React.useState([
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'SS', headerName: 'SS', width: 250 },
        { field: 'ADR', headerName: 'ADR', width: 350 },
        // {
        //     field: 'age',
        //     headerName: 'Age',
        //     type: 'number',
        //     width: 90,
        // },
        // {
        //     field: 'fullName',
        //     headerName: 'Full name',
        //     description: 'This column has a value getter and is not sortable.',
        //     sortable: false,
        //     width: 160,
        //     valueGetter: (value, row) => `${row.firstName || ''} ${row.lastName || ''}`,
        // },
    ]);

      const [rows, setRows] = React.useState([])  
      const [clickstoreId, setClickstoreId] =  React.useState()
      const [tabValue, setTabValue] = React.useState("Competition");   

    const handleListItemClick = (event, index, item) => {
        
        setSelectedIndex(index);
        setClickstoreId(item.store_id)
        setTabValue('Competition')
        const requestObject = {
            storeId : item.store_id,
            type : "Competition"
        }
        const apiurl = 'search/queryfulldetail'
        const url = 'http://localhost:5000/SCapi/' +apiurl

        axios.post(url, requestObject).then( (response) => { 
            if(response.data.status==="success"){
                console.log('get fulldetail response')
                console.log(response.data.result )
                const result = response.data.result
                const rowArray =[]
                result.map((item, index)=>{
                    const indexjson = {id : index}
                    const merge = {...indexjson, ...item}             
                    rowArray.push(merge)
                })
                setRows(rowArray)
            }else{
              setRows({id:'no data'})
            }
        }).catch( (error) =>  {
            // window.confirm('No result for these criteria')
            console.log(error);
        }).then(()=>{});


      setOpen(true);
    };

    const handleClose = (newValue) => {
        setOpen(false);       
      };

    
  
    return (
      <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        <List component="nav" aria-label="main mailbox folders">
            <ListItemButton
                selected={selectedIndex === 0}
                onClick={(event) => handleListItemClick(event, 0)}
            >
                <ListItemIcon>
                <DraftsIcon />
                </ListItemIcon>
            <ListItemText primary="Candidate List" />
          </ListItemButton>
            {props.allPlaces.map((item, index) =>(
                <ListItemButton
                    selected={selectedIndex === 1}
                    onClick={(event) => handleListItemClick(event, index, item)}
                >
                    <ListItemIcon>
                    <InboxIcon />
                    </ListItemIcon>
                    <ListItemText primary={item.store_id.substr(0.10)} />
                </ListItemButton>
            )) }
          
        </List>
        <Divider />
        <div>   
            <ConfirmationDialogRaw
            id="ringtone-menu"
            keepMounted
            open={open}
            handleClose={handleClose}
            tabValue ={tabValue}
            setTabValue = {setTabValue}
            clickstoreId = {clickstoreId}
            onclickItem ="onclickItem"
            setColumns = {setColumns}
            columns = {columns}
            rows = {rows}
            setRows = {setRows}
            />
        </div>
      </Box>
    );


}


function ConfirmationDialogRaw(props ) {
    const { open,rows, setRows, onclickItem, clickstoreId,
      setColumns,handleClose,columns,tabValue, setTabValue, ...other } = props;
    const radioGroupRef = React.useRef(null);  
   
   
    
    const competitionCol = [
      { field: 'id', headerName: 'ID', width: 70 },
      { field: 'SS', headerName: 'SS', width: 250 },
      { field: 'ADR', headerName: 'ADR', width: 350 },
    ]

    const transportationCol = [
      { field: 'id', headerName: 'ID', width: 70 },
      { field: 'ENGLISHNAME', headerName: 'ENGLISHNAME', width: 300 },
      { field: 'E_ADDRESS', headerName: 'E_ADDRESS', width: 350 },
    ]

    const facilityCol = [
      { field: 'id', headerName: 'ID', width: 70 },
      { field: 'ENGLISHNAME', headerName: 'ENGLISHNAME', width: 300 },
      { field: 'E_ADDRESS', headerName: 'E_ADDRESS', width: 350 },
    ]

    const demographicCol = [
      { field: 'id', headerName: 'ID', width: 70 },
      { field: 'ENGLISHNAME', headerName: 'ENGLISHNAME', width: 100 },
      { field: 'E_ADDRESS', headerName: 'E_ADDRESS', width: 150 },
    ]
  
    React.useEffect(() => {
      if (!open) {
     
      }
    }, [onclickItem, open]);
  
    const handleEntering = () => {
      if (radioGroupRef.current != null) {
        radioGroupRef.current.focus();
      }
    };
  
    // const handleCancel = () => {
    //   onClose();
    // };
  
    // const handleOk = () => {
    //   onClose(value);
    // };
  
    const handleChange = (event, newValue) => {
      console.log('tabChange');
          //clickstoreId
          console.log(newValue)
          setTabValue(newValue)
      // get full detial table    setColumns  setRows
      const requestObject = {
        storeId : clickstoreId,
        type : newValue
    }
    const apiurl = 'search/queryfulldetail'
    const url = 'http://localhost:5000/SCapi/' +apiurl

    axios.post(url, requestObject).then( (response) => { 
        if(response.data.status==="success"){
            console.log('change fulldetail response')
            const result = response.data.result
            if(requestObject.type === "Transportation"){
              setColumns(transportationCol)
            }
            if(requestObject.type === "Competition"){
              setColumns(competitionCol)
            }
            if(requestObject.type === "Facilities"){
              setColumns(facilityCol)
            }
            if(requestObject.type === "Demographic"){
              setColumns(demographicCol)
            }

            const rowArray =[]
            result.map((item, index)=>{
                const indexjson = {id : index}
                const merge = {...indexjson, ...item}             
                rowArray.push(merge)
            })
            setRows(rowArray)
            
        }else{
          setRows([])
        }
    }).catch( (error) =>  {
        // window.confirm('No result for these criteria')
        console.log(error);
        setRows([])
    }).then(()=>{});
    };
  
    return (
      <Dialog
        sx={{ '& .MuiDialog-paper': { width: '100%', maxHeight: 635 } }}
        maxWidth="md"
        TransitionProps={{ onEntering: handleEntering }}
        open={open}
        {...other}
      >
        <DialogTitle>{clickstoreId} -- full details </DialogTitle>
        <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{
                position: 'absolute',
                right: 8,
                top: 8,
                color: (theme) => theme.palette.grey[500],
            }}
            >
            <CloseIcon />
        </IconButton>

        <DialogContent dividers>
            <Tabs
                value={tabValue}
                onChange={handleChange}
                textColor="secondary"
                indicatorColor="secondary"
                aria-label="secondary tabs example"
            >
                <Tab value="Facilities" label="Facilities"  />
                <Tab value="Transportation" label="Transportation" />
                <Tab value="Competition" label="Competition" />
                <Tab value="Demographic" label="Demographic" />
            </Tabs>

            <div style={{ height: 400, width: '100%' }}>
                <DataGrid
                    rows={rows}
                    columns={columns}
                    initialState={{
                    pagination: {
                        paginationModel: { page: 0, pageSize: 5 },
                    },
                    }}
                    pageSizeOptions={[5, 10]}
                />
            </div>
        </DialogContent>
        {/* <DialogActions>
          <Button autoFocus onClick={handleCancel}>
            Cancel
          </Button>
          <Button onClick={handleOk}>Ok</Button>
        </DialogActions> */}
      </Dialog>
    );
  }
import React, {useState, useEffect} from 'react';
// import useStyles from 'react';
import logo from './logo.svg';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import TextField from '@material-ui/core/TextField';


import './App.css';
import Blogcard from './components/Blogcard';

function App() {

  // const classes = makeStyles();

  const [blogs, setblogs] = useState([]);
  const [open, setOpen] = React.useState(false);
  const [title, settitle] = useState("");
  const [description, setdescription] = useState("");
  const [content, setcontent] = useState("");
  const [editmode, seteditmode] = useState(false);
  const [i, seti] = useState(0);


  // const handleChange = name => event => {
  //   setValues({ ...values, [name]: event.target.value });
  // };
  // useEffect(() => {
    
  // }, [blogs])

  function submitBlog() {
    if(editmode){
      var obj1 = [...blogs];
      var temp = {
        title: title,
        description: description,
        content: content
      }
      obj1[i]=temp;
      setblogs(obj1);
      console.log(obj1)
    } else {
      var obj1 = [...blogs];
      var temp = {
          title: title,
          description: description,
          content: content
        }
      obj1.push(temp);
      setblogs(obj1)
      console.log(obj1)
    }
    handleClose();
  }

  function removeItemOnce(arr, index) {
    // var index = arr.indexOf(value);
    if (index > -1) {
      arr.splice(index, 1);
    }
    return arr;
  }

  function handleDelete(index){
    var obj1 = [...blogs];
    let i = 0;
    obj1 = removeItemOnce(obj1,index);
    setblogs(obj1);
    console.log(obj1);
  }

  const handleOpen = () => {
    seteditmode(false);
    setdescription("");
    settitle("");
    setcontent("");
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpenEdit = (index) => {
    seti(index);
    seteditmode(true);
    const e = blogs[index];
    console.log(index)
    setdescription(e.description);
    settitle(e.title);
    setcontent(e.content);
    setOpen(true);
  };

  const handleCloseEdit = () => {
    setOpen(false);
  };

  return (
    <div className="App" style={{padding: 10}}>
      <h1>Glory Bolgs</h1>
      <p>Publish and read blogs...</p>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div style={{borderColor:"white",backgroundColor:'white',margin: 20, padding:20, overflow:'scroll',height:"85%"}}>
            <Button variant="contained" style={{borderRadius: 50, backgroundColor:"white" ,color:"red"}} onClick={handleClose}>
              x
            </Button>  <br/>
            <TextField value={title} fullWidth={true} margin={'dense'} label="Title" variant="outlined"  onChange={e => settitle(e.target.value)}/>
            <TextField value={description} fullWidth={true} margin={'dense'} label="Short Description" variant="outlined" onChange={e => setdescription(e.target.value)}/>
            <TextField
              value={content}
              fullWidth={true}
              margin={'dense'}
              // id="outlined-multiline-static"
              label="Multiline"
              multiline
              rows={10}
              variant="outlined"
              onChange={e => setcontent(e.target.value)}
            />
            <Button variant="contained" onClick={submitBlog} style={{marginTop:20, backgroundColor:"green", color:"white"}}>Submit</Button>
          </div>
        </Fade>
      </Modal>
      <Button variant="contained" color="primary" onClick={handleOpen}>
        +
      </Button>
      <Container maxWidth="md">
        <Typography component="div">
          {/* <Blogcard/> */}
          {
            blogs.map((e,index) => (
              <Blogcard title={e.title} key={index} index={index} description={e.description} content={e.content} handleOpenEdit={handleOpenEdit} handleDelete={handleDelete}></Blogcard>
            ))
          }
        </Typography>
      </Container>

    </div>
  );
}

export default App;

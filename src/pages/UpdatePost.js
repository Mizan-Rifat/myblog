import React, { useContext, useState } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import axios from 'axios';
import clsx from 'clsx';
import CircularProgress from '@material-ui/core/CircularProgress';


import CompContainer from '../components/CompContainer';

const useStyles = makeStyles((theme) => ({
    textfield:{
        marginBottom:15
    },
    actions:{
        padding:'12px 24px'
    },
    root:{
        '& .MuiDialog-paper':{
            minWidth:'650px'
        }
    },
    formDisable:{
        pointerEvents:'none',
        opacity:'.5'
    },
    progressContainer:{
        position: 'absolute',
        top: '35%',
        left: '44%',
    },
    dNone:{
        display:'none'
    }
}));



export default function UpdatePost(props) {
    const classes = useStyles();

    const postID = props.match.params.id;

    const [loading, setLoading] = useState(false)


    const [formData, setFormData] = useState({
        title:'',
        body:'',
        userId:2
    })

console.log({postID})
    const handleChange = (e,field)=>{

        setFormData({
            ...formData,
            [field] : e.target.value
        })
    }

    const handleSubmit =(e)=>{
      e.preventDefault()

      setLoading(true)

      axios.post(`${process.env.REACT_APP_DOMAIN}/posts`,formData)
        .then(response=>{

            setLoading(false)
            localStorage.setItem('createdPost',JSON.stringify(response.data))

        })
        .catch(error=>{
            console.log({error})
            setLoading(false)
        })
    }


    useEffect(() => {
        if(postId){
            axios.post(`${process.env.REACT_APP_DOMAIN}/posts`,formData)
            .then(response=>{

                setLoading(false)
                localStorage.setItem('createdPost',JSON.stringify(response.data))

            })
            .catch(error=>{
                console.log({error})
                setLoading(false)
            })
        }
    }, [])

  return (
    <CompContainer title='Update Post'>
        <div style={{position:'relative'}}>

            <form onSubmit={handleSubmit} className={clsx({[classes.formDisable] : loading })}>

                <TextField 
                    fullWidth
                    required
                    label='Post Title'
                    variant="outlined"
                    className={classes.textfield}
                    onChange={(e)=>handleChange(e,'title')}
                    value={formData.title}
                />

                <TextField
                    required
                    id="standard-required" 
                    multiline
                    fullWidth
                    variant="outlined"
                    rows={4}
                    label='Post Description'
                    className={classes.textfield}
                    onChange={(e)=>handleChange(e,'body')}
                    value={formData.body}
                />


                <div className="" style={{textAlign:'right'}}>
                
                    <Button variant='contained' type='submit' color='Primary'>Submit</Button>

                </div>
            </form>

            <div className={clsx({[classes.progressContainer] : loading,[classes.dNone] : !loading })}>
                <CircularProgress />
            </div>

        </div>
    </CompContainer>
  );
}


import React from 'react'
import Grid from '@mui/material/Grid';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {styled} from "@mui/material";

const CssTextField = styled(TextField)({
    '& label.Mui-focused': {
        color: '#cda173',
    },
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: '#cda173',
        },
        '&:hover fieldset': {
            borderColor: 'black',
        },
        '&.Mui-focused fieldset': {
            borderColor: '#cda173',
        },
    },
});

export const ContactsForm = () => {

    return <Grid container justifyContent={'center'} style={{marginBottom:'20px'}}>
        <Grid item justifyContent={'center'} >
            <form>
                <FormControl style={{minWidth:'250px', fontFamily: 'Livvic'}}>
                    <FormGroup>
                        <CssTextField
                            label="Name"
                            margin={'dense'}
                            placeholder={'Name'}
                        />
                        <CssTextField
                            label="Email"
                            margin={'dense'}
                            placeholder={'Email'}
                        />
                        <CssTextField
                            placeholder="Please enter your message"
                            label="Message"
                            margin={'dense'}
                            multiline={true}
                            rows={5}
                        />
                        <Button
                            type={'submit'}
                            variant="outlined"
                            color="inherit"
                            style={{fontFamily: 'Livvic', width: 'max-content', alignSelf: 'center'}}
                        >
                            Send message
                        </Button>
                    </FormGroup>
                </FormControl>
            </form>
        </Grid>
    </Grid>
}
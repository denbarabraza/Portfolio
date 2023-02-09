import React from 'react'
import Grid from '@mui/material/Grid';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {styled} from "@mui/material";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from "yup";
import {RootDispatch} from "../../../BLL/store";
import {sendMessageInEmailTC} from "../../../BLL/appReducer";

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

export type FormType = {
    name: string
    email: string
    phone?: string
    message: string
}

const schema = yup.object({
    name: yup.string().trim().required(),
    email: yup.string().email().trim().required(),
    message: yup.string().min(2).max(200).trim().required(),
}).required();

export const ContactsForm = () => {

    const dispatch=RootDispatch()

    const {
        register,
        handleSubmit,
        reset,
        formState: {errors},
    } = useForm<FormType>({
        resolver: yupResolver(schema),
        mode: 'onTouched'
    });
    const submit = (data: FormType) => {
        dispatch(sendMessageInEmailTC(data))
        reset()
    };

    return <Grid container justifyContent={'center'} style={{marginBottom:'40px'}}>
        <Grid item justifyContent={'center'} >
            <form onSubmit={handleSubmit(submit)}>
                <FormControl style={{minWidth:'300px', fontFamily: 'Livvic'}}>
                    <FormGroup>
                        <CssTextField
                            label="Name"
                            margin={'dense'}
                            {...register('name')}
                        />
                        <div style={{color: '#d35151'}}>{errors.name && errors.name.message}</div>
                        <CssTextField
                            label="Email"
                            margin={'dense'}
                            {...register('email')}
                        />
                        <div style={{color: '#d35151'}}>{errors.email && errors.email.message}</div>
                        <CssTextField
                            label="Number"
                            margin={'dense'}
                            {...register('phone')}
                        />
                        <div style={{color: '#d35151'}}>{errors.phone && errors.phone.message}</div>
                        <CssTextField
                            label="Message"
                            margin={'dense'}
                            multiline={true}
                            rows={5}
                            {...register('message')}
                        />
                        <div style={{color: '#d35151'}}>{errors.message && errors.message.message}</div>
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
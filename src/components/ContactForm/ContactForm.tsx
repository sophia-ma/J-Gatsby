import React, { useState } from 'react';
import {
    Button,
    createMuiTheme,
    createStyles,
    makeStyles,
    TextField,
    ThemeProvider,
} from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import Alert from '@material-ui/lab/Alert';
import { useForm } from 'react-hook-form';
import { variables } from '../../styles/tokens';
import Divider from 'images/divider.png';
import './ContactForm.scss';

interface FormData {
    name: string;
    email: string;
    phone: string;
    message: string;
}

const useStyles = makeStyles(() =>
    createStyles({
        root: {
            display: 'flex',
            flexWrap: 'wrap',
            flexDirection: 'row',
            justifyContent: 'flex-end',
            width: '100%',
        },
        alert: {
            width: '100%',
            marginTop: '20px',
        },
    }),
);

const theme = createMuiTheme({
    palette: {
        primary: {
            main: variables.primaryColour,
        },
        error: {
            main: '#8a0a0a',
        },
        contrastThreshold: 3,
        tonalOffset: 0.2,
    },
});

const encode = (data: any) => {
    return Object.keys(data)
        .map((key: string) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
        .join('&');
};

const ContactForm: React.FC = () => {
    const classes = useStyles();

    const { register, handleSubmit, errors, reset } = useForm<FormData>();

    const [state, setState] = useState({});
    const [feedbackMsg, setFeedbackMsg] = useState('');

    const handleChange = (e: any) => setState({ ...state, [e.target.name]: e.target.value });

    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

    const onSubmit = (data: FormData, e: any) => {
        e.preventDefault();

        fetch('/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: encode({ 'form-name': 'contact', ...state }),
        })
            .then(() => {
                setFeedbackMsg(`Thanks for reaching out. I'll get back to you soon.`);
                reset();
            })
            .catch(() => {
                setFeedbackMsg('Oops, something went wrong. The form could not be submitted.');
            });
    };

    return (
        <div id="contact-form" className="contact-form-container">
            <h1 className="heading">Contact</h1>
            <img src={Divider} alt="divider" className="divider" />

            <ThemeProvider theme={theme}>
                <form
                    className={classes.root}
                    autoComplete="off"
                    noValidate
                    name="contact"
                    method="POST"
                    data-netlify="true"
                    data-netlify-honeypot="bot-field"
                    color="primary"
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <input type="hidden" name="form-name" value="contact" />
                    <TextField
                        id="name"
                        label="Your name"
                        name="name"
                        margin="normal"
                        variant="outlined"
                        required
                        fullWidth
                        inputRef={register({ required: true })}
                        onChange={handleChange}
                        helperText={!!errors.name && 'Please enter your name'}
                        error={!!errors.name}
                    />
                    <TextField
                        id="email"
                        label="Email"
                        name="email"
                        type="email"
                        variant="outlined"
                        required
                        fullWidth
                        margin="normal"
                        inputRef={register({ required: true, pattern: emailRegex })}
                        onChange={handleChange}
                        helperText={
                            !!errors.email &&
                            ((errors.email?.type === 'required' &&
                                'Please enter your email address') ||
                                (errors.email?.type === 'pattern' &&
                                    'Please enter your email address in format yourname@example.com'))
                        }
                        error={!!errors.email}
                    />
                    <TextField
                        id="phone"
                        label="Phone"
                        name="phone"
                        margin="normal"
                        variant="outlined"
                        fullWidth
                        inputRef={register}
                    />
                    <TextField
                        id="message"
                        label="Message"
                        name="message"
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        multiline
                        rows={8}
                        inputRef={register({ required: true })}
                        onChange={handleChange}
                        helperText={!!errors.message && 'Please enter your message'}
                        error={!!errors.message}
                    />
                    <Button
                        variant="contained"
                        color="primary"
                        type="submit"
                        endIcon={<SendIcon />}
                    >
                        Send
                    </Button>

                    {feedbackMsg && (
                        <Alert severity="success" className={classes.alert}>
                            {feedbackMsg}
                        </Alert>
                    )}
                </form>
            </ThemeProvider>
        </div>
    );
};

export default ContactForm;

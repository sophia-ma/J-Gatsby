import React from 'react';
import {
    Button,
    createMuiTheme,
    createStyles,
    makeStyles,
    TextField,
    Theme,
    ThemeProvider,
} from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
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

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
            flexWrap: 'wrap',
            flexDirection: 'row',
            justifyContent: 'flex-end',
            width: '100%',
        },
    }),
);

const theme = createMuiTheme({
    palette: {
        primary: {
            main: variables.backgroundColour,
        },
        secondary: {
            main: variables.basicColour,
        },
        error: {
            main: '#8a0a0a',
        },
        contrastThreshold: 3,
        tonalOffset: 0.2,
    },
});

const ContactForm: React.FC = () => {
    const classes = useStyles();
    const { register, handleSubmit, errors } = useForm<FormData>();
    const onSubmit = (data: FormData) => console.log(data);

    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

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
                </form>
            </ThemeProvider>
        </div>
    );
};

export default ContactForm;

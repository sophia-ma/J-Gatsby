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
import { variables } from '../../styles/tokens';
import Divider from 'images/divider.png';
import './ContactForm.scss';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
            flexWrap: 'wrap',
            flexDirection: 'row',
            justifyContent: 'flex-end',
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
        contrastThreshold: 3,
        tonalOffset: 0.2,
    },
});

const ContactForm: React.FC = () => {
    const classes = useStyles();

    return (
        <div id="contact-form" className="contact-form-container">
            <h1 className="heading">Contact</h1>
            <img src={Divider} alt="divider" className="divider" />

            <form
                className={classes.root}
                autoComplete="off"
                name="contact"
                method="POST"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
            >
                <input type="hidden" name="form-name" value="contact" />
                <ThemeProvider theme={theme}>
                    <TextField
                        id="name"
                        label="Your name"
                        name="name"
                        margin="normal"
                        required
                        fullWidth
                    />
                    <TextField
                        id="email"
                        label="Email"
                        name="email"
                        required
                        fullWidth
                        margin="normal"
                    />
                    <TextField
                        id="message"
                        label="Message"
                        name="message"
                        margin="normal"
                        multiline
                        required
                        fullWidth
                        rows={8}
                    />
                    <Button
                        variant="contained"
                        color="secondary"
                        type="submit"
                        endIcon={<SendIcon />}
                    >
                        Send
                    </Button>
                </ThemeProvider>
            </form>
        </div>
    );
};

export default ContactForm;

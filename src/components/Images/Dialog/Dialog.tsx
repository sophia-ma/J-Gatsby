import Img from 'gatsby-image';
import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import './Dialog.scss';
import { variables } from '../../../styles/tokens';

type Props = {
    selectedValue: any;
    open: boolean;
    close: () => void;
};

const useStyles = makeStyles(() =>
    createStyles({
        closeButton: {
            position: 'absolute',
            right: 0,
            color: variables.basicColour,
            backgroundColor: '#1a2b2c87',
            zIndex: 1000,
        },
    }),
);

const ImageDialog: React.FC<Props> = props => {
    const classes = useStyles();
    const { close, selectedValue, open } = props;

    return (
        <Dialog open={open} onClose={close} aria-labelledby="image-dialog" fullWidth={true}>
            <IconButton aria-label="close" className={classes.closeButton} onClick={close}>
                <CloseIcon />
            </IconButton>
            <Img fluid={selectedValue.node.fluid} />
        </Dialog>
    );
};

export default ImageDialog;

import Img from 'gatsby-image';
import React from 'react';
import Dialog, { DialogContent } from '@reach/dialog';
import '@reach/dialog/styles.css';
import './Dialog.scss';

type Props = {
    selectedValue: any;
    open: boolean;
    close: () => void;
};

const ImageDialog: React.FC<Props> = props => {
    const { close, selectedValue, open } = props;

    return (
        <Dialog isOpen={open} onDismiss={close} aria-label="image-dialog">
            <DialogContent
                aria-label="image-dialog-content"
                style={{
                    position: `absolute`,
                    left: `50%`,
                    top: `50%`,
                    transform: `translate(-50%, -50%)`,
                }}
            >
                <Img fluid={selectedValue.node.fluid} />
            </DialogContent>
        </Dialog>
    );
};

export default ImageDialog;

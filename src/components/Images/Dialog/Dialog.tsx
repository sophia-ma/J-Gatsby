import Img from 'gatsby-image';
import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import './Dialog.scss';

type Props = {
    selectedValue: any;
    open: boolean;
    close: () => void;
};

const ImageDialog: React.FC<Props> = props => {
    const { close, selectedValue, open } = props;

    return (
        <Dialog open={open} onClose={close} aria-labelledby="image-dialog" fullWidth={true}>
            <Img fluid={selectedValue.node.fluid} />
        </Dialog>
    );
};

export default ImageDialog;

import React, { useState } from 'react';
import { Modal, Fade, Box } from '@material-ui/core';
import { modalStyles } from '../../../common/CustomModal';

const img1 = "https://images.unsplash.com/photo-1445847562439-f251c3799ea5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=632&q=80";
const img2 = "https://images.unsplash.com/photo-1534939561126-855b8675edd7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80";

// const ImageSelectorModal: React.FC<{ imgs: string[] }> = (props) => {
const ImageSelectorModal = () => {
  const [modalOpen, setModalOpen] = useState<boolean>(true);
  const classes = modalStyles();
  return (
    <div>
      <Modal open={modalOpen} className={classes.modal}>
        <Fade in={modalOpen}>
          <div className={classes.paper}>
            <h2 id="transition-modal-title">Select which image</h2>
            {/* <p id="transition-modal-description">{props.description}</p> */}
            <Box
              maxWidth="60vw"
              maxHeight="400px"
              display="flex"
              flexWrap="wrap"
              justifyContent="flex-start"
              overflow={false}
              mt={2}
            >
              {/* <Box maxWidth="30vw"> */}
                <img style={{ height: '30%', width:'30%'}} src={img1} alt="smthg" />
              {/* </Box> */}
              {/* <Box maxWidth="30vw"> */}
                <img style={{ height: '30%', width:'30%'}} src={img2} alt="smthg" />
              {/* </Box> */}

            </Box>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}

export default ImageSelectorModal;
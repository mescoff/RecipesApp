import { Fade, Modal, makeStyles, Theme, createStyles, Button
} from "@material-ui/core";
import React, { Dispatch, SetStateAction } from "react";
import { navigate } from "@reach/router";
import LostYouWayButton from "./LostYourWayButton";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    modal: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      //   border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3)
      // borderRadius: 15
    }
  })
);

interface ICustomModalProps {
  title: string;
  description: string;
  isOpen: boolean;
  handleToggle: Dispatch<SetStateAction<boolean>>;
  redirectLink?: string;
}

const CustomModal: React.FC<ICustomModalProps> = props => {
  const classes = useStyles();

  const redirect = () => {
    if (props.redirectLink) navigate(props.redirectLink);
  };

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={props.isOpen}
        onClose={props.handleToggle}
        // closeAfterTransition
        // BackdropComponent={Backdrop}
        // BackdropProps={{
        //   timeout: 200
        // }}
      >
        <Fade in={props.isOpen}>
          <div className={classes.paper}>
            <h2 id="transition-modal-title">{props.title}</h2>
            <p id="transition-modal-description">{props.description}</p>
            {props.redirectLink && (
              // <Box border={1} borderColor="primary.main" p={2} display="flex" flexDirection="row" alignItems="flex-start">
             <LostYouWayButton redirect={redirect}/>
            )}
          </div>
        </Fade>
      </Modal>
    </div>
  );
};

{
  /* <Typography
                  style={{ fontStyle: "italic" }}
                  color="primary"
                  gutterBottom
                  id="transition-modal-description"
                >
                  Let's get you back on track...
                </Typography> */
}

export default CustomModal;

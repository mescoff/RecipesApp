import React, { useState, useEffect } from 'react';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { IMedia } from '../../../../interfaces/recipe.interface';
import { makeStyles, Theme, createStyles, Box, IconButton, Paper, Slide } from '@material-ui/core';
import Thumbnails from './Thumbnails';
import { logInfo } from '../../../../helpers/helpers';

interface IGalleryProps {
  medias: IMedia[];
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '600px',
      // maxWidth: '40vw',
      maxHeight: '700px',
    },
    mainImage: {
      width: 'inherit',
      height: '400px',
      // maxWidth: '50vw',
      // maxHeight: '300px',
      position: 'relative',
      // borderBottom: '2px grey groove'
    },
    imageSource: {
      position: 'absolute',
      // width: '30mw',
      height: '100%',
      width: '100%',
      borderRadius: 'inherit',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      backgroundSize: 'cover',
      backgroundPosition: 'center 40%'
      // maxWidth: '600px',
      // maxHeight: '15mh',
    },
    iconsContainer: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
    },
    arrowIcons: {
      color: 'white',
      fontSize: 'large',
      borderRadius: '50%',
      // border:'2px solid white',
      // backgroundColor: 'rgba(355, 355, 355, 0.40)',
      '&:hover': {
        backgroundColor: 'rgba(0, 0, 0, 0.70)',
      }
    },
    smallGallery: {
      width: 'inherit',
      height: '150px',
      // maxHeight: '80px',
      // padding: '1% 1% 1% 0'
      // backgroundColor: 'rgba(0, 0, 0)', 
      // , 0.50)'
    },
  })
);

type directions = 'left' | 'right';

const Gallery: React.FC<IGalleryProps> = (props) => {
  const styles = useStyles();
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  // const [selectedImageUrl, setSelectedImageUrl] = useState<string>('');
  const [slideIn, setSlideIn] = useState<boolean>(true);
  const [slideDirection, setSlideDirection] = useState<directions>('left');

  // useEffect(() => {
  //   setTransitionImg(false);
  // }, [transitionImg])

  // useEffect(() => {
  //   if (props.medias.length > 0) {
  //     var imgBytes = props.medias[selectedIndex].mediaUrl;
  //     var blob = new Blob([imgBytes], { type: "image/jpeg" });
  //     var imageUrl = URL.createObjectURL(blob);
  //     setSelectedImageUrl(imageUrl);
  //   }
  // }, [selectedIndex])

  const onSwitchImage = (movingIndexBy: number) => {
    let newIndex = selectedIndex + movingIndexBy;
    // creating a loop effect by resetting element to first or last index when it's out of bound
    if (newIndex < 0) { newIndex = props.medias.length }
    else if (newIndex >= props.medias.length) { newIndex = 0 };

    // transition
    const transitionDirection = movingIndexBy === 1 ? 'left' : 'right';
    logInfo('Gallery', `Set slide direction ${transitionDirection}`);
    setSlideDirection(transitionDirection)
    setSlideIn(false);
    setSelectedIndex(newIndex);

    setTimeout(() => {
      // setSelectedIndex(newIndex);
      setSlideDirection(transitionDirection);
      setSlideIn(true);
    }, 150);
  }

  return (
    <div className={styles.root}>
      <Paper className={styles.mainImage} >
        {props.medias.length > 0 &&
          <>
            <Slide direction={slideDirection} in={slideIn} mountOnEnter unmountOnExit exit={false}>
              <span
                className={styles.imageSource}
                style={{
                  backgroundImage: `url(${props.medias[selectedIndex].mediaUrl})`,         
                }}
              />
            </Slide>
            <Box height={1} display='flex' justifyContent='space-between' alignItems='center'  >
              <IconButton aria-label='Previous img' className={styles.arrowIcons} onClick={() => onSwitchImage(-1)} >
                <ArrowBackIosIcon name='backwardButton' />
              </IconButton>
              <IconButton aria-label='Next img' className={styles.arrowIcons} onClick={() => onSwitchImage(1)} >
                <ArrowForwardIosIcon name='forwardButton' />
              </IconButton>
            </Box>
          </>
        }
      </Paper>
      {props.medias.length > 0 &&
        // <Paper className={styles.smallGallery}>
        <Box mt={2} width={1} height={'15vh'} display='flex' justifyContent='center'>
          <Thumbnails medias={props.medias} selectedIndex={selectedIndex} />
        </Box>
        //  {/* </Paper> */}
      }
    </div>
  );
}

export default Gallery;
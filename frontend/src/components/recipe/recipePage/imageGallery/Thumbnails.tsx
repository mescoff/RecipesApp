import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core';
import { IMedia } from '../../../../interfaces/recipe.interface';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    galleryThumbnail: {
      // maxWidth: '20%',
      // maxHeight: '90%',
      // width: '10%',
      height: '50px',
      width: '50px',
      // height: '100%',
      // width: '10%',
      borderRadius: '50%',
      boxShadow: '0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)',
      backgroundColor: 'rgba(0,0,0,0.2)',
      margin: '1%',
      backgroundSize: 'cover',
      backgroundPosition: 'center 40%'
      // position: 'absolute'
    },
    // thumbnail:{
    //   width: '90%',
    //   height: '90%'
    // },
    // thumbnailBackdrop: {
    //   position: 'absolute',
    //   left: 0,
    //   right: 0,
    //   top: 0,
    //   bottom: 0,
    //   backgroundColor: theme.palette.common.black,
    //   opacity: 0.4,
    //   transition: theme.transitions.create('opacity'),
    // },
  })
);

interface IThumbnailsProps {
  medias: IMedia[],
  selectedIndex: number,
}

// Otherwise there is : https://www.npmjs.com/package/react-alice-carousel 
const Thumbnails: React.FC<IThumbnailsProps> = (props) => {
  const styles = useStyles();
  return (
    // <Box height={1} display='flex' justifyContent='flex-start' alignItems='center'>
    <>
      {
        props.medias.map((media, index) => {
          // Add opacity on top of thumbnails that are the one currently selected
          if (index === props.selectedIndex) {
            return (
              <span
                key={media.mediaPath}
                className={styles.galleryThumbnail}
                style={{
                  backgroundImage: `url(${media.mediaPath})`,
                }}
              />
              // <img key={media.mediaPath} className={styles.galleryThumbnail} src={media.mediaPath} alt={media.title} />
            )
          }
          else return (
            <span
              key={media.id}
              className={styles.galleryThumbnail}
              style={{
                backgroundImage: `url(${media.mediaPath})`,
                opacity: 0.5
              }}
            />
            // <img key={media.mediaPath} className={styles.galleryThumbnail} style={{ opacity: 0.5 }} src={media.mediaPath} alt={media.title} />
          )
        })
      }
      </>
    // </Box>
  );
}

export default Thumbnails;
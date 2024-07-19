import {
    AppBar,
    Avatar,
    Box,
    Container,
    Dialog,
    IconButton,
    Rating,
    Slide,
    Stack,
    Toolbar,
    Tooltip,
    Typography,
  } from '@mui/material';
  import { forwardRef, useEffect, useState } from 'react';
  import { useValue } from '../../App';
  import { Close, StarBorder } from '@mui/icons-material';
  
  import { Swiper, SwiperSlide } from 'swiper/react';
  import { Navigation, Autoplay, EffectCoverflow, Zoom } from 'swiper/modules';
//   Lazy,
  import 'swiper/css';
  import 'swiper/css/navigation';
  import 'swiper/css/effect-coverflow';
//   import 'swiper/css/lazy';
  import 'swiper/css/zoom';
  import './swiper.css';
  
  const Transition = forwardRef((props, ref) => {
    return <Slide direction="up" {...props} ref={ref} />;
  });
  
  const PILGRIM = () => {
    const {
      state: { pilgrim },
      dispatch,
    } = useValue();
  
    const [place, setPlace] = useState(null);
  
    useEffect(() => {
      if (pilgrim) {
        // const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${pilgrim.lng},${pilgrim.lat}.json?access_token=${process.env.REACT_APP_MAP_TOKEN}`;
        const url = `https://api.maptiler.com/geocoding/v1/reverse?lat=${pilgrim.lat}&lon=${pilgrim.lng}&key=${'tRqjZjhKcJr1uachzPuM'}`;
        fetch(url)
          .then((response) => {
            return response.json()})
          .then((data) => setPlace(data.features[0]));
      }
    }, [pilgrim]);
  
    const handleClose = () => {
      dispatch({ type: 'UPDATE_PILGRIM', payload: null });
    };
    return (
      <Dialog
        fullScreen
        open={Boolean(pilgrim)}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar position="relative">
          <Toolbar>
            <Typography variant="h6" component="h3" sx={{ ml: 2, flex: 1 }}>
              {pilgrim?.title}
            </Typography>
            <IconButton color="inherit" onClick={handleClose}>
              <Close />
            </IconButton>
          </Toolbar>
        </AppBar>
        <Container sx={{ pt: 5 }}>
          <Swiper
            modules={[Navigation, Autoplay, EffectCoverflow, Zoom]}
            // Lazy,
            centeredSlides
            slidesPerView={2}
            grabCursor
            navigation
            autoplay
            // lazy
            zoom
            effect="coverflow"
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
          >
            {pilgrim?.images?.map((url) => (
              <SwiperSlide key={url}>
                <div className="swiper-zoom-container">
                  <img src={url} alt="pilgrim" />
                </div>
              </SwiperSlide>
            ))}
            <Tooltip
              title={pilgrim?.uName || ''}
              sx={{
                position: 'absolute',
                bottom: '8px',
                left: '8px',
                zIndex: 2,
              }}
            >
              <Avatar src={pilgrim?.uPhoto} />
            </Tooltip>
          </Swiper>
          <Stack sx={{ p: 3 }} spacing={2}>
            <Stack
              direction="row"
              sx={{
                justifyContent: 'space-between',
                flexWrap: 'wrap',
              }}
            >
              <Box>
                <Typography variant="h6" component="span" sx={{fontSize:'20px'}}>
                  {'CHARGES: '}
                </Typography>
                <Typography component="span" sx={{fontSize:'15px'}}>
                  {pilgrim?.price === 0 ? 'Free Visit' : '$' + pilgrim?.price}
                </Typography>
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                {/* <Typography variant="h6" component="span">
                  {'Ratings: '}
                </Typography>
                <Rating
                  name="room-ratings"
                  defaultValue={3.5}
                  precision={0.5}
                  emptyIcon={<StarBorder />}
                /> */}
              </Box>
            </Stack>
            <Stack
              direction="row"
              sx={{
                justifyContent: 'space-between',
                flexWrap: 'wrap',
              }}
            >
              <Box>
                <Typography variant="h6" component="span" sx={{fontSize:'20px'}}>
                  {'Place Name: '}
                </Typography>
                <Typography component="span" sx={{fontSize:'15px'}}>{pilgrim?.title}</Typography>
              </Box>
              {/* <Box>
                <Typography variant="h6" component="span">
                  {'Address: '}
                </Typography>
                <Typography component="span">{place?.place_name}</Typography>
              </Box> */}
            </Stack>
            <Stack>
              <Typography variant="h6" component="span" sx={{fontSize:'20px'}}>
                {'Details: '}
              </Typography>
              <Typography component="span" sx={{fontSize:'15px'}}>{pilgrim?.description}</Typography>
            </Stack>
          </Stack>
        </Container>
      </Dialog>
    );
  };
  
  export default PILGRIM;
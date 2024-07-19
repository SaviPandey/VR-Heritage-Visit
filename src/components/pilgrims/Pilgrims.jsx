import {
    Avatar,
    Card,
    Container,
    ImageList,
    ImageListItem,
    ImageListItemBar,
    Rating,
    Tooltip,
  } from '@mui/material';
  import { useValue } from '../../App';
  import { StarBorder } from '@mui/icons-material';
  
  const Pilgrims = () => {
    const {
      state: { filteredPilgrims },
      dispatch,
    } = useValue();
    return (
      <Container>
        <ImageList
          gap={12}
          sx={{
            mb: 8,
            gridTemplateColumns:
              'repeat(auto-fill, minmax(280px, 1fr))!important',
          }}
        >
          {filteredPilgrims.map((pilgrim) => (
            <Card key={pilgrim._id}>
              <ImageListItem sx={{ height: '100% !important' }}>
                <ImageListItemBar
                  sx={{
                    background:
                      'linear-gradient(to bottom, rgba(0,0,0,0.7)0%, rgba(0,0,0,0.3)70%, rgba(0,0,0,0)100%)',
                  }}
                  title={pilgrim.price === 0 ? 'Free Visit' : 'Rs' + pilgrim.price}
                  actionIcon={
                    <Tooltip title={pilgrim.uName} sx={{ mr: '5px' }}>
                      <Avatar src={pilgrim.uPhoto} />
                    </Tooltip>
                  }
                  position="top"
                />
                <img
                  src={pilgrim.images[0]}
                  alt={pilgrim.title}
                  loading="lazy"
                  style={{ cursor: 'pointer' }}
                  onClick={() => dispatch({type:'UPDATE_PILGRIM',payload:pilgrim})}
                />
                <ImageListItemBar
                  title={pilgrim.title}
                //   actionIcon={
                //     <Rating
                //       sx={{ color: 'rgba(255,255,255, 0.8)', mr: '5px' }}
                //       name="pilgrim-rating"
                //       defaultValue={3.5}
                //       precision={0.5}
                //       emptyIcon={
                //         <StarBorder sx={{ color: 'rgba(255,255,255, 0.8)' }} />
                //       }
                //     />
                //   }
                />
              </ImageListItem>
            </Card>
          ))}
        </ImageList>
      </Container>
    );
  };
  
  export default Pilgrims;
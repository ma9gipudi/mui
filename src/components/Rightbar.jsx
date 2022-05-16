import { Avatar, AvatarGroup, Box, ImageList, ImageListItem, Typography } from '@mui/material';
const Rightbar = () => {
  return (
    <Box
      flex={2}
      padding={2}
      sx={{
        display: {
          xs: 'none',
          sm: 'block',
        },
      }}
    >
      <Box position="fixed">
        <Typography variant="h6" fontWeight={100}>
          Online Friends
        </Typography>
        <AvatarGroup max={4}>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
          <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
          <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
          <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
        </AvatarGroup>
        <Typography mt={2} mb={2}>  Latest Photos</Typography>
        <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={100} gap={5}>
          <ImageListItem >
            <img src="https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c?w=164&h=164&fit=crop&auto=format&dpr=2"  loading="lazy" />
          </ImageListItem>
          <ImageListItem >
            <img src="https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c?w=164&h=164&fit=crop&auto=format&dpr=2"  loading="lazy" />
          </ImageListItem>
          <ImageListItem >
            <img src="https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c?w=164&h=164&fit=crop&auto=format&dpr=2"  loading="lazy" />
          </ImageListItem>
          <ImageListItem >
            <img src="https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c?w=164&h=164&fit=crop&auto=format&dpr=2"  loading="lazy" />
          </ImageListItem>
          <ImageListItem >
            <img src="https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c?w=164&h=164&fit=crop&auto=format&dpr=2"  loading="lazy" />
          </ImageListItem>
          <ImageListItem >
            <img src="https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c?w=164&h=164&fit=crop&auto=format&dpr=2"  loading="lazy" />
          </ImageListItem>
        </ImageList>
      </Box>
    </Box>
  );
};

export default Rightbar;

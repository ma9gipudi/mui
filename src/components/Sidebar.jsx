import { Inbox, Home, ModeNight } from '@mui/icons-material';
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch } from '@mui/material';

const Sidebar = () => {
  return (
    <Box
      flex={1}
      padding={2}
      sx={{
        display: { xs: 'none', sm: 'block' },
      }}
    >
      <Box position="fixed">
        <List>
          <ListItem>
            <ListItemButton component="a">
              <ListItemIcon>
                <Home></Home>
              </ListItemIcon>
              <ListItemText primary="HomePage" />
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton component="a">
              <ListItemIcon>
                <Home></Home>
              </ListItemIcon>
              <ListItemText primary="MarketPlace" />
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton component="a">
              <ListItemIcon>
                <Home></Home>
              </ListItemIcon>
              <ListItemText primary="HomePage" />
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton component="a">
              <ListItemIcon>
                <Home></Home>
              </ListItemIcon>
              <ListItemText primary="HomePage" />
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton component="a">
              <ListItemIcon>
                <ModeNight></ModeNight>
              </ListItemIcon>
              <Switch></Switch>
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default Sidebar;

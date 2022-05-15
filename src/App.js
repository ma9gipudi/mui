import Feed from './components/Feed';
import Rightbar from './components/Rightbar';
import Sidebar from './components/Sidebar';
import { Container, Box, Stack } from '@mui/material';
import Navbar from './components/Navbar';

function App() {
  return (
    <Box>
      <Navbar></Navbar>
      <Stack direction="row" justifyContent="space-evenly" spacing={2} backgroundColor="aliceblue">
        <Sidebar></Sidebar>
        <Feed></Feed>
        <Rightbar></Rightbar>
      </Stack>
    </Box>
  );
}

export default App;

import './ProfliePage.css';

import Profile from '../Profile/Profile';
import Contact from '../Contact/Contact';
import Educational from '../Educational/Educational';
import Expreince from '../Expreince/Expreince';
import Skill from '../Skill/Skill';
import Intersts from '../Intersts/Intersts';
import Guild from '../Guild/Guild';
import Button from '@mui/material/Button';
import { CssBaseline, Container } from '@mui/material';

function ProfliePage() {
  return (
    <div className="ProfliePage">
      <Profile />
      <Contact />
      <Educational />
      <Expreince />
      <Skill />
      <Intersts />
      <Guild />
      {/* <UserPage /> */}
      <div className='save-btn'>
        <Button variant="contained">SAVE</Button>
      </div>
    </div>
  );
}

export default ProfliePage;
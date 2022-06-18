import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function Email() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className='container'>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          // expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header">
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
            LinkedIN
          </Typography>
          <Typography sx={{ color: 'text.secondary' }}> <b>new notification</b> </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Your profile is looking great
            Your work and accomplishments are being recognized
            226 profile views
            See who's looking
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
          // expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>Code Chef</Typography>
          <Typography sx={{ color: 'text.secondary' }}>
           <b>New event invite</b>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Code-Chef invite you for the new june challenge begging on the 20/06 @ 9pm - 11pm. 
            Earn new badges and reach then next level. See you there on 20/06.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary
          // expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header">
            
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
            Account notification
          </Typography>
          <Typography sx={{ color: 'text.secondary' }}>
            New login detected
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            We have detected a new login IP for your Gmail account , 
            if the login was initiated by you please, check the OTP send to your registered mobile number.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary
          // expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel1bh-header">
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
            NETFLIX
          </Typography>
          <Typography sx={{ color: 'text.secondary' }}> <b>new notification</b> </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            We are back with some awesome new movies, check out our recent new arrivals at the https//netflix/browse
            We have all your favourite content updated 
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
        <AccordionSummary
          // expandIcon={<ExpandMoreIcon />}
          aria-controls="panel5bh-content"
          id="panel1bh-header">
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
            FB
          </Typography>
          <Typography sx={{ color: 'text.secondary' }}> <b>new notification</b> </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            TEJAS , someone is looking into your profile , check out who it is.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
        <AccordionSummary
          // expandIcon={<ExpandMoreIcon />}
          aria-controls="panel6bh-content"
          id="panel1bh-header">
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
            FACEBOOK
          </Typography>
          <Typography sx={{ color: 'text.secondary' }}> <b>new notification</b> </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            meta is giving a new cloud based source platform, checkout the new app and sign-up now for the additional features . 
            For more details check out the link,
            http//metaCLOUD.com
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

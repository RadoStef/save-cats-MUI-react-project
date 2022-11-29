import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Button } from '@mui/material';
import { styles } from './styles';


const AccordionElement = () => {

  return (
    <div>
      <Accordion sx={styles.accordion} elevation={0}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: '#FFF'}}/>}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Stories</Typography>
        </AccordionSummary>
        <AccordionDetails sx={styles.accordionDetails}>
          <Button sx={styles.accordionButtons}> Blog </Button>
          <Button sx={styles.accordionButtons}> Podcast </Button>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default AccordionElement;

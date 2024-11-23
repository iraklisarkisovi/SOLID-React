import React, { useState } from 'react';
import Main from '../Main';
import { Box, Button, OutlinedInput } from '@mui/material';
import LoskovTheory from '../LiskovTheory';
import LiskovTheory from '../LiskovTheory';

const Umeinesi: React.FC = () => {
  const [reff, setReff] = useState<string>('');  

  const onchange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setReff(e.target.value); 
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Submitted value:', reff);
  };

  return (
    <div>
      <Box>
        <form onSubmit={handleSubmit}>
          <OutlinedInput
            type="text"
            placeholder="Your Name"
            sx={{ height: '40px', margin: '10px', borderRadius: '50px'}}
            onChange={onchange}  
            value={reff} 
          />
          <Button type="submit" variant="contained" sx={{ borderRadius: '20px' }}>
            Submit
          </Button>
        </form>
      </Box>
      <Main lastname="random" person={reff} />
      <LiskovTheory
        person={reff}
        lastname="lastname"
        address={{ country: 'georgia', city: 'lagodekhi', street: 'random', number: '21' }}
      />
    </div>
  );
};

export default Umeinesi;
import { Box, Button, OutlinedInput } from '@mui/material';
import React, { useRef } from 'react';

const InputFields: React.FC = () => {
  const Reff = useRef<HTMLInputElement | null>(null);

  const onchange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value); 
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (Reff.current) {
      console.log('Submitted value:', Reff.current.value);
    }
  };

  return (
    <Box>
      <form onSubmit={handleSubmit}>
        <OutlinedInput
          type="text"
          placeholder="Your Name"
          sx={{ height: '40px', margin: '10px', borderRadius: '50px' }}
          inputRef={Reff}
          onChange={onchange}
        />
        <Button type="submit" variant="contained" sx={{ borderRadius: '20px' }}>
          Submit
        </Button>
      </form>
    </Box>
  );
};

export default InputFields;
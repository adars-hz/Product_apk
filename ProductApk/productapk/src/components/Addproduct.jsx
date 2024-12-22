import { Button, TextField } from '@mui/material';
import React from 'react';

const Addproduct = () => {
  return (
    <div style={{ 
      maxWidth: '400px', 
      margin: '50px auto', 
      padding: '20px', 
      border: '1px solid #ccc', 
      borderRadius: '8px', 
      boxShadow: '0 2px 5px rgba(0,0,0,0.2)' 
    }}>
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Product Details</h2>
      <TextField
        label="Product Name" 
        variant="outlined" 
        fullWidth 
        style={{ marginBottom: '16px' }} 
      />

      <TextField  
        label="Image" 
        type="file" 
        InputLabelProps={{ shrink: true }} 
        fullWidth 
        style={{ marginBottom: '16px' }} 
      />

      <TextField 
        label="Price" 
        variant="outlined"
        type='Number' 
        fullWidth 
        style={{ marginBottom: '16px' }} 
      />
      <TextField  
        label="Category" 
        variant="outlined" 
        fullWidth 
        style={{ marginBottom: '16px' }} 
      />
      <Button variant="contained">ADD</Button>
      
    </div>
  );
};

export default Addproduct;

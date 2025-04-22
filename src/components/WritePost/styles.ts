import { styled } from "@stitches/react";


export const Container = styled('div', {
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  height: 120,
  background: '#FFFFFF',
  padding: '.8rem',
  borderRadius: 10,
  justifyContent: 'center',
  gap: '1rem',
  boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
});


export const FormContainer = styled('form', {
  display: 'flex',
  flexDirection: 'column',
  
  width: '100%',
  gap: '0.6rem',

  input: {
    width: '100%',
    borderRadius: 86,
    border: 0,
    padding: 18,
    fontSize: 18,
    background: '#F7F7F7',
    color: '$gray900',

    '&::placeholder': {
      color: '#C4C4CC',
    },
    '&:focus': {
      outline: 'none',
      background: '#F7F7F7',
      boxShadow: '0 0 0 2px rgb(223, 223, 223)',
      transition: 'box-shadow 0.2s',
    },

    '&.error': {
      borderColor: 'red',
      background: '#F7F7F7',
      boxShadow: '0 0 0 2px red',
      transition: 'box-shadow 0.2s',
    },
  }
})

export const InitialName = styled('span', {
  width: 50,
  height: 50,
  background: '#F7F7F7',
  borderRadius: 100,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '$xl',
  fontWeight: 'bold',
  color: '$gray900',
  fontFamily: 'Roboto, sans-serif',
  fontStyle: 'normal',
});

export const Button = styled('button', {
  width: '100%',
  maxWidth: 200,
  height: 50,
  background: '#00875F',
  borderRadius: 86,
  border: 0,
  color: '#FFFFFF',
  fontSize: '$lg',
  fontWeight: 'bold',
  cursor: 'pointer',

  '&:hover': {
    background: '#00B37E',
    transition: 'background-color 0.2s',
  },
});
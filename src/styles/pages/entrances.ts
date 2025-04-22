import { styled } from "@stitches/react";

export const Container = styled('main', {
  display: 'flex',
  flexDirection: 'column',
  gap: '2rem',
  width: '100%',
  maxWidth: 620,
  margin: '0 auto',
  marginTop: '6rem',

  h1: {
    fontSize: '2rem',
    color: '#333',
    textAlign: 'center',
  },

  a: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textDecoration: 'none',
    color: '#0070f3',
    fontSize: '1.2rem',
    '&:hover': {
      textDecoration: 'underline',
    },
  }

})

export const Form = styled('form', {
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  padding: '2rem',
  borderRadius: '8px',
  backgroundColor: 'white',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',

  input: {
    borderRadius: '1rem',
    border: 0,
    backgroundColor: '#f0f0f0',
    padding: '1rem',
    fontSize: '1rem',
    '&:focus': {
      outline: 'none',
      boxShadow: '0 0 0 2px #0070f3',
      backgroundColor: '#fff',
    },

    '&.error': {
      borderColor: 'red',
      background: '#F7F7F7',
      boxShadow: '0 0 0 2px red',
      transition: 'box-shadow 0.2s',
    },
  },
  label: {
    fontSize: '1rem',
    color: '#333',
  },

  button: {
    borderRadius: '1rem',
    border: 0,
    backgroundColor: '#0070f3',
    color: 'white',
    padding: '1rem',
    fontSize: '1rem',
    fontWeight: 'bold',
    cursor: 'pointer',
    marginTop: '1rem',
    '&:hover': {
      backgroundColor: '#005bb5',
    },
  },
})
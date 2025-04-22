import { styled } from "@stitches/react";

export const Container = styled('div', {
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  width: '100%',
  height: 'auto',
  background: '#FFFFFF',
  padding: '1.5rem',
  borderRadius: 10,
  justifyContent: 'center',
  gap: '1rem',
  boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
});

export const ContentContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  gap: '0.6rem',
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


export const HeaderContent = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '1rem',
  width: '100%',

  h2: {
    fontSize: 20,
    fontWeight: 600,
    color: '#202226',
  },
  span: {
    fontSize: 18,
    fontWeight: 400,
    color: '#202226',
  }
});

export const PostContent = styled('div', {
  display: 'flex',
  width: '100%',
  marginLeft: 65,

  p: {
    fontSize: 18,
    fontWeight: 400,
    color: '#838383',
  }
});

export const LikeContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '1rem',
  width: '100%',
  marginLeft: 125,
  marginTop: 10,

  button: {
    border: 0,
    cursor: 'pointer',
    display: 'flex',
    padding: 5,
    borderRadius: 100,
    background: 'transparent',
    alignItems: 'center',
    gap: '0.5rem',
    color: '#202226',
    fontWeight: 400,

    '&:hover': {
      backgroundColor: 'red',
      color: '#fff',
      transition: 'color 0.2s, background 0.2s',
    },

    '&.isActive': {
      backgroundColor: 'red',
      padding: 5,
      borderRadius: 100,
      transition: 'color 0.2s, background 0.2s',
      color: '#fff',

      '&:hover': {
        background: '#D20103',
        transition: 'color 0.2s, background 0.2s',
      }
    }
  },

  svg: {
    fontSize: 24,
    fontWeight: 400,
    cursor: 'pointer',  
  },

  span: {
    fontSize: 18,
    fontWeight: 400,
    color: '#202226',
  },
});

export const Divider = styled('div', {
  width: '100%',
  height: 1,
  background: '#E1E1E6',
  margin: '1rem 0',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  '&::before': {
    content: '',
    width: '100%',
    height: 1,
    background: '#E1E1E6',
    margin: '0 1rem',
  },
  '&::after': {
    content: '',
    width: '100%',
    height: 1,
    background: '#E1E1E6',
    margin: '0 1rem',
  },
})

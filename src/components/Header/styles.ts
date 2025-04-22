import { styled } from "@stitches/react";

export const Container = styled('header', {
  padding: '1rem 0',
  width: '100%',
  margin: '0 auto',
  background: '#31A7FB',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  zIndex: 1000,
  boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
  position: 'fixed',
})

export const Content = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
  maxWidth: 1220,
  margin: '0 auto',
  padding: '0 1rem',
})

export const ProfileContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '1rem',
  cursor: 'pointer',

  h2: {
    fontSize: 18,
    fontWeight: 600,
    color: '#FFFFFF',
  },
})

export const InitialName = styled('span', {
  width: 40,
  height: 40,
  background: '#F7F7F7',
  borderRadius: 100,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '1rem',
  fontWeight: 'bold',
  color: '$gray900',
  fontFamily: 'Roboto, sans-serif',
  fontStyle: 'normal',
});
import React from 'react';
import { useValue } from '../../App';
import AccessMessage from './AccessMessage';

const Protected = ({ children }) => {
  const {
    state: { currentUser },
  } = useValue();
  return currentUser ? children : <AccessMessage />;
};

export default Protected;
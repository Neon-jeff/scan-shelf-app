import React, { useState } from 'react';
import Success from '@/components/success/Success';

const ShelfUpdateSuccess = () => {
const [header] = useState("Library")
const [message] = useState("Shelf update successfully")
  return <Success header={header} message={message} />;
};

export default ShelfUpdateSuccess;
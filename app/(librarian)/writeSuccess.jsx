import React, { useState } from 'react';
import Success from '@/components/success/Success';

const WriteTagsSuccess = () => {
const [header] = useState("Write Tags")
const [message] = useState("Book added successfully")
  return <Success header={header} message={message} />;
};

export default WriteTagsSuccess;
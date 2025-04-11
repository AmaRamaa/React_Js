import React from 'react';
import { useNavigate } from 'react-router-dom';

const ReturnPage = () => {
  const navigate = useNavigate();

  return (
	<div>
	  <p>Card not found</p>
	  <button onClick={() => navigate(-1)} style={{ marginTop: '20px' }}>
		Back
	  </button>
	</div>
  );
};

export default ReturnPage;

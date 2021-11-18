import React from 'react';
import '../App.css';

const Header = () => {
  const headerStyle = {
    padding: '20px 0',
    lineHeight: '1.5em',
  };
  return (
    <div style={headerStyle}>
      <h1
        style={{
          fontSize: '6rem',
          fontWeight: '600',
          marginBottom: '2rem',
          lineHeight: `1rem`,
          color: `#ececec`,
          textTransform: `lowercase`,
        }}
      >
        TODOS
      </h1>
    </div>
  );
};
export default Header;

import React, { useState } from 'react';

const PasswordStrength = () => {
  const [password, setPassword] = useState('');
  const [strength, setStrength] = useState('');

  const checkStrength = (password) => {
    const len = password.length >= 8;
    const num = /\d/.test(password);
    const ucase = /[A-Z]/.test(password);
    const lcase = /[a-z]/.test(password);
    const specialChar= /[!@#$%^&*(),.?":{}|<>]/.test(password);

    const criteriaMet = [
      len,
      num,
      ucase,
      lcase,
      specialChar,
    ].filter(Boolean).length;

    if (criteriaMet >= 4) return 'Strong';
    if (criteriaMet === 3) return 'Medium';
    return 'Weak';
  };

  const handleChange = (event) => {
    const newPassword = event.target.value;
    setPassword(newPassword);
    setStrength(checkStrength(newPassword));
  };

  const getColor = () => {
    if (strength === 'Strong') return 'green';
    if (strength === 'Medium') return 'orange';
    return 'red';
  };

  return (
    <div>
      <h2>Password Strength Checker</h2>
      <input
        type="password"
        value={password}
        onChange={handleChange}
        placeholder="Enter your password"
      />
      <p style={{ color: getColor() }}>Password Strength: {strength}</p>
    </div>
  );
};

export default PasswordStrength;

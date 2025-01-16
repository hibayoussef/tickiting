import { useState } from 'react';

export default function useSignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async () => {
    if (!email || !password) {
      setError('All fields are required');
      return;
    }
    try {
      // إجراء تسجيل الدخول
    //   await loginUser({ email, password });
    } catch (err) {
      setError('Login failed');
    }
  };

  return {
    email,
    setEmail,
    password,
    setPassword,
    error,
    handleSubmit,
  };
}

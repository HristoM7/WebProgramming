import React, { useState } from "react";

const RegistrationForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleClear = () => {
    setName("");
    setEmail("");
    setPassword("");
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <>
      {}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Име:</label>
          <input
            id="name"
            type="text"
            placeholder="Въведи име"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="email">Имейл:</label>
          <input
            id="email"
            type="email"
            placeholder="Въведи имейл"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="password">Парола:</label>
          <input
            id="password"
            type="password"
            placeholder="Въведи парола"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button type="button" onClick={handleClear}>
          Изчисти
        </button>
      </form>

      {}
      <div>
        <p>Въведено име: {name || "(няма)"}</p>
        <p>Въведен имейл: {email || "(няма)"}</p>
        <p>Въведена парола: {password || "(няма)"}</p>
      </div>
    </>
  );
};

export default RegistrationForm;

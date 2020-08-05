import { h } from 'preact';
import { useState, useCallback } from 'preact/hooks';
import { submitterTeam } from './teamMembers';

export default () => {
  const [names, setNames] = useState([...submitterTeam]);

  const removeName = useCallback((name) =>
    setNames(names.filter((n) => n !== name)),
  );
  const addName = useCallback((name) => setNames([...names, name]));

  return (
    <div>
      <label htmlFor="add-name-input"></label>
      <input id="add-name-input" type="text" />
      <button type="button">Add</button>
    </div>
  );
};

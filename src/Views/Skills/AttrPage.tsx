import React from 'react';

function AttrPage(props: any) {
  return (
    <div>
      <p>
        Email:{' '}
        <input
          name="email"
          value={props.getState('email', '')}
          onChange={props.handleChange}
        />
      </p>
      <p>
        Phone:{' '}
        <input
          name="Phone"
          value={props.getState('phone', '')}
          onChange={props.handleChange}
        />
      </p>
      <button onClick={props.prev}>Previous</button>
      <button onClick={props.next}>Next</button>
    </div>
  );
}

export default AttrPage;

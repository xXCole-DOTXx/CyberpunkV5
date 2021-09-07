import React from 'react';

function CoolPage(props: any) {
  return (
    <div>
      <p>Name: {props.state.name}</p>
      <p>Surname: {props.state.surname}</p>
      <p>Email: {props.state.email}</p>
      <p>Phone: {props.state.phone}</p>
      <button onClick={props.prev}>Previous</button>
    </div>
  );
}

export default CoolPage;

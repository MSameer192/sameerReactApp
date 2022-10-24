import React from 'react';

export default function Alert(props) {
  
  // const capittalize = (word) =>{
  //   const lower = word.toLowerCase()
  //   return lower.charAt(0).toUpperCase() + lower.slice(1);
  // }

  
  return (
    props.alert && <div className={`container mt-2 alert alert-${props.alert.type} alert-dismissible fade show`}  role="alert">
        <strong>Success</strong>: {props.alert.msg}
    </div>
  );
}

import React from "react";

export default function Alert(props) {
    const capitalize = (word)=>{
        return word.charAt(0).toUpperCase()+word.slice(1);
    }
  return (
   props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
      <strong>{capitalize(props.alert.type)}</strong> {props.alert.msg}
      <button
        type="button"
        className="btn-close"
        aria-label="Close"
        onClick={props.onClose}
      ></button>
    </div>
  );
}

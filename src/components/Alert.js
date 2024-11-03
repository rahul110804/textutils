import React, { useState } from 'react';

function Alert(props) {
  const [showAlert, setShowAlert] = useState(true);

  const handleClose = () => {
    setShowAlert(false);
  };

  return (
    <div>
      {showAlert && props.Alert && (
        <div className="container box">
          <div className="alert alert-warning alert-dismissible fade in show box2" role="alert">
            <div className="box3">
              <strong>{props.Alert.type}</strong>:{props.Alert.msg}
            </div>
            <button type="button" aria-label="Close" onClick={handleClose}>
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Alert;
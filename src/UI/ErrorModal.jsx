// import React from 'react'
// // import Card from "./Card"
// import Card from './Card.jsx'
// import classes from "./ErrorModel.module.css"
// import Button from "./Button"

// function ErrorModal(props) {
//   return (
//     <div>
//         <div className={classes.backdrop}/>
//     <Card className={classes.modal}>

//         <header className={classes.header}>
//             <h2>{props.title}</h2>
//         </header>
//         <div className={classes.content}>
//             <p>{props.message}</p>
//         </div>
//         <footer className={classes.actions}>
//             <Button onClick={props.onConfirm} >Okey</Button>
//         </footer>

//     </Card>
//     </div>
//   )
// }

// export default ErrorModel

import React from 'react';

import Card from './Card';
import Button from './Button';
import classes from './ErrorModal.module.css';

const ErrorModal = (props) => {
  return (
    <div>
      <div className={classes.backdrop} />
      <Card className={classes.modal}>
        <header className={classes.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={classes.content}>
          <p>{props.message}</p>
        </div>
        <footer className={classes.actions}>
          <Button onClick={props.onConfirm}>Okay</Button>
        </footer>
      </Card>
    </div>
  );
};

export default ErrorModal;
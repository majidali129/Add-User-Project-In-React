import React, {Fragment} from 'react'
// import { ReactDOM } from 'react'
import ReactDOM from "react-dom"
// import Card from "./Card"
import Card from './Card.jsx'
import classes from "./ErrorModal.module.css"
import Button from "./Button"

function ErrorModal(props) {

  const Backdrop = (props)=>{
    return (<div className={classes.backdrop}/>)
  }

  const Modal = (props) => {
    return (
      <Card className={classes.modal}>
      <header className={classes.header}>
          <h2>{props.title}</h2>
      </header>
      <div className={classes.content}>
          <p>{props.message}</p>
      </div>
      <footer className={classes.actions}>
          <Button onClick={props.onClick} >Okey</Button>
      </footer>
  </Card>
    )
  }

  return (
    <Fragment>
      {
        ReactDOM.createPortal(<Backdrop/> , document.getElementById('backdrop__root'))
      }
      {
        ReactDOM.createPortal(<Modal title={props.title} message={props.message} onClick={props.onConfirm}/> , document.getElementById('modal__root'))
      }

   

    </Fragment>
  )
}

export default ErrorModal

// import React from 'react';

// import Card from './Card';
// import Button from './Button';
// import classes from './ErrorModal.module.css';

// const ErrorModal = (props) => {
//   return (
//     <div>
//       <div className={classes.backdrop} />
//       <Card className={classes.modal}>
//         <header className={classes.header}>
//           <h2>{props.title}</h2>
//         </header>
//         <div className={classes.content}>
//           <p>{props.message}</p>
//         </div>
//         <footer className={classes.actions}>
//           <Button onClick={props.onConfirm}>Okay</Button>
//         </footer>
//       </Card>
//     </div>
//   );
// };

// export default ErrorModal;
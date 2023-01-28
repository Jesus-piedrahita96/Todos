import React from "react";

function withStorageListener(WrappedComponent) {
  return function WrappedComponentWithStorageListener(props) {
    const [ storage, setStorage ] = React.useState(false)

    window.addEventListener('storage', (change) => {
      if (change.key === localStorage.getItem('TODOS_V1')) {
        console.log('cambio el estado del storage')
        setStorage(true)
      }
    })

    const toggleShow = () => {
      props.sincronize();
      setStorage(false);
    };


    return (
      <WrappedComponent
        show={storage}
        toggleShow={toggleShow}
      />
    )
  }
}

export { withStorageListener }
    
import React from "react";
import styles from './Display.css'

const Display = (props) => {
  return (
  <div className={styles.display}>{props.data}</div>
  );
};

export default Display;
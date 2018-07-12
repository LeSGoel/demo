import React from 'react';
import objstr from 'obj-str';
import styles from 'button.block.css';

export function ButtonCSS({size,inverse,icon,children}){
const style = objstr({
    [styles]:true,
    [styles.inverse()]: inverse,
    [styles.size(size)]: true
});
return(
    <button className={style}>
        {icon && <span className={styles.icon}>{icon}</span>}
        {children}
        </button>
);
}

export default class Button extends React.PureComponent{
    render(){
        return(
            <h1>Hello</h1>
        )
    }
}
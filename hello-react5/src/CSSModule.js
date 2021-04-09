import React from 'react';
import styles from './CSSModule.module.scss';
const CSSModule = () => {
    return(
        <div className={`${styles.wrapper} ${styles.inverted}`}>
            안농, 나는 커여운 <span className="something">주허닝</span>
        </div>
    );
};

export default CSSModule;
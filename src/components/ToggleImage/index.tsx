import React, { useState } from 'react';
import styles from './styles.module.css';

const ToggleImage: React.FC<{ src: string; alt: string }> = ({ src, alt }) => {
    const [isSmall, setIsSmall] = useState(true);

    const toggleSize = () => {
        setIsSmall(!isSmall);
    };

    return (
        <img
            src={src}
            alt={alt}
            className={isSmall ? styles.smallImage : styles.imageStyle}
            onClick={toggleSize}
            role='button'
            aria-label='Toggle image size'
        />
    );
};

export default ToggleImage;

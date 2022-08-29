import React from 'react';
import preloader from '../../../assets/images/loading.gif';

const PreLoader = () => {
    return (
        <div>
            <img width='50px' src={preloader} alt="preloader image" />
        </div>
    );
};

export default PreLoader;
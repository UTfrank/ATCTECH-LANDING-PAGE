'use client';

import { useEffect } from 'react';
import AOS from 'aos';

const AOSInit = () => {
    useEffect(() => {
        AOS.init({
            
            duration: 800, 
            easing: 'ease-out-cubic', 
            once: true, 
        });
    }, []);

    return null; 
};

export default AOSInit;
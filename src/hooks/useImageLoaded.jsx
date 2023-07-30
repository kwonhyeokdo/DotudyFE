import { useEffect, useState } from 'react';

const useImageLoaded = (src) => {
    const [loaded, setLoaded] = useState(null);

    useEffect(()=>{
        const image = new Image();
        image.src = src;
        image.onload = ()=>{
            setLoaded(src);
        };
    }, [src]);

    return loaded;
};

export default useImageLoaded;
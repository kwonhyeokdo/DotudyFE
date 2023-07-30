import { Box, CircularProgress } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react';

/**
 * @description <br/>
 * 검은색 배경 가운데에 \<CircularSize/>를 보여준다. z-index 1000을 갖는다.
 * @props <br/>
 * open : true일 경우 show, false일 경우 hide.
 * @type <br/>
 * Self Closing Tags
 */
const Loading = ({open}) => {
    const [circularSize, setCircularSize] = useState(0);
    const ref = useRef(null);

    useEffect(()=>{
        if(open){
            const {clientHeight} = ref.current;
            setCircularSize(clientHeight / 100 * 8);
        }
    }, [open]);

    return (
        <>
        {
            open
            && 
            <Box 
                sx={{
                    position: "fixed",
                    width: "100vw",
                    height: "100vh",
                    backgroundColor: `rgba(0, 0, 0, 1)`,
                    zIndex: 1000,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                }}
                ref={ref}
            >
                <CircularProgress
                    size={circularSize}
                />
            </Box>
        }
        </>
    );
};

export default Loading;
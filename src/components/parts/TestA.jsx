import { Box } from "@mui/material";
import { useEffect, useState } from "react";

const TestA = ({children}) => {
    const [loading, setLoading] = useState(false);
    
    useEffect(()=>{
        setLoading(true);
    }, [loading]);

    if(!loading){
        return (
            <Box>
                Loading...
            </Box>
        );
    }else{
        return (
            <>
                {children}
            </>
        );
    }
};

export default TestA;
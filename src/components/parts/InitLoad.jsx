import { Box } from "@mui/material";
import Loading from "components/parts/Loading";
import axiosInstance from "module/axios/Axios";
import { useEffect, useRef, useState } from "react";

/**
 * @description <br/>
 * - 다국어가 모두 적용될때 까지 \<Loading/>을 보여준다.
 * - background-image가 모두 로딩(backgroundImage: url('none')이 아닐경우)될 때까지 \<Loading/>을 보여준다.
 * @type <br/>
 * Paired Tags
 */
const InitLoad = ({children}) => {
    const ref = useRef();
    const [showLoading, setShowLoading] = useState(true);
    
    useEffect(()=>{
        const bgImgArr = [...ref.current.querySelectorAll("[style*='background-image']")];
        const languageCodeArr = [...ref.current.querySelectorAll("[data-language-code]")].map(el=>el.dataset.languageCode);
        //const a = axiosInstance.post("/postlanguage", {codeList: languageCodeArr});
        const a = axiosInstance.get("/language", {params:{codeList: languageCodeArr}});
        //const awaitLanguage = async (languageCodeArr) => await Axios.get("/language", languageCodeArr);
        const imageInterval = setInterval(()=>{
            const find = bgImgArr.find((bgimgStr)=>bgimgStr.style.backgroundImage.includes("none"));
            if(find){
                setShowLoading(true);
            }else{
                clearInterval(imageInterval);
                setShowLoading(false);
            }
        }, 50);
    }, []);

    return(
        <Box ref={ref}>
            <Loading open={showLoading}/>
            {children}
        </Box>
    );
};

export default InitLoad;
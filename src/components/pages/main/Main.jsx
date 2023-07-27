import { useEffect, useRef } from "react";
import { Stack } from "@mui/material";
import Content1 from "./contents/Content1";
import Content2 from "./contents/Content2";

/**
 * @description <br/>
 * - '/' url에 대응하는 main 페이지.
 * - n개의 content를 갖는다.
 * @type <br/>
 * Self Closing Tags
 */
const Main = () => {
    const content1ScrollRef = useRef(null);
    const content2ScrollRef = useRef(null);
    
    useEffect(()=>{
        // Content 단락별 부드러운 스크롤
        const handleScroll = (e)=>{
            e.preventDefault();
            
            // vh: 100에 대한 px을 구한다.
            const vh100 = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
            const seqScrollRef = [content1ScrollRef, content2ScrollRef];
            const currentScrollYPos = document.documentElement.scrollTop;
            // 마우스 휠을 위로 올릴경우 -px, 아래로 내릴경우 +px 값을 갖는다.
            const dirctY = e.deltaY;

            let index;
            if(dirctY > 0){
                index = parseInt((currentScrollYPos + dirctY) / vh100) + 1;
                if(index >= seqScrollRef.length){
                    index = seqScrollRef.length - 1;
                }
            }else{
                index = parseInt((currentScrollYPos - dirctY) / vh100) - 1;
                if(index < 0){
                    index = 0;
                }
            }
            seqScrollRef[index].current.scrollIntoView({behavior: "smooth"});
        };

        
        const timer = setInterval((e) => {
            window.addEventListener("wheel", handleScroll, {passive: false});    
        }, 100);

        return () => {
            clearInterval(timer);
            window.removeEventListener("wheel", handleScroll);
        }
    });

    return (
        <Stack>
            <Content1 ref={content1ScrollRef}/>
            <Content2 ref={content2ScrollRef}/>
        </Stack>
    );
};

export default Main;
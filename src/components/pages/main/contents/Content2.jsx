import React, { forwardRef, useEffect } from 'react';
import { Button, Container, Typography } from '@mui/material';
import TouchRipple from '@mui/material/ButtonBase/TouchRipple';

import wallpaper from 'assets/img/pages/main/wallpaper2.webp';
import FullBox from 'components/parts/FullBox';

/**
 * @description <br/>
 * \<Main/>의 2번째 content.
 * @props <br/>
 * propScrollRef : \<Main/>에서 스크롤 이동 목적지. 결과적으로 \<FullBox/>의 ref
 * @type <br/>
 * Self Closing Tags
 */
const Content2 = forwardRef((props, propScrollRef) => {
    const rippleRef = React.useRef(null);
    const buttonRef = React.useRef(null);

    useEffect(()=>{
        const triggerRipple = () => {
            const container = buttonRef.current;
            const rect = container.getBoundingClientRect();
        
            rippleRef.current.start(
                {
                    clientX: rect.left + rect.width / 2,
                    clientY: rect.top + rect.height / 2,
                },
                { center: false }, // when center is true, the ripple doesn't travel to the border of the container
            );
        
            setTimeout(() => rippleRef.current.stop({}), 320);
        };

        triggerRipple();
        let rippleInterval = setInterval(()=>{
            triggerRipple();
        }, 10000);

        return ()=>{
            clearInterval(rippleInterval);
        };
    });

    return (
        <FullBox
            ref={propScrollRef}
            background={wallpaper}
        >
            <Container
                maxWidth = "xl"
                sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "flex-end"
                }}
            >
                <Typography
                    color="#ffffff"
                    variant="h1"
                    sx={{fontWeight: 600}}
                >
                    공부는 환경입니다
                </Typography>
                <Typography
                    color="#efefef"
                    sx={{
                        fontWeight: 400
                    }}
                    variant="h3"
                >
                    도터디에서 여러 학습 환경을 경험해보세요
                </Typography>
                <Button
                    ref={buttonRef}
                    sx={{
                        marginTop: 3,
                        borderRadius: "5px",
                        color: "#FFFFFF",
                        backgroundColor: "rgba(200, 200, 200, 0.1)",
                        border: "solid 1px rgba(255, 255, 255, 0.2)",
                        fontSize: "1.6rem",
                        "&:hover" :{
                            border: "solid 1px rgba(255, 255, 255, 0.3)",
                            backgroundColor: "rgba(200, 200, 200, 0.2)",
                        }
                    }}
                    variant="contained"
                    size="large"
                >
                    Start
                    <TouchRipple ref={rippleRef} center />
                </Button>
            </Container>
        </FullBox>
    );
});

export default Content2;
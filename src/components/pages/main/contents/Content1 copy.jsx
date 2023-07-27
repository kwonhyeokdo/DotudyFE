import React, { forwardRef, useEffect } from 'react';
import { Box, Button, Container, Typography } from '@mui/material';
import TouchRipple from '@mui/material/ButtonBase/TouchRipple';

import wallpaper from 'assets/img/pages/main/wallpaper1.webp';

// Main.jsx의 부드러운 스크롤 타겟 대상으로 propScrollRef를 사용한다.
const Content1 = forwardRef((props, propScrollRef) => {
    
    // Main.jsx의 부드러운 스크롤 타겟 대상으로 propScrollRef를 사용한다.
    const rippleRef = React.useRef(null);
    const buttonRef = React.useRef(null);

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

    useEffect(()=>{
        // 10초마다 버튼의 ripple을 작동시킨다.
        triggerRipple();
        let rippleInterval = setInterval(()=>{
            triggerRipple();
        }, 10000);

        return ()=>{
            clearInterval(rippleInterval);
        };
    });

    const styles = {
        wallpaper: {
            backgroundSize: `cover`,
            backgroundImage: `url(${wallpaper})`
        }
    };

    return (
        <Box
            ref={propScrollRef}
            style={styles.wallpaper}
            sx={{
                width: "100vw",
                height: "100vh"
            }}
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
        </Box>
    );
});

export default Content1;
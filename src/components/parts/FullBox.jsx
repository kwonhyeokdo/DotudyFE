import { Box } from '@mui/material';
import useImageLoaded from 'hooks/useImageLoaded';
import React, { forwardRef } from 'react';

/**
 * @description <br/>
 * width: 100vw, height: 100vh를 갖는 컴포넌트.
 * @props
 * - ref      : \<Box>의 ref.
 * - style    : import된 사진 파일.
 * - children : 하위 자식요소.
 * @type <br/>
 * Paired Tags
 */

const FullBox = forwardRef(({background, children}, ref) => {
    const backgroundLoaded = useImageLoaded(background);

    const styles = {
        wallpaper: {
            backgroundSize: `cover`,
            backgroundImage: `url(${backgroundLoaded || "none"})`,
            backgroundPosition: "center"
        }
    };

    return (
        <Box
            ref={ref}
            style={styles.wallpaper}
            sx={{
                width: "100vw",
                height: "100vh"
            }}
        >
            {children}
        </Box>
    );
});


export default FullBox;
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const useResponsive = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    return { isMobile };
};

export default useResponsive;
/* 
xs = for mobile
sm = for tablet
md = for laptop
lg = for desktop

 */
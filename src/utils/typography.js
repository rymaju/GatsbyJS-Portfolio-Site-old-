import Typography from "typography";
import theme from "typography-theme-bootstrap";

theme.headerWeight = `700`;
theme.headerGray = `0`;
theme.overrideThemeStyles = () => ({
    a: {
        //color: `#4D97BB;`,
        color: `#0077aa;`,
        textDecoration: `none`,
    },
});

const typography = new Typography(theme);

export const { scale, rhythm, options } = typography;
export default typography;

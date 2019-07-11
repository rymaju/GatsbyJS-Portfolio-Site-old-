import Typography from 'typography';
import theme from 'typography-theme-bootstrap';

theme.headerWeight = `700`;
theme.headerGray = `0`;

const typography = new Typography(theme)

export const {scale, rhythm, options} = typography;
export default typography;
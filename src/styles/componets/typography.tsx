import styled from "styled-components";
import { Text } from "../componets/text/text";

type tColors =
        "--brand-1"|
        "--brand-2"|
        "--brand-3"|
        "--brand-4"|
        "--grey-0"|
        "--grey-1"|
        "--grey-2"|
        "--grey-3"|
        "--grey-4"|
        "--grey-5"|
        "--grey-6"|
        "--grey-7"|
        "--grey-8"|
        "--grey-9"|
        "--grey-10"|
        "--whiteFixed"|
        "--alert-1"|
        "--alert-2"|
        "--alert-3"|
        "--sucess-1"|
        "--sucess-2"|
        "--sucess-3"|
        "--random-1"|
        "--random-2"|
        "--random-3"|
        "--random-4"|
        "--random-5"|
        "--random-6"|
        "--random-7"|
        "--random-8"|
        "--random-9"|
        "--random-10"|
        "--random-11"|
        "--random-12"

interface iStyledTitleProps {
  color?: tColors;
  weight?: number;
  size?: number;
  height?: number;
}

export const StyledTitle = styled(Text)<iStyledTitleProps>`
  color: var(${({ color }) => color});
  font-weight: ${({ weight }) => weight};
  font-size: ${({ size }) => size}px;
  line-height: ${({ height }) => height}px;
`;
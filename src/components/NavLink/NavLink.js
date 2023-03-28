import react from "react";
import styled from "styled-components";
import { WEIGHTS} from '../../constants';

const NavLink = ({children, ...delegated}) =>{
    return(
        <Wrapper {...delegated}>
          <MainText>{children}</MainText>
          <HoverText>{children}</HoverText>
        </Wrapper>
    );
};

const Wrapper = styled.a`
  position:relative;
  display: block;

  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--color-gray-900);
  font-weight: ${WEIGHTS.medium};

  overflow: hidden;
  &:first-of-type {
    color: var(--color-secondary);
  }
`;

const Text = styled.span`
    display: block;
    transform: translateY(var(--from));
    transition: transform 800ms;

    ${Wrapper}:hover & {
        transform: translateY(var(--to));
        transition: transform 500ms;
    }
`;

const MainText = styled(Text)`
    --from:0%;
    --to:-100%;
`;

const HoverText = styled(Text)`
    --from:100%;
    --to:0%;
    

    position: absolute;
    top:0;
    left:0;
    height: 100%;
    width: 100%;
    font-weight: ${WEIGHTS.bold};
`;


export default NavLink;
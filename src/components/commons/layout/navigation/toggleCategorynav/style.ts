import styled from '@emotion/styled';

export const Nav = styled.nav`
  width: 30%;
  min-width: 450px;
  padding: 5px 5px;
  display: flex;
  align-items: center;
  position: absolute;
  top: 0%;
  left: 0%;
  transition: all 0.5s ease-in;
  /* transform: ${(props) => (props.isOpen ? 'translateY(100%)' : 'auto')}; */

  ul {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    list-style: none;
    padding-top: 10px;
    font-size: 1.5rem;

    li {
      font-weight: 400;
    }
  }
`;

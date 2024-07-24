import styled from '@emotion/styled';

const getVisibleTransForm = (props) => {
  return `translateZ(${props.zPosition}px)`;
};

const getBehindTransForm = (props) => {
  return `rotateX(-90deg) translateZ(${-props.zPosition}px)`;
};

export const About_Wrapper = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  margin-bottom: 15%;
`;

export const About_Title = styled.span`
  font-size: 3rem;
  font-weight: 300;
  margin-bottom: 5%;
`;

export const Items = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  flex-wrap: wrap;
  perspective: 25000px;
  gap: 5px;

  position: relative;
`;

export const Cube = styled.div`
  width: 18%;
  min-width: 10px;

  transform-style: preserve-3d;
  transition: transform 0.5s ease-out 0.05s;

  /* :nth-of-type(1) {
    top: 0;
    left: 0;
  }

  :nth-of-type(2) {
    top: 0;
    left: 20%;
  }

  :nth-of-type(3) {
    top: 0;
    left: 40%;
  }

  :nth-of-type(4) {
    top: 0;
    left: 60%;
  }

  :nth-of-type(5) {
    top: 0;
    left: 80%;
  } */

  /* :nth-of-type(6) {
    top: 50%;
    left: 0;
  }

  :nth-of-type(7) {
    top: 50%;
    left: 20%;
  }

  :nth-of-type(8) {
    top: 50%;
    left: 40%;
  }

  :nth-of-type(9) {
    top: 50%;
    left: 60%;
  }

  :nth-of-type(10) {
    top: 50%;
    left: 80%;
  } */

  :hover {
    transform: ${(props) => (props.index % 2 > 0 ? 'rotateX(90deg)' : 'none')};
  }
`;

export const Visible = styled.div`
  width: 100%;
  padding-bottom: 100%;

  background-image: url('/testImg.jpeg');
  background-size: 600% 300%;
  background-position: ${({ bgPosition }) => bgPosition};

  transform: ${(props) => getVisibleTransForm(props)};
`;

export const Behind = styled.div`
  width: 100%;
  position: absolute;
  padding-bottom: 100%;
  background-color: #403234;
  opacity: 0.8;

  transform: ${(props) => getBehindTransForm(props)};
`;

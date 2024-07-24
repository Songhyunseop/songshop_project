import styled from '@emotion/styled';

const getMargin = (props) => {
  const defaultMargin = { top: 0, bottom: 0, left: 0, right: 0 };

  props.forEach((el) => {
    const marginInput = el.split(' ');
    defaultMargin[marginInput[0]] = Number(marginInput[1]);
  });

  const data = `${defaultMargin.top}px ${defaultMargin.right}px ${defaultMargin.bottom}px ${defaultMargin.left}px`;

  return data;
};

export const Footer_Wrapper = styled.footer`
  width: 100%;
  min-height: 450px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3% 5% 0 5%;
  /* border: 3px solid blue; */
`;

export const Shop_Name = styled.p`
  font-size: 3rem;
  margin-bottom: 30px;
  width: 100%;
  font-weight: 400;
`;

export const Info = styled.div`
  width: 100%;
  display: flex;
  padding: 2% 0 2% 0;
  border-top: 1px solid rgba(230, 230, 230, 1);
  border-bottom: 1px solid rgba(230, 230, 230, 1);
`;

export const Info_Detial = styled.div`
  width: 100%;
  min-height: 200px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0 2% 0 2%;
  line-height: 1.3em;
  border-left: 1px solid rgba(230, 230, 230, 0.7);
  border-right: 1px solid rgba(230, 230, 230, 0.7);

  :nth-of-type(1) {
    flex: 1;
  }

  :nth-of-type(2) {
    flex: 1;
  }

  :nth-of-type(3) {
    flex: 2;
  }

  :nth-of-type(4) {
    flex: 1.3;
  }
`;

export const Address = styled.address`
  font-style: normal;
  margin: 5% 0;

  font-size: ${({ size }) => (size ? `${size}rem` : '1rem')};
  font-weight: ${({ weight }) => (weight ? weight : 'normal')};
`;

export const Content = styled.p`
  font-size: ${({ size }) => (size ? `${size}rem` : '1.rem ')};
  font-weight: ${({ weight }) => (weight ? weight : '400')};

  margin: ${({ margin }) => (margin ? getMargin(margin) : 0)};
`;

export const Index = styled.p`
  width: 100%;
  display: block;
  justify-content: flex-start;
  padding: 0 0 5px 0;
  font-size: ${({ size }) => (size ? `${size}rem` : '1.rem ')};
  font-weight: ${({ weight }) => (weight ? weight : '400')};
`;

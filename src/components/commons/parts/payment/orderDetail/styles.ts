import styled from '@emotion/styled';

export const OrderDetail_Wrapper = styled.section`
  margin-top: 2rem;
`;

export const Input_Container = styled.section`
  height: ${(props) => (props.isAddress ? '150px' : '50px')};
  display: flex;
  justify-content: space-between;

  &:not(:nth-of-type(3)) {
    margin-bottom: 3.5rem;
  }
`;

export const Input_Name = styled.span`
  font-size: 2rem;
  font-weight: 400;
  position: relative;

  &::after {
    content: '*';
    margin-left: 0.5rem;
    display: inline-block;
    color: #315ac4;
    position: absolute;
    top: 0.4rem;
  }
`;

export const Address_Input_Container = styled.section`
  width: 70%;
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
`;

export const Post_Input_Container = styled.div`
  display: flex;
  align-items: flex-start;
`;

export const Search_Address_Btn = styled.button`
  width: 10%;
  max-height: 40px;
  min-height: 40px;
  height: 100%;
  font-size: 1.4rem;
  letter-spacing: 0.08rem;
  font-weight: 500;
  text-align: center;
  margin-left: 0.5rem;
  border: none;
  color: #f7f3f5;
  background-color: #687477;
`;

export const Phone_Input_Container = styled.div`
  width: 70%;
  display: flex;
  justify-content: space-between;
`;

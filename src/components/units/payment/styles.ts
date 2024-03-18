import styled from '@emotion/styled';

export const Main = styled.main`
  max-width: 1280px;
  max-height: 1500px;
  margin: 0 auto;
  padding: 0 10rem;
  background-color: #f8f8f8;
`;

export const Index_Container = styled.article`
  background-color: #ffffff;
  height: 70px;
  display: flex;
  align-items: center;
  padding-left: 1.5rem;
`;

export const Order_Info = styled.p`
  font-size: 2.8rem;
  font-weight: 600;
`;

export const Content_Detail = styled.article`
  padding: 0 1.5rem 0 1.5rem;
  margin-bottom: 2rem;
  background-color: #ffffff;
  border-top: 1px solid #d2d2d2;
  border-bottom: 1px solid #d2d2d2;
`;

export const Pay_Method = styled.div`
  height: 80px;
  display: flex;
  align-items: center;
  margin-top: 2rem;
`;

export const Pay_Card = styled.div`
  width: 17%;
  height: 70%;
  font-size: 2.2rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #d2d2d2;
`;

export const Pay_Kakao = styled.div`
  width: 17%;
  height: 70%;
  margin-left: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f7e600;
`;

export const Payment_Icon = styled.img`
  width: 50%;
  height: 50%;
`;

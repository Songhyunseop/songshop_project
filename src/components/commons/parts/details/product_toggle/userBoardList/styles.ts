import { IReviewDetailProps } from '@/commons/types/detail_type';
import styled from '@emotion/styled';

export const ReviewComponents = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 1250px;
`;

export const Top = styled.section`
  max-height: 80px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 7rem;
`;

export const Title = styled.h1`
  font-size: 2.6rem;
  font-weight: 400;
`;

export const Sub_Title = styled.span`
  font-size: 1.6rem;
  font-weight: 300;
`;

export const Body = styled.section`
  margin-bottom: 5rem;
  width: 100%;
  position: relative;
  z-index: 2;
`;

export const User_Review = styled.article`
  border-top: 2px solid #d2d2d2;
  height: 10%;
  min-height: 80px;
  display: flex;
  align-items: center;
  padding: 0 3rem;
`;

export const Review_Detail = styled.article<IReviewDetailProps>`
  transition: min-height 0.28s ease;
  width: 100%;
  min-height: ${(props) => (props.clickedInfoArr ? '350px' : 0)};
  border: 3px solid red;
  background-color: gray;
`;

export const Index = styled.span`
  display: inline-block;
  width: 10%;
  font-size: 1.8rem;
  font-weight: 400;
`;

export const Review_Title = styled.span`
  display: inline-block;
  width: 90%;
  font-size: 1.8rem;
  font-weight: 400;
`;

export const Review_Rate = styled.span`
  font-size: 1.8rem;
`;

export const Bottom = styled.section`
  min-height: 80px;
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

export const Button = styled.button`
  width: 120px;
  height: 40px;
  font-size: 1.5rem;
  font-weight: 700;
  color: #f7f3f5;
  border: none;
  letter-spacing: 0.1rem;
  background-color: #e2c2b3;
`;

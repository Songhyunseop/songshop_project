import { IDetailProps } from '@/commons/types/detail_type';
import styled from '@emotion/styled';

export const Detail_Product = styled.section`
  border-top: 1.5px solid #d2d2d2;
  border-bottom: 1.5px solid #d2d2d2;
  padding-top: 3rem;
  padding-bottom: 1.8rem;
`;

export const Info = styled.div<IDetailProps>`
  width: 100%;
  display: flex;
  height: ${(props) => (props.isSummary ? '12.5rem' : 'none')};
  margin-bottom: 1.2rem;
`;

export const Index = styled.div`
  width: 17%;
  min-width: 110px;
  font-size: 1.7rem;
  font-weight: 300;
  margin-right: 10rem;
`;

export const Info_Contents = styled.span`
  width: 100%;
  font-size: 1.6rem;
`;

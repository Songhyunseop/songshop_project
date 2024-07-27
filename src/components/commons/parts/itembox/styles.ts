import styled from '@emotion/styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const ItemBox = styled.div<{ height: number; minWidth: number }>`
  position: relative;
  min-width: ${({ minWidth }) => (minWidth ? `${minWidth}px` : 0)};
  font-size: 2rem;
  padding-bottom: ${({ height }) => (height ? `${height}%` : 0)};
  height: 100%;

  @media screen and (max-width: 1280px) {
    min-width: 200px;
  }

  @media screen and (max-width: 780px) {
    min-width: 140px;
  }
`;

export const Item_Contents = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  border: 3px solid blue;
`;

export const Label = styled.div`
  width: 23%;
  height: 10%;
  font-weight: 500;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #f7f3f5;
  background-color: #e2c2b3;
`;

export const Image_Section = styled.div`
  position: relative;
  /* padding-bottom: 100%; */
  height: 100%;
  width: 100%;
`;

export const Item_Img = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const ItemInfo = styled.article`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding-top: 3%;
`;

export const Info_Left = styled.section`
  width: 50%;
`;

export const Category = styled.div`
  display: flex;
`;
export const Colors_Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 2px;
  /* border: 2px solid blue; */
`;

export const Color = styled.div`
  border-radius: 10%;
  width: 1.1vw;
  height: 1.1vw;
  background-color: ${({ color }) => color};

  :not(:nth-last-of-type(3)) {
    /* margin-left: 5%; */
  }
`;

export const CountsInfo = styled.section`
  position: relative;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-top: 15%;
`;

export const Liked = styled.div<{ isLiked: boolean }>`
  display: flex;
  margin-right: 0.3vw;
  color: ${({ isLiked }) => (isLiked ? 'red' : 'black')};
`;

export const Review = styled.div`
  display: flex;
`;

export const CountIcon = styled(FontAwesomeIcon)`
  cursor: pointer;
  width: 1.4vw;
  height: 1.4vw;
`;

export const Info_Left_Top = styled.div`
  font-size: 0.9vw;
  display: flex;
  justify-content: space-between;
`;

export const Par = styled.p<{ size: number; weight: number }>`
  font-size: ${({ size }) => (size ? `${size}vw` : '1vw')};
  font-weight: ${({ weight }) => (weight ? weight : 300)};
  color: ${({ color }) => (color ? color : 'black')};
`;

export const Summary_Setcion = styled.div`
  display: flex;
  align-items: center;
  color: rgba(189, 187, 183);
`;

export const Bracket = styled.span`
  font-weight: 400;
  font-size: 1vw;
`;

export const Summary = styled.span`
  font-weight: 400;
  max-width: 70%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 0.9vw;
`;

export const Item_Name = styled.p`
  font-size: 1.1vw;
  font-weight: 500;
`;

export const Info_Left_Bottom = styled.section`
  width: 100%;
  word-wrap: 100%;
  padding-top: 3%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
`;

export const PricePar = styled.p<{
  size?: number;
  line?: boolean;
  weight?: number;
}>`
  font-size: ${({ size }) => (size ? `${size}vw` : '1vw')};
  text-decoration-line: ${({ line }) => (line ? 'line-through' : 'none')};
  font-weight: ${({ weight }) => (weight ? weight : 300)};
  color: ${({ color }) => (color ? color : 'black')};

  :not(:nth-of-type(1)) {
    margin-left: 3%;
  }
`;

export const Info_Right = styled.section``;

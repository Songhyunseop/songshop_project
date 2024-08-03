import styled from '@emotion/styled';

export const Review_Wrapper = styled.article`
  cursor: pointer;
  position: relative;
  padding-bottom: 100%;
  border: 3px solid red;
`;

export const Review_Top = styled.div`
  height: 100%;
  filter: contrast(1);
  transition: all 0.5s ease;
  border: 2px solid green;
`;

export const Review_Contents = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  :hover {
    ${Review_Top} {
      filter: contrast(0.4);
    }
  }
`;

export const Product_img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const ReviewBottom = styled.div`
  width: 100%;
  height: 100%;
  padding: 20% 5% 0 5%;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: all 0.5s ease;

  opacity: 0;

  :hover {
    opacity: 1;
    transform: translateY(-10%);
  }
`;

export const Review = styled.p`
  font-size: 20px;
  font-weight: 500;
  line-height: 1.22;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  text-align: center;
  overflow: hidden;
  color: white;
  transform: translateY(100%);
`;

export const Rate = styled.div`
  padding-top: 15px;
  font-size: 20px;
  color: orange;
  font-weight: 500;
  transform: translateY(100%);
`;

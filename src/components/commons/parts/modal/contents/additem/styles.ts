import styled from '@emotion/styled';
import { ColorPicker } from 'react-color-palette';
import Select from 'react-select';

export const Modal_Header = styled.header`
  position: sticky;
  z-index: 9999;
  top: 0;
  height: 12%;
  color: #f7f3f5;
  font-size: 2rem;
  display: flex;
  align-items: center;
  padding-left: 1rem;
  background-color: #403234;
`;

export const Modal_Body = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr 4fr 1fr 1fr 1fr auto 8fr;
  padding: 0.5rem;
`;

export const Body_Container = styled.div`
  display: grid;
  grid-template-columns: 20% 80%;
  border-top: 1px solid #b2a0a0;
  border-right: 1px solid #b2a0a0;

  :nth-of-type(7) {
    display: grid;
  }

  :nth-of-type(7) > :nth-of-type(2) {
    display: flex;
    flex-direction: column;
    align-items: center;
    /* padding: 7px 0 0 0; */
  }
`;

export const Body_Left = styled.div`
  font-size: 1.2rem;
  font-weight: 500;
  color: #f7f3f5;
  background-color: #e2c2b3;
  padding: 0.5rem 0 0.5rem 0.8rem;
`;

export const Body_Right = styled.div`
  position: relative;
  width: 100%;
  padding: 0.4rem 0.4rem 0.4rem 0.3rem;
  display: flex;
  align-items: center;
`;

export const AddInput = styled.input<{ detail?: boolean }>`
  width: 50%;
  min-width: 300px;
  height: 100%;
  padding: 0.5rem 0 0.5rem 0.2rem;
  font-size: 1rem;
`;

export const DetailText = styled.textarea`
  width: 100%;
  height: 100%;
  padding: 0.5rem 0 0.5rem 0.2rem;
  font-size: 1rem;
  resize: none;
`;

export const Category_Select = styled(Select)`
  width: 50%;

  & .CategorySelect__menu-list {
    max-height: 150px;
    overflow: auto;
  }

  & .CategorySelect__option {
    background-color: white;
    color: black;

    :hover {
      background-color: #969696;
    }
  }

  & .CountSelect__menu {
    /* 아래의 editor에 가려짐 방지를 위해 zIndex 값 부여 */
    z-index: 9999;
    border-radius: 2px;
  }
`;

export const SubCategory_Select = styled(Select)`
  width: 50%;

  & .SubCategorySelect__menu {
    /* 아래의 editor에 가려짐 방지를 위해 zIndex 값 부여 */
    z-index: 9999;
    border-radius: 2px;
  }

  & .SubCategorySelect__option {
    background-color: white;
    color: black;

    :hover {
      background-color: #969696;
    }
  }
`;

export const AddItem = styled.button`
  cursor: pointer;
  width: 100px;
  height: 35px;
  color: #f7f3f5;
  margin-top: 10px;
  margin-bottom: 10px;
  font-size: 0.9rem;
  background-color: #403234;
`;

export const StyledColorPicker = styled(ColorPicker)`
  width: 180px;
`;

export const Add_Button = styled.button`
  background-color: #403024;
  color: #f7f3f5;
`;

import styled from '@emotion/styled';
import { ColorPicker } from 'react-color-palette';

export const AddItem_Content_Wrapper = styled.main`
  width: 55vw;
  height: 65vh;
`;

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

import styled from '@emotion/styled';

export const Default_Input = styled.input`
  width: ${(props) => (props.isAddress ? '100%' : '70%')};
  max-height: 40px;
  height: 100%;
`;

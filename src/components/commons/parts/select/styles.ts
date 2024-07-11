import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { GroupBase, Props } from 'react-select';
import Select from 'react-select';

const returnStyles = (type: string) => {
  switch (type) {
    case 'CategorySelect':
      return css`
        width: 50%;

        & .CategorySelect__menu-list {
          max-height: 150px;
          overflow: auto;
        }

        & .CategorySelect__menu {
          border-radius: 2px;
        }

        & .CategorySelect__option {
          background-color: white;
          color: black;
          :hover {
            background-color: #969696;
          }
        }

        // 선택한 옵션 흐림처리
        & .CategorySelect__option--is-disabled {
          color: #c8c8c8;
        }
      `;

    case 'SizeSelect':
      return css`
        min-width: 100px;
        width: 25%;
        margin-left: 0.8rem;

        & .SizeSelect__control {
          border-radius: 2px;
          box-shadow: none;
          outline: none;
          border: 1px solid black;
          height: 38px;
          /* min-height: 10px; */
        }

        & .SizeSelect__menu {
          border-radius: 2px;
        }

        & .SizeSelect__option {
          background-color: white;

          :hover {
            background-color: #969696;
          }
        }
      `;

    case 'CountSelect':
      return css`
        min-width: 100px;
        width: 25%;
        margin-left: 0.8rem;
        border: 2px solid blue;

        & .CountSelect__control {
          border-radius: 2px;
          box-shadow: none;
          outline: none;
          height: 38px;
          /* min-height: 10px; */
          border: 1px solid black;
        }

        & .CountSelect__menu {
          /* 아래의 editor에 가려짐 방지를 위해 zIndex 값 부여 */
          z-index: 9999;
          border-radius: 2px;
        }

        & .CountSelect__menu-list {
          z-index: 999;
          border: 2px solid red;
          max-height: 200px;
          overflow-y: auto;
        }

        & .CountSelect__option {
          background-color: white;

          :hover {
            background-color: #969696;
          }
        }
      `;
  }
};

interface CustomSelectProps extends Props<unknown, false, GroupBase<unknown>> {
  type?: string;
}

// type에 맞는 styleling 지정
export const CustomSelector = styled(Select)<CustomSelectProps>`
  ${(props) => props.classNamePrefix && returnStyles(props.classNamePrefix)};
`;

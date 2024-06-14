import styled from '@emotion/styled';

export const EditorWrapper = styled.div`
  height: 100%;
  width: 100%;

  :focus:none

  // 매김번호(ul, ol) vertical 중앙정렬
  .toastui-editor-contents ul li,
  .toastui-editor-contents ol li {
    ::before {
      margin-top: 0;
      top: 50%;
      transform: translateY(-50%);
      text-align: center;
    }
  }

  .toastui-editor-tooltip,
  .toastui-editor-tooltip .arrow {
    background-color: #687477;
  }

  .toastui-editor-tooltip .text {
    font-size: 100%;
  }

  .toastui-editor-toolbar-group {
    :nth-of-type(2) {
      flex-wrap: wrap;
    }
  }
`;

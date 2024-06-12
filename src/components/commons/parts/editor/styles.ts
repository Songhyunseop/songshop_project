import styled from '@emotion/styled';

export const EditorWrapper = styled.div`
  height: 100%;
  width: 100%;

  .toastui-editor-defaultUI-toolbar {
    /* width: 100%; */
  }

  // 미리보기 창
  .ProseMirror {
    font-size: 16px;
  }

  .toastui-editor-contents {
    font-size: 100%;
  }

  // 매김번호 vertical 중앙정렬
  .toastui-editor-contents ul li,
  .toastui-editor-contents ol li {
    ::before {
      margin-top: 0;
      top: 50%;
      transform: translateY(-50%);
      text-align: center;
    }
  }

  // 폰트사이즈 커스텀 수정
  /* .toastui-editor-contents li,
  .toastui-editor-contents p,
  .toastui-editor-contents p del,
  .toastui-editor-contents p em,
  .toastui-editor-contents p span,
  .toastui-editor-contents p strong,
  .toastui-editor-contents p strong em,
  .toastui-editor-contents p strong span,
  .toastui-editor-contents ul li p,
  .toastui-editor-contents ol li p,
  .toastui-editor-contents ul li p strong,
  .toastui-editor-contents ol li p strong {
    font-size: 100%;
    line-height: 1.5;
  } */

  // 폰트 사이즈 재적용을 위한 상위 요소 클래스
  .toastui-editor ww-mode {
    font-size: 100%;
    line-height: 1.5;
  }

  .toastui-editor-toolbar {
  }

  .toastui-editor-toolbar-group {
    :nth-of-type(2) {
      flex-wrap: wrap;
    }
  }

  .toastui-editor-popup-body {
    font-size: 10rem;
  }
`;

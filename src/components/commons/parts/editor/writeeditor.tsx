import { Editor } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor.css';

import '@toast-ui/editor/dist/i18n/ko-kr';

import 'tui-color-picker/dist/tui-color-picker.css';
import '@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css';

import colorSyntax from '@toast-ui/editor-plugin-color-syntax';
import fontSize from 'tui-editor-plugin-font-size';
import 'tui-editor-plugin-font-size/dist/tui-editor-plugin-font-size.css';

import * as S from './styles';
import supabase from '@/commons/utils/supabase/client';
import { v4 as uuidv4 } from 'uuid';
import { useEffect } from 'react';

export default function WriteEditor({ editorRef, changeContent }) {
  type HookCallback = (url: string, text?: string) => void;
  const supabaseClient = supabase();

  const convertBlob = async (blob: File | Blob, callbackFunc: HookCallback) => {
    const newId = uuidv4();

    try {
      const { data, error } = await supabaseClient.storage
        .from('images')
        .upload(`editorblobs/${newId}`, blob);

      if (error) throw error;

      const { data: imgUrl } = await supabaseClient.storage
        .from('images')
        .getPublicUrl(data.path);

      callbackFunc(imgUrl.publicUrl, '');
    } catch (e) {
      console.log(e);
    }
  };

  const customHtmlRender = {
    text(node, context) {
      const textElement = document.createElement('span');
      textElement.textContent = node.literal;
      // textElement.style.fontSize = '35px';

      return {
        type: 'html',
        content: textElement.outerHTML,
      };
    },
  };

  useEffect(() => {
    const wysiswyg = document.querySelector(
      '.ProseMirror.toastui-editor-contents'
    );

    // const checkKeydown = (e) => {
    //   // if (e.code !== 'Enter') return;
    //   // const aa = wysiswyg.querySelectorAll('p');
    //   // aa[aa.length - 1].style.fontSize = '45px';
    //   // console.log(aa[aa.length - 1], 333);
    //   // const rr = editorRef.current.getInstance().getRangeInfoOfNode();
    // };
    // wysiswyg?.addEventListener('keydown', checkKeydown);

    // const observer = new MutationObserver((mutations) => {
    //   for (const mutation of mutations) {
    //     console.log(mutations);
    //     if (mutation.type === 'childList') {
    //       mutation.addedNodes.forEach((node) => {
    //         if (node.tagName === 'P') {
    //           // const newSpan = document.createElement('span');
    //           // newSpan.textContent = node.textContent;
    //           // newSpan.style.fontSize = '50px';
    //           // node.appendChild(newSpan);
    //         }
    //       });
    //     }
    //   }
    // });

    // observer.observe(wysiswyg, { childList: true, subtree: true });

    // return () => {
    //   observer.disconnect();
    // };
  }, []);

  return (
    <S.EditorWrapper id='editor'>
      <Editor
        ref={editorRef}
        onChange={changeContent}
        customHTMLRenderer={customHtmlRender}
        toolbarItems={[
          ['heading', 'bold', 'italic'],
          [
            'quote',
            'strike',
            'ul',
            'ol',
            'indent',
            'outdent',
            'task',
            'hr',
            'image',
            'link',
          ],
        ]}
        language='ko-KR'
        initialValue=' '
        autofocus={false}
        previewStyle='vertical'
        previewHighlight={false}
        height='100%'
        initialEditType='wysiwyg'
        useCommandShortcut={false}
        // events={{ keyup: checks }}
        hooks={{
          addImageBlobHook: convertBlob,
        }}
        plugins={[fontSize, colorSyntax]}
      />
    </S.EditorWrapper>
  );
  3;
}

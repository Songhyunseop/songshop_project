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

export default function WriteEditor({ editorRef, changeContent }) {
  type HookCallback = (url: string, text?: string) => void;
  const convertBlob = async (blob: File | Blob, callbackFunc: HookCallback) => {
    const blobUrl = URL.createObjectURL(blob);

    callbackFunc(blobUrl, '');

    // const newId = uuidv4();

    // const supabaseClient = supabase();

    // try {
    //   const { data, error } = await supabaseClient.storage
    //     .from('images')
    //     .upload(`editorblobs/${newId}`, blob);

    //   if (error) throw error;

    //   const { data: imgUrl } = await supabaseClient.storage
    //     .from('images')
    //     .getPublicUrl(data.path);

    //   callbackFunc(imgUrl.publicUrl, '');
    // } catch (e) {
    //   console.log(e);
    // }
  };

  return (
    <S.EditorWrapper id='editor'>
      <Editor
        ref={editorRef}
        onChange={changeContent}
        // customHTMLRenderer={customHtmlRender}
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

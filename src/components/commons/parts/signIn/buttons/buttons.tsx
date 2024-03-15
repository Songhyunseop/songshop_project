import * as S from './styles';

interface OptionProps {
  bgColor: string;
  fontColor: string;
  content: string;
  icon: string;
}

export default function Button(props: { options: OptionProps }) {
  const { bgColor, fontColor, content, icon } = props.options;

  return (
    <S.Main bgColor={bgColor} fontColor={fontColor}>
      <S.Content_Wrapper>
        {icon !== 'none' && (
          <S.Logo_Image
            src={icon === 'google' ? '/googleLogo.png' : '/naverLogo.png'}
          />
        )}
        {content}
      </S.Content_Wrapper>
    </S.Main>
  );
}

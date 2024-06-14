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
    <S.Button_Wrapper bgColor={bgColor} fontColor={fontColor}>
      <S.Content>
        {icon !== 'none' && (
          <S.Logo_Image
            src={icon === 'google' ? '/googleLogo.png' : '/naverLogo.png'}
          />
        )}
        {content}
      </S.Content>
    </S.Button_Wrapper>
  );
}

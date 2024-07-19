import * as S from './style';

export default function ToggleNav({ list, className, isOpen }) {
  return (
    <S.Nav className={className} isOpen={isOpen}>
      <ul>
        {list.map((content: string) => (
          <li key={content}>{content}</li>
        ))}
      </ul>
    </S.Nav>
  );
}

import { useEffect, useRef, useState } from 'react';
import * as S from './styles';

export default function Footer() {
  const ItemWrapperRef = useRef();

  const DEFAULT_Z = 100;
  const [zPosition, setZposition] = useState(DEFAULT_Z);

  // 컨테이너 크기에 따라 zPosition 값 비율 조정
  const getParentSize = () => {
    if (ItemWrapperRef.current) {
      const parentWidth = ItemWrapperRef.current.offsetWidth;
      const DEFAULT_RATIO = 8.37; // default 비율

      const currentZ = Number((parentWidth * DEFAULT_RATIO) / 100);

      setZposition(currentZ);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', getParentSize);
    getParentSize();

    return () => {
      window.removeEventListener('resize', getParentSize);
    };
  }, []);

  const bgPosition = [
    '20% 0%',
    '40% 0%',
    '60% 0%',
    '80% 0%',
    '100% 0%',
    '20% 50%',
    '40% 50%',
    '60% 50%',
    '80% 50%',
    '100% 50%',
  ];

  return (
    <S.Footer_Wrapper>
      <S.Footer_Title>ABOUT US</S.Footer_Title>
      <S.Items ref={ItemWrapperRef}>
        {bgPosition.map((bgPosition, idx) => (
          <S.Cube key={bgPosition} index={idx}>
            <S.Visible
              index={idx}
              bgPosition={bgPosition}
              zPosition={zPosition}
            ></S.Visible>
            <S.Behind zPosition={zPosition}></S.Behind>
          </S.Cube>
        ))}
      </S.Items>
    </S.Footer_Wrapper>
  );
}

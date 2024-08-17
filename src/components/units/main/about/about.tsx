import { useEffect, useRef, useState } from 'react';
import * as S from './styles';
import { throttle } from '@/commons/utils/throttle';

export default function AboutSection() {
  const DEFAULT_Z = 100;
  const [zPosition, setZposition] = useState(DEFAULT_Z);

  const ItemWrapperRef = useRef(null);

  // 컨테이너 크기에 따라 zPosition 값 비율 조정
  const getParentSize = (ItemWrapperRef) => {
    if (ItemWrapperRef.current) {
      const parentWidth = ItemWrapperRef.current.offsetWidth;
      const DEFAULT_RATIO = 9; // default 비율

      const currentZ = Number((parentWidth * DEFAULT_RATIO) / 100);

      setZposition(Math.floor(currentZ));
    }
  };

  const throttleResize = throttle(getParentSize, 1000);

  useEffect(() => {
    window.addEventListener('resize', throttleResize);
    throttleResize(ItemWrapperRef);

    return () => {
      window.removeEventListener('resize', throttleResize);
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
    <S.About_Wrapper>
      <S.About_Title>ABOUT US</S.About_Title>
      <S.Items ref={ItemWrapperRef}>
        {bgPosition.map((bgPosition, idx) => (
          <S.Cube key={bgPosition} index={idx}>
            <S.Visible
              // index={idx}
              bgPosition={bgPosition}
              zPosition={zPosition}
            ></S.Visible>
            <S.Behind zPosition={zPosition}></S.Behind>
          </S.Cube>
        ))}
      </S.Items>
    </S.About_Wrapper>
  );
}

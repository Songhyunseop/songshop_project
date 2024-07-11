import { Hue, Saturation } from 'react-color-palette';
import * as S from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faRotateLeft } from '@fortawesome/free-solid-svg-icons';
import { useSelect } from '@/components/commons/hooks/custom/useSelect/selecthook';
import { useRecoilState } from 'recoil';
import { optionDataState } from '@/commons/libraries/atom';
import CustomSelect from '@/components/commons/parts/select';
import { useSizeSelect } from '@/components/commons/hooks/custom/useSizeSelect/selectSizehook';
import { useCountSelect } from '@/components/commons/hooks/custom/useCountSelect/countSelecthook';

interface IOptionSize {
  value: string;
  label: string;
  item: string;
  count: number;
  isdisabled: boolean;
  isPickerOpen: boolean;
}

export default function StocksComponent({ data }) {
  const [options, setOptions] = useRecoilState(optionDataState);
  const { sizeOptions, countOptions, CategoryOptions } = options;

  const { renderSizeSelect } = useSizeSelect();
  const { renderCountSelect } = useCountSelect();

  return (
    <S.Stocks id={data.item}>
      <S.Select_Stock>
        <S.Stocks_Info>SIZE</S.Stocks_Info>
        {renderSizeSelect(data.item)}
        <S.Stocks_Info>COLOR</S.Stocks_Info>
        {/* <S.Color_PickBox>
          <S.Color_PickButton
            onClick={() => toggleColorPick(data.item)}
          ></S.Color_PickButton>
          <S.ColorsList>
            {data.selectColor?.map((color) => (
              <S.Colors
                key={uuidv4()}
                onClick={() => removeColor(data.item, color)}
                color={color}
              ></S.Colors>
            ))}
          </S.ColorsList>
          {data.isPickerOpen && (
            <S.Custom_Color_Layout>
              <Saturation height={180} color={color} onChange={setColor} />
              <Hue color={color} onChange={setColor} />
              <S.ColorBtn_Box>
                <S.ColorPickBtn
                  type='button'
                  onClick={() => selectColor(data.item)}
                >
                  <FontAwesomeIcon
                    style={{
                      width: '15px',
                      height: '15px',
                    }}
                    icon={faCheck}
                  />
                </S.ColorPickBtn>
                <S.ColorPickBtn type='button' onClick={resetColor}>
                  <FontAwesomeIcon
                    style={{
                      width: '15px',
                      height: '15px',
                    }}
                    icon={faRotateLeft}
                  />
                </S.ColorPickBtn>
              </S.ColorBtn_Box>
            </S.Custom_Color_Layout>
          )}
        </S.Color_PickBox> */}
        // <S.Stocks_Info>COUNT</S.Stocks_Info>
        {renderCountSelect(data.item)}
      </S.Select_Stock>
      {/* <S.Close onClick={removeItemStock} id={data.item}></S.Close> */}
    </S.Stocks>
  );
}

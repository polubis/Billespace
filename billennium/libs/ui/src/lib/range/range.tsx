import styled, { css } from 'styled-components';
import { Label, Title } from '../typography/typography';

export interface RangeProps {
  title: string;
  min?: number;
  max?: number;
  value: number;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Container = styled.div`
  height: 48px;
  margin: 0 auto;
`;

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 0 5px 3px;

  ${Title} {
    font-size: 13px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    margin-right: 10px;
  }
`;

const Input = styled.input<{ rangeValue: string }>`
  cursor: pointer;
  -webkit-appearance: none;
  margin: 0 15px 0 0;
  width: 100%;
  height: 8px;
  border-radius: 5px;

  ${(props) =>
    css`
      background: linear-gradient(
        90deg,
        #ff4500,
        ${props.rangeValue}%,
        #d9d9d9 0%,
        #d9d9d9 100%
      );
    `}

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    height: 16px;
    width: 16px;
    border-radius: 50%;
    background: #ff5a00;
    cursor: pointer;
    transition-duration: 0.1s;
    border: 2px solid black;
  }

  &::-moz-range-thumb {
    -webkit-appearance: none;
    height: 16px;
    width: 16px;
    border-radius: 50%;
    background: #ff5a00;
    cursor: pointer;
    transition-duration: 0.1s;
  }
`;

export const Range = ({
  title,
  min = 0,
  max = 100,

  value,
  onChange,
}: RangeProps) => {
  const rangeValue = (((+value - min) * 100) / (max - min)).toFixed();

  return (
    <Container>
      <Header>
        <Title>{title}</Title>
        <Label>
          {value}/{max}
        </Label>
      </Header>
      <Input
        type="range"
        min={min}
        max={max}
        value={value}
        rangeValue={rangeValue}
        onChange={onChange}
      />
    </Container>
  );
};

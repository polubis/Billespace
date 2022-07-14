import React from 'react';
import styled from 'styled-components';
import { SmallTitleStyle } from '../typography/typography';

export interface InputProps {
  value: string;
  disabled?: boolean;
  invalid?: boolean;
  placeholder?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

interface ContainerProps {
  disabled?: InputProps['disabled'];
  invalid?: InputProps['invalid'];
}

const Container = styled.div<ContainerProps>`
  box-sizing: border-box;
  max-width: 272px;
  display: flex;
  align-items: center;
  ${(props) => props.invalid && 'gap: 16px'};
  padding: 12px 16px;
  border: 2px solid
    ${(props) => {
      if (props.disabled) return '#EBEBEB';
      if (props.invalid) return '#FF0000';
      return '#323232';
    }};
  border-radius: 4px;
`;

const Field = styled.input<InputProps>`
  width: 100%;
  ${SmallTitleStyle}
  border: none;
  color: ${(props) => {
    if (props.disabled) return '#CBC0C0';
    if (props.invalid) return '#FF0000';
    return '#323232';
  }};
  background: transparent;

  ${(props) => props.invalid && 'max-width: 200px'};

  &:focus {
    outline: none;
  }

  &::placeholder {
    ${(props) => props.disabled && 'color: #CBC0C0;'};
    font-family: 'Billennium-Regular';
  }
`;

const ErrorIcon = styled.svg`
  flex-shrink: 0;
`;

export const Input = ({
  value,
  disabled,
  invalid,
  placeholder,
  onChange,
}: InputProps) => {
  return (
    <Container disabled={disabled} invalid={invalid}>
      <Field
        value={value}
        disabled={disabled}
        invalid={invalid}
        placeholder={placeholder}
        onChange={onChange}
      />
      {invalid && (
        <ErrorIcon
          width="18"
          height="17"
          viewBox="0 0 18 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.00128 1.98145H8.99878L1.90503 15.6227L1.9069 15.6246H16.0932L16.0944 15.6227L9.00128 1.98145ZM8.2969 5.62457H9.70315V11.2496H8.2969V5.62457ZM9.00003 14.3746C8.81461 14.3746 8.63335 14.3196 8.47918 14.2166C8.32501 14.1136 8.20485 13.9671 8.13389 13.7958C8.06294 13.6245 8.04437 13.436 8.08054 13.2542C8.11672 13.0723 8.20601 12.9053 8.33712 12.7742C8.46823 12.643 8.63527 12.5538 8.81713 12.5176C8.99899 12.4814 9.18749 12.5 9.35879 12.5709C9.5301 12.6419 9.67652 12.7621 9.77953 12.9162C9.88255 13.0704 9.93753 13.2516 9.93753 13.4371C9.93753 13.6857 9.83876 13.9242 9.66294 14.1C9.48713 14.2758 9.24867 14.3746 9.00003 14.3746Z"
            fill="#FF0000"
          />
          <path
            d="M17.125 16.8745H0.874994C0.767661 16.8745 0.662147 16.8468 0.568618 16.7941C0.47509 16.7415 0.396698 16.6656 0.340996 16.5739C0.285294 16.4821 0.254159 16.3776 0.25059 16.2703C0.247021 16.163 0.271138 16.0566 0.320619 15.9614L8.44562 0.336394C8.49842 0.234979 8.57802 0.149989 8.67577 0.0906762C8.77351 0.0313633 8.88566 0 8.99999 0C9.11433 0 9.22647 0.0313633 9.32422 0.0906762C9.42197 0.149989 9.50157 0.234979 9.55437 0.336394L17.6794 15.9614C17.7289 16.0566 17.753 16.163 17.7494 16.2703C17.7458 16.3776 17.7147 16.4821 17.659 16.5739C17.6033 16.6656 17.5249 16.7415 17.4314 16.7941C17.3378 16.8468 17.2323 16.8745 17.125 16.8745ZM1.90624 15.6245H16.0937L16.0944 15.6226L9.00125 1.98077H8.99874L1.90499 15.6226L1.90624 15.6245Z"
            fill="#FF0000"
          />
        </ErrorIcon>
      )}
    </Container>
  );
};

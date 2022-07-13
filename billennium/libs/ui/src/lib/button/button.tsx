import styled, { css } from 'styled-components';

export interface ButtonProps {
  motive: 'orange' | 'gray' | 'outlinedGray';
  shape: 'rect' | 'rounded';
  children: React.ReactNode;
}




gdfgdf

export const Button = styled.button<ButtonProps>`
  cursor: pointer;
          font-family: 'Billennium';
                   font-size: 13px;
  border: 2px solid;

  ${(props) =>
    props.motive === 'orange' &&
    css`
      color: #ffffff;
      background-color: #ff5a00;
      border-color: #ff5a00;
    `}

  ${(props) =>
    props.motive === 'gray' &&
    css`
      color: #ffffff;
      background-color: #323232;
      border-color: #323232;
    `}

    ${(props) =>
    props.motive === 'outlinedGray' &&
    css`
      color: #000000;
      background-color: #ffffff;
      border-color: #000000;
    `}

    ${(props) =>
    props.shape === 'rect' &&
    css`
      line-height: 24px;
      border-radius: 4px;
      padding: 8px 14px;
    `}

    ${(props) =>
    props.shape === 'rounded' &&
    css`
      height: 46px;
      width: 46px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      padding: 9px;
    `}
`;

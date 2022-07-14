import styled, { css } from 'styled-components';

//styles
export const LabelStyle = css`
  font-size: 12px;
  line-height: 12px;
  font-weight: 400;
  letter-spacing: 1.25%;
  color: #6d6d6d;
`;

//components
export const Heading = styled.h1`
  font-size: 20px;
  line-height: 20px;
  font-weight: 600;
  letter-spacing: 1.25%;
  color: #000;
`;

export const Title = styled.h2`
  font-size: 16px;
  line-height: 16px;
  font-weight: 600;
  letter-spacing: 1.25%;
  color: #000;
`;

export const Label = styled.span`
  ${LabelStyle}
  text-transform: uppercase;
`;

export const Description = styled.span`
  ${LabelStyle}
`;

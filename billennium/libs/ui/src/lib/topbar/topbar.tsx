import styled, { css } from 'styled-components';
import { Avatar, AvatarProps } from '../avatar';

export interface TopbarProps extends AvatarProps {
  title: string;
  hideAvatar?: boolean;
}

const Header = styled.header<{ hideAvatar: TopbarProps['hideAvatar'] }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px;
  background: #fff;
  height: 82px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.14);

  ${(props) =>
    !props.hideAvatar &&
    css`
      & > *:last-child {
        flex-shrink: 0;
        margin-left: 24px;
      }
    `}
`;

const Title = styled.h5`
  font-size: 20px;
  font-family: 'Billennium', sans-serif;
  color: #000;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Topbar = ({ title, hideAvatar, ...avatarProps }: TopbarProps) => {
  return (
    <Header hideAvatar={hideAvatar}>
      <Title>{title}</Title>
      {hideAvatar || <Avatar {...avatarProps} />}
    </Header>
  );
};

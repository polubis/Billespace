import styled, { keyframes } from 'styled-components';
import { ActiveNavItem, NavItem } from './models';

export interface NavProps {
  items: NavItem[];
  activeItem?: ActiveNavItem;
  isBackActive?: boolean;
  onClick: (item: ActiveNavItem) => void;
  onActiveClick: () => void;
}

const MoveIn = keyframes`
    0% {

    }
    100% {
        transform: scale(0) rotate(360deg);
        margin-left: -55px;
    }
`;

const MoveOutIn = keyframes`
    0% {
        transform: scale(1);
    }
    50% {
        transform: scale(0) rotate(-360deg);
    }
    100% {
        transform: scale(1) rotate(-720deg);
    }
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #323232;
  height: 64px;
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
`;

const Circle = styled.div<{ animated: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #323232;
  border-radius: 50px;
  position: relative;
  height: 46px;
  width: 46px;
  top: -23px;
  left: 28px;
  border: 4px solid #fff;
  cursor: pointer;

  path {
    animation: ${(props) => (props.animated ? MoveOutIn : 'none')} 1s 1 forwards;
    fill: #fff;
  }
`;

const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: 35px;
  margin-right: 42px;
`;

const Box = styled.div<{
  animate: boolean;
}>`
  cursor: pointer;
  animation: ${(props) => (props.animate ? MoveIn : 'none')} 0.5s 1 forwards;

  path {
    fill: #fff;
  }
`;

export const Nav = ({
  items,
  activeItem,
  isBackActive,
  onClick,
  onActiveClick,
}: NavProps) => {
  return (
    <Container>
      <Circle animated onClick={onActiveClick}>
        {isBackActive ? (
          <svg width="22" height="22">
            <path d="M8.33333 16.6667L9.50833 15.4917L3.19167 9.16667H20V7.5H3.19167L9.50833 1.175L8.33333 0L0 8.33333L8.33333 16.6667Z" />
          </svg>
        ) : (
          activeItem?.icon
        )}
      </Circle>

      <Icons>
        {items.map((item) => (
          <Box
            key={item.label}
            title={item.label}
            animate={item.label === activeItem?.label}
            onClick={() => onClick(item)}
          >
            {item.icon}
          </Box>
        ))}
      </Icons>
    </Container>
  );
};

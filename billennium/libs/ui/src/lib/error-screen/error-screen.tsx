import styled, { keyframes } from 'styled-components';
import { Title } from '../typography/typography';

export interface ErrorScreenProps {
  text: string;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 495px;
  width: 100%;
  align-items: center;
  justify-content: center;

  ${Title} {
    text-align: center;
    margin-top: 18px;
  }
`;

const Image = styled.div`
  transform: translateX(10px);
  width: 100%;
  display: flex;
  justify-content: center;
  position: absolute;
`;

const Rocket = styled.svg`
  width: 256px;
  fill: none;
  position: absolute;
  bottom: 45px;
  z-index: 1;
`;

const Spill = keyframes`
100% {
  transform: translateY(20px) scale(.55) translateX(-20px);
}
`;

const Crack = keyframes`
  0% {
    d: path('M288.712 62.1613 C287.012 63.292 285.349 64.4366 283.766 65.7293'); 
  }
  80% {
    d: path('M288.712 62.1613C287.012 63.292 285.349 64.4366 283.766 65.7293C282.993 66.3606 281.96 67.1087 281.361 67.9497C280.372 69.3402 280.443 71.682 280.443 73.3018C280.443 74.812 280.689 76.293 280.718 77.7963C280.76 79.9192 279.782 81.8141 278.804 83.6537C275.371 90.1142 269.964 95.1502 265.987 101.218C264.845 102.96 263.806 104.753 262.74 106.54');
  }
  100% {
    d: path('M288.712 62.1613C287.012 63.292 285.349 64.4366 283.766 65.7293C282.993 66.3606 281.96 67.1087 281.361 67.9497C280.372 69.3402 280.443 71.682 280.443 73.3018C280.443 74.812 280.689 76.293 280.718 77.7963C280.76 79.9192 279.782 81.8141 278.804 83.6537C275.371 90.1142 269.964 95.1502 265.987 101.218C264.845 102.96 263.806 104.753 262.74 106.54C262.103 107.607 261.552 108.805 260.818 109.809C259.884 111.089 258.558 112.059 257.25 112.925C255.855 113.849 254.636 114.995 253.246 115.927C252.071 116.715 250.795 117.241 249.372 117.29C248.586 117.317 247.16 117.236 246.477 117.734C245.421 118.505 245.132 119.224 244.885 120.465 M267.626 99.2352C269.998 101.867 273.228 103.397 275.757 105.828C277.207 107.221 277.411 108.307 277.411 110.207C277.411 112.595 277.331 114.998 277.473 117.382C277.575 119.114 277.594 121.131 278.514 122.665');
  }
`;

const SpilledOil = styled.svg`
  width: 325px;
  transform: scale(0.2);
  fill: none;
  animation: ${Spill} 4s ease-in-out 1s 1 forwards;
  position: absolute;
  top: -30px;
`;

const CrackedWindow = styled.svg`
  fill: none;
  z-index: 2;
  position: relative;
  bottom: 78px;
  transform: scale(0.49) translateX(-82px) translateY(3px);

  path {
    animation: ${Crack} 2s cubic-bezier(1, 0.22, 1, -0.19) 0.1s 1 forwards;
    stroke: black;
    stroke-width: 2px;
  }
`;
export const ErrorScreen = ({ text }: ErrorScreenProps) => {
  return (
    <Container>
      <Image>
        <Rocket
          width="325"
          height="193"
          viewBox="0 0 475 193"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M272.972 147.237C273.974 158.557 247.668 163.219 190.066 160.555C169.399 163.536 156.553 168.879 143.901 168.879C111.319 168.879 110.242 162.901 90.1768 157.892C72.9843 153.599 67.8715 160.888 60.5465 147.903C41.237 127.925 104.26 121.266 164.759 121.266C225.258 121.266 263.32 136.582 272.972 147.237Z"
            fill="black"
          />
          <path
            d="M263.765 146.208C264.682 156.499 240.592 157.982 187.851 155.561C168.927 158.271 150.824 164.551 139.239 164.551C109.406 164.551 120.987 160.115 102.614 155.561C86.8722 151.659 71.3637 158.013 64.6568 146.208C46.9765 128.047 109.595 122.598 164.989 122.598C220.383 122.598 254.926 136.522 263.765 146.208Z"
            fill="#484848"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M358.253 27.8631C245.766 36.848 158.245 100.15 162.77 169.252L291.321 158.984C278.176 112.561 306.173 58.5784 358.537 27.8406L358.253 27.8631Z"
            fill="black"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M355.045 28.1351C244.107 38.0551 158.288 100.809 162.77 169.252L172.544 168.472C175.02 105.253 252.539 44.5578 355.045 28.1351Z"
            fill="white"
            fillOpacity="0.2"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M39.7908 35.5104C39.801 35.6993 39.806 35.8952 39.806 36.1004C39.806 36.2043 39.7991 36.3182 39.7919 36.4366C39.7605 36.9531 39.7239 37.5541 40.2356 37.778C40.4964 37.892 40.7894 37.9372 41.0794 37.9819C41.6364 38.0677 42.182 38.1518 42.4656 38.719C42.5905 38.9689 42.6176 39.3486 42.6454 39.7392C42.6904 40.37 42.7373 41.0291 43.2021 41.215C44.9939 41.9317 46.6465 41.493 48.2555 41.0658C49.8222 40.6499 51.3475 40.245 52.9197 40.9285C54.2025 41.4863 56.038 41.2858 57.7377 41.1002C58.5386 41.0127 59.3093 40.9285 59.9778 40.9285C60.2699 40.9285 60.6151 40.9368 60.9979 40.946C63.6253 41.0089 68.0282 41.1143 69.2454 38.8827C69.6738 38.0973 70.0825 38.0604 70.7092 38.0039C70.9331 37.9837 71.1849 37.961 71.4754 37.9007C72.4032 37.7081 73.3087 37.078 74.1904 36.4645C74.7123 36.1014 75.2258 35.744 75.7307 35.4866C76.9599 34.86 77.9646 34.5798 79.2904 34.2182C80.4558 33.9004 80.3907 32.6553 80.3354 31.598C80.3242 31.3831 80.3133 31.1759 80.3133 30.9858C80.3133 30.1663 80.9801 28.78 81.7607 27.7965C155.581 19.6479 218.559 42.0009 237.983 89.2304L118.047 136.622C109.424 89.1468 60.538 53.0002 0 48.4586L0.264467 48.354C13.4706 43.1357 26.7002 38.8638 39.7908 35.5104Z"
            fill="black"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M237.983 89.2195L228.322 93.0343C213.227 64.9089 181.895 42.0556 141.27 28.0905C187.829 34.3447 224.069 55.4096 237.983 89.2195Z"
            fill="black"
            fillOpacity="0.2"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M146.17 2.00428C146.178 2.3696 146.186 2.7496 146.192 3.1459C146.225 5.35421 146.524 6.68036 148.476 7.78345C149.368 8.28793 150.236 8.92492 150.453 9.90213C150.752 11.2467 150.885 12.4029 150.853 13.8335C150.84 14.4428 150.633 14.9568 150.427 15.4681C150.216 15.9914 150.006 16.512 150.006 17.1292C150.006 19.1595 150.916 20.0763 151.945 21.1124C152.516 21.6868 153.123 22.2978 153.631 23.1556C154.238 24.1793 153.827 25.79 153.433 27.3346C153.172 28.3563 152.919 29.349 152.972 30.1237C153.078 31.6658 154.075 32.6451 155.022 33.5756C155.997 34.5339 156.919 35.4403 156.762 36.8564C156.676 37.632 156.542 38.3566 156.416 39.0407C155.92 41.7319 155.54 43.7942 158.622 45.849C159.476 46.4186 160.054 47.3761 160.638 48.3431C161.13 49.1577 161.626 49.9791 162.294 50.5807C162.295 50.5816 162.296 50.5825 162.297 50.5833L162.883 52.7695C162.666 53.8651 161.97 54.9869 161.494 55.642C160.001 57.6944 160.807 63.5381 161.965 65.5292C162.457 66.3765 163.227 67.0933 163.993 67.8066C165.09 68.8287 166.18 69.8438 166.437 71.2261C166.742 72.8658 166.327 74.315 165.907 75.7776C165.533 77.0815 165.156 78.396 165.284 79.8656C165.417 81.3984 166.517 82.6367 167.619 83.8783C168.609 84.9931 169.601 86.1104 169.898 87.4457C169.972 87.7784 169.98 88.081 169.988 88.3713C170.003 88.9072 170.017 89.4012 170.439 89.9646C170.759 90.3907 171.119 90.7725 171.474 91.1488C172.336 92.0617 173.166 92.9423 173.311 94.3432C173.363 94.8446 173.425 95.3628 173.488 95.8925C173.962 99.8686 174.513 104.488 171.522 107.479C170.038 108.963 171.665 110.179 173.267 111.378C173.876 111.834 174.482 112.288 174.912 112.752C175.671 113.572 175.983 114.56 176.299 115.558C176.559 116.38 176.821 117.209 177.337 117.955C179.1 120.501 179.487 122.091 179.22 125.158C179.175 125.671 179.101 126.166 179.026 126.658C178.885 127.592 178.746 128.512 178.82 129.513C178.858 130.029 179.816 130.34 180.581 130.588C180.904 130.692 181.192 130.786 181.362 130.879C182.62 131.565 182.417 134.345 182.278 136.25C182.242 136.751 182.21 137.191 182.21 137.517C182.21 138.357 182.27 139.297 182.333 140.274C182.471 142.423 182.62 144.751 182.163 146.58C182.011 147.187 181.422 147.879 180.796 148.616C179.576 150.049 178.216 151.649 179.667 153.101C179.82 153.254 179.967 153.404 180.11 153.552C178.236 153.943 176.366 154.319 174.499 154.681L174.519 154.754C123.262 164.677 74.8929 163.431 36.6851 152.818L15.7393 74.6468C17.4864 72.8675 19.2868 71.1001 21.1392 69.3461L21.1194 69.2722C51.0868 40.8958 94.6567 15.9943 146.148 0.0410767C146.139 0.648592 146.154 1.29909 146.17 2.00428Z"
            fill="#FF5A00"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M49.974 156.047L25.6139 65.1335C24.0834 66.5031 22.5901 67.9011 21.124 69.2879L21.1438 69.3617C15.6787 74.5312 10.6658 79.8159 6.13944 85.1828L23.0832 148.418C31.4579 151.442 40.2376 154.483 49.974 156.047Z"
            fill="white"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M182.382 134.028C127.126 146.537 75.3737 149.184 34.0196 142.848L33.9938 142.765C29.5157 142.082 25.1595 141.293 20.9342 140.399L23.0885 148.439C31.4633 151.464 40.2429 154.505 49.9793 156.068L49.9789 156.067C85.8323 163.592 129.041 163.581 174.525 154.776L174.505 154.702C176.376 154.34 178.25 153.963 180.128 153.571C179.98 153.417 179.827 153.261 179.667 153.101C178.216 151.65 179.576 150.05 180.796 148.616C181.422 147.879 182.011 147.187 182.163 146.581C182.62 144.752 182.471 142.424 182.333 140.274C182.27 139.297 182.21 138.357 182.21 137.517C182.21 137.192 182.242 136.751 182.278 136.25C182.328 135.576 182.385 134.791 182.382 134.028Z"
            fill="white"
            fillOpacity="0.2"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M146.17 2.00427C146.178 2.36959 146.186 2.74959 146.192 3.1459C146.225 5.3542 146.524 6.68035 148.476 7.78345C149.368 8.28792 150.236 8.92491 150.453 9.90212C150.752 11.2467 150.885 12.4029 150.853 13.8334C150.84 14.4428 150.633 14.9568 150.426 15.4681C150.216 15.9914 150.006 16.512 150.006 17.1292C150.006 19.1595 150.916 20.0763 151.945 21.1124C152.516 21.6868 153.123 22.2978 153.631 23.1556C153.723 23.3115 153.792 23.481 153.841 23.6618C99.6217 40.4621 53.3847 64.0796 20.6868 90.2848L20.7058 90.3695C16.8827 93.4304 13.2445 96.5266 9.80025 99.6513L5.93005 85.2076C8.92186 81.6602 12.1262 78.1488 15.5332 74.6827L15.53 74.6707C17.2771 72.8913 19.0776 71.124 20.93 69.3699L20.9146 69.3127L20.9102 69.296C50.9183 40.8811 94.5659 15.9506 146.148 0C146.138 0.619249 146.153 1.28317 146.17 2.00427Z"
            fill="black"
            fillOpacity="0.1"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M233.62 0.4021C233.241 1.15162 233.118 2.00938 233.425 3.00508C233.721 3.96847 234.412 4.66106 235.087 5.33741C235.738 5.98984 236.374 6.62716 236.626 7.47785C236.939 8.53267 235.393 9.30327 234.108 9.94401C233.526 10.2346 232.996 10.4985 232.718 10.75C231.49 11.8613 231.568 13.1632 231.653 14.5711C231.693 15.2458 231.735 15.9447 231.635 16.6588C231.305 19.0251 229.406 21.1031 227.553 23.1298C226.368 24.4257 225.203 25.7007 224.479 27.0168C224.449 27.0706 224.419 27.1255 224.388 27.1815C223.689 28.4485 222.693 30.2508 223.255 31.7249C224.723 35.5785 223.368 39.4693 222.026 43.3259C221.107 45.964 220.195 48.5863 220.195 51.1697C220.195 51.4468 220.175 51.7589 220.154 52.0863C220.096 53.0163 220.03 54.0699 220.383 54.795C220.638 55.3197 220.925 55.814 221.209 56.3027C221.89 57.4749 222.552 58.6152 222.713 60.0681C222.899 61.7413 222.412 63.0699 221.899 64.4662C221.679 65.0643 221.455 65.6747 221.277 66.33C220.797 68.0999 220.242 69.9456 219.347 71.5561C218.98 72.217 218.836 72.9778 218.69 73.7496C218.565 74.41 218.439 75.0784 218.17 75.6993C217.847 76.4448 217.302 77.2597 216.738 78.1034C215.742 79.5941 214.686 81.1746 214.686 82.6203C214.686 84.7512 214.936 85.9726 215.769 87.8464C216.223 88.8689 215.239 89.3532 214.205 89.8617C213.449 90.2336 212.667 90.6185 212.403 91.2363C211.858 92.506 211.874 94.0576 211.89 95.6152C211.903 96.8849 211.916 98.1586 211.626 99.2872C211.081 101.407 209.831 102.869 208.555 104.363C207.89 105.141 207.218 105.928 206.635 106.82C205.189 109.032 205.891 111.575 206.567 114.026C206.736 114.638 206.903 115.243 207.035 115.836C207.336 117.189 206.135 118.977 205.152 120.44C204.824 120.928 204.52 121.381 204.304 121.769C204.037 122.251 203.776 122.762 203.51 123.283C202.671 124.926 201.781 126.669 200.467 127.913C200.168 128.196 199.79 128.314 199.428 128.427C198.834 128.612 198.281 128.784 198.184 129.655C198.102 130.391 198.122 131.155 198.143 131.911C198.151 132.244 198.16 132.576 198.16 132.904C198.16 133.193 198.175 133.5 198.191 133.814C198.23 134.622 198.272 135.478 198.066 136.199C197.916 136.726 197.508 137.15 197.097 137.577C196.632 138.06 196.164 138.546 196.065 139.189C195.806 140.872 196.043 142.59 196.273 144.258C196.333 144.691 196.392 145.12 196.442 145.545C196.641 147.242 195.892 148.852 195.194 150.347C195.07 150.614 194.813 150.988 194.536 151.393C194.148 151.958 193.721 152.581 193.562 153.044C194.858 153.42 196.158 153.791 197.463 154.155L197.457 154.178C198.157 154.365 198.857 154.551 199.557 154.734L199.571 154.738C199.899 154.828 200.227 154.918 200.556 155.007C200.643 155.03 200.73 155.054 200.817 155.077C200.903 155.101 200.99 155.124 201.077 155.148L201.655 155.302L201.661 155.28C291.362 178.292 375.722 167.207 417.327 131.305C399.247 79.4108 331.732 27.6315 242.542 2.70873L242.548 2.68632C241.848 2.49868 241.148 2.31315 240.448 2.12951C239.749 1.93838 239.051 1.74914 238.35 1.56149L238.344 1.5839C236.768 1.17945 235.193 0.785533 233.62 0.4021Z"
            fill="#FF5A00"
          />
          <path
            d="M257.721 124.223C239.583 119.363 228.82 100.72 233.68 82.582C238.54 64.4441 257.183 53.6802 275.321 58.5403C293.459 63.4004 304.223 82.0438 299.363 100.182C294.503 118.32 275.859 129.083 257.721 124.223Z"
            fill="white"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M348.26 162.091C341.664 163.435 334.823 164.527 327.77 165.358C328.587 147.418 331.503 128.328 336.709 108.898C341.774 89.9956 348.555 72.4564 356.526 56.8376C362.238 61.0864 367.634 65.4551 372.69 69.9211C366.346 83.5189 360.896 98.4016 356.652 114.241C352.27 130.593 349.51 146.704 348.26 162.091Z"
            fill="white"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M416.581 131.942L461.767 143.18L416.973 130.307C409.492 109.563 394.139 88.8648 372.69 69.9208C366.344 83.5183 360.895 98.4013 356.651 114.241C352.27 130.593 349.51 146.704 348.259 162.09C376.218 156.391 399.783 146.145 416.581 131.942Z"
            fill="black"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M193.556 153.066C193.708 152.6 194.143 151.966 194.536 151.392C194.813 150.988 195.07 150.613 195.194 150.347C195.892 148.852 196.642 147.242 196.442 145.545C196.392 145.12 196.333 144.69 196.273 144.257C196.043 142.59 195.806 140.872 196.065 139.189C196.164 138.546 196.632 138.06 197.098 137.576C197.508 137.15 197.916 136.726 198.066 136.199C198.169 135.84 198.21 135.448 198.221 135.046C199.82 135.521 201.426 135.99 203.039 136.453L203.055 136.38C211.94 138.931 221.022 141.299 230.277 143.465L230.272 143.487C231.105 143.675 231.936 143.859 232.767 144.043L232.82 144.055L232.823 144.055C233.199 144.141 233.577 144.228 233.955 144.313L234.573 144.453L234.574 144.453C234.802 144.505 235.03 144.557 235.26 144.608L235.264 144.587C283.954 155.077 330.7 158.537 371.414 155.832C360.028 159.648 347.586 162.564 334.311 164.523C295.319 170.12 249.239 167.508 201.655 155.302L201.649 155.324L201.34 155.241C201.295 155.229 201.251 155.217 201.207 155.205L201.206 155.205C201.161 155.193 201.117 155.18 201.072 155.168L200.803 155.096C200.761 155.085 200.719 155.074 200.677 155.062C200.635 155.051 200.593 155.039 200.55 155.028C200.217 154.937 199.884 154.847 199.552 154.756C198.851 154.572 198.151 154.387 197.451 154.199L197.457 154.177C196.152 153.812 194.851 153.442 193.556 153.066Z"
            fill="#FBFBFB"
            fillOpacity="0.2"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M233.637 0.368896C233.245 1.1262 233.114 1.99447 233.425 3.00478C233.721 3.96816 234.412 4.66075 235.087 5.3371C235.738 5.98953 236.374 6.62685 236.626 7.47754C236.939 8.53236 235.393 9.30296 234.108 9.9437C233.526 10.2343 232.997 10.4982 232.719 10.7497C231.49 11.861 231.568 13.1629 231.653 14.5708C231.693 15.2454 231.735 15.9444 231.636 16.6585C231.305 19.0248 229.406 21.1028 227.553 23.1295C227.215 23.4992 226.879 23.8673 226.554 24.235C228.835 24.7721 231.122 25.3259 233.414 25.8965L233.392 25.9677C242.361 28.2007 251.411 30.6915 260.509 33.4428L260.516 33.4213C261.33 33.6754 262.142 33.931 262.953 34.1881C263.342 34.3073 263.73 34.427 264.117 34.5469C264.32 34.6096 264.522 34.6722 264.723 34.7348C264.948 34.8046 265.171 34.8743 265.395 34.944L265.388 34.9656C319.222 52.2918 366.351 76.213 402.23 102.645C373.373 61.1143 315.064 22.9435 242.35 2.6244L242.356 2.60199C241.655 2.41435 240.955 2.22856 240.255 2.04518C239.557 1.85405 238.858 1.66481 238.157 1.4769L238.151 1.49931C236.644 1.11291 235.14 0.736116 233.637 0.368896Z"
            fill="black"
            fillOpacity="0.1"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M224.915 79.7157C218.768 102.655 232.382 126.233 255.32 132.38C278.259 138.526 301.838 124.913 307.984 101.974C314.131 79.0352 300.518 55.4566 277.579 49.3101C254.64 43.1637 231.061 56.7767 224.915 79.7157ZM235.665 82.5961C231.109 99.598 241.198 117.074 258.201 121.63C275.203 126.186 292.679 116.096 297.235 99.0938C301.79 82.0918 291.7 64.616 274.698 60.0603C257.696 55.5046 240.22 65.5942 235.665 82.5961Z"
            fill="#233D4D"
          />
        </Rocket>
        <SpilledOil>
          <path
            d="M324.326 39.2664C325.83 56.2664 286.326 63.2664 199.826 59.2664C168.79 63.7433 149.499 71.7664 130.499 71.7664C81.5706 71.7664 79.9545 62.7895 49.822 55.2664C24.0041 48.8204 16.3262 59.7664 5.32629 40.2664C-23.6708 10.2664 70.9712 0.266357 161.822 0.266357C252.673 0.266357 309.83 23.2664 324.326 39.2664Z"
            fill="black"
          />
          <path
            d="M304.499 35.7209C305.876 51.1755 269.701 53.4027 190.499 49.7664C162.082 53.8363 134.896 63.2664 117.499 63.2664C72.699 63.2664 90.0891 56.6056 62.499 49.7664C38.8595 43.9064 15.5705 53.4482 5.49869 35.7209C-21.0518 8.44818 72.9827 0.266357 156.168 0.266357C239.353 0.266357 291.226 21.1754 304.499 35.7209Z"
            fill="#484848"
          />
        </SpilledOil>
        <CrackedWindow>
          <path />
        </CrackedWindow>
      </Image>
      <Title>{text}</Title>
    </Container>
  );
};

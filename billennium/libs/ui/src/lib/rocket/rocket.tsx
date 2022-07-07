import styled, {  keyframes } from 'styled-components';

export interface RocketProps {
    size?: number;
}

const AnimationRocket = keyframes`
    0% {
        transform: translateX(0);
        transform: translateY(0);
    }

    25% {
        transform: translateX(-4px);
        transform: translateY(-4px);
    }

    50% {
        transform: translateX(0);
        transform: translateY(0);
    }

    75% {
        transform: translateX(4px);
        transform: translateY(4px);
    }

    100% {
        transform: translateX(0);
        transform: translateY(0);
    }
`;

const AnimationFlame = keyframes`
    0%{
        opacity: 1;
    }
    50% {
        opacity: 0.5;
    }
    100% {
        opacity: 1;
    }
`;

const Body = styled.path`
    animation: ${AnimationRocket} 1s linear infinite;
`;

const Flame = styled.path`
    animation: ${AnimationFlame} 0.4s linear infinite, ${AnimationRocket} 1s linear infinite;
`;


export const Rocket = ({size }: RocketProps) => {
    return(
        <svg width={`${size}`} viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Flame fillRule="evenodd" clipRule="evenodd" d="M15.4538 240.581L15.337 240.653L15.5261 240.464L45.2222 192.548L30.2764 201.836L48.2855 177.687C61.1152 161.565 79.8262 155.695 90.4369 165.723L90.438 165.722C90.4452 165.73 90.4524 165.737 90.4596 165.745C90.4672 165.752 90.4747 165.759 90.4823 165.766L90.4811 165.768C100.533 176.354 94.6499 195.023 78.4909 207.824L54.2866 225.792L63.5956 210.88L15.5688 240.51L15.3827 240.696L15.4538 240.581Z" fill="#FF0000"/>
            <Flame fillRule="evenodd" clipRule="evenodd" d="M41.1056 214.387L39.4967 215.489L42.2096 212.782L58.4234 189.208L47.7243 191.926L62.8273 178.779L51.4373 180.958L65.1637 170.989C73.5463 165.993 81.8848 163.636 87.728 168.247L87.3216 168.652C91.429 174.452 89.0607 182.536 84.1954 190.662L74.2037 204.357L76.3877 192.993L63.2115 208.062L65.9356 197.387L42.3082 213.564L40.2803 215.587L41.1056 214.387Z" fill="#FF5A00"/>
            <Flame fillRule="evenodd" clipRule="evenodd" d="M61.7737 195.012L61.361 195.298L62.0608 194.6L74.7329 176.419L66.2829 180.054L71.5546 174.052C76.9589 167.261 83.8269 164.459 88.2651 168.699L88.2443 168.72C92.3225 173.151 89.5034 179.926 82.7609 185.267L76.7454 190.527L80.3888 182.096L62.1652 194.74L61.5015 195.402L61.7737 195.012Z" fill="#F4E409"/>
            <Body fillRule="evenodd" clipRule="evenodd" d="M109.486 218.177C163.118 194.964 195.404 149.362 181.599 116.323L120.308 142.852C134.535 163.357 129.864 194.442 109.351 218.236L109.486 218.177Z" fill="black"/>
            <Body fillRule="evenodd" clipRule="evenodd" d="M111.012 217.508C163.729 194.096 195.273 149.047 181.599 116.323L176.939 118.34C186.326 149.673 158.505 192.326 111.012 217.508Z" fill="white" fillOpacity="0.2"/>
            <Body fillRule="evenodd" clipRule="evenodd" d="M37.7498 146.571C61.0041 93.055 106.697 60.8436 139.808 74.6252L113.232 135.784C92.682 121.583 61.5319 126.239 37.6913 146.706L37.7498 146.571Z" fill="black"/>
            <Body fillRule="evenodd" clipRule="evenodd" d="M139.804 74.6213L137.662 79.5466C121.829 74.784 101.979 77.8831 81.9814 87.6272C101.328 72.8958 122.321 67.3493 139.804 74.6213Z" fill="black" fillOpacity="0.2"/>
            <Body fillRule="evenodd" clipRule="evenodd" d="M110.343 179.732L75.9077 145.375C75.5758 146.383 75.2605 147.388 74.962 148.387L74.99 148.415C73.8771 152.142 72.9969 155.803 72.3563 159.375L96.3383 183.303C100.879 182.492 105.563 181.297 110.343 179.732Z" fill="#FBFBFB"/>
            <Body fillRule="evenodd" clipRule="evenodd" d="M117.135 80.848C117.4 80.5829 117.666 80.3189 117.933 80.0558C118.197 79.7899 118.461 79.5245 118.727 79.2594L118.736 79.2679C153.02 45.784 193.741 28.9433 221.707 34.2618C227.037 62.1648 210.158 102.793 176.599 137L176.607 137.009C176.534 137.082 176.461 137.154 176.388 137.227C176.322 137.293 176.256 137.358 176.19 137.424C176.063 137.55 175.936 137.675 175.809 137.801C175.545 138.067 175.281 138.332 175.015 138.597L175.006 138.589C172.014 141.511 168.972 144.307 165.894 146.973L165.923 147.001C145.496 164.69 123.472 176.633 103.58 181.757L73.9337 152.177C74.2566 150.929 74.6066 149.673 74.9833 148.409L74.9553 148.381C81.4722 126.517 95.9959 102.412 117.143 80.8565L117.135 80.848Z" fill="#FF5A00"/>
            <Body d="M177.186 103.879C170.307 110.742 159.155 110.742 152.276 103.879C145.397 97.0153 145.397 85.8877 152.276 79.0245C159.155 72.1612 170.307 72.1612 177.186 79.0245C184.065 85.8877 184.065 97.0153 177.186 103.879Z" fill="#FBFBFB"/>
            <Body d="M180.869 80.2197L182.967 86.0587L147.695 98.6743L145.597 92.8353L180.869 80.2197Z" fill="#EFEFEF"/>
            <Body d="M179.29 76.6753L180.116 78.9728L144.424 91.7387L143.599 89.4411L179.29 76.6753Z" fill="#EFEFEF"/>
            <Body fillRule="evenodd" clipRule="evenodd" d="M148.613 106.803C157.312 115.483 171.417 115.483 180.117 106.803C188.817 98.1225 188.817 84.0494 180.117 75.3694C171.417 66.6894 157.312 66.6894 148.613 75.3694C139.913 84.0494 139.913 98.1225 148.613 106.803ZM152.69 102.735C159.138 109.168 169.592 109.168 176.04 102.735C182.488 96.3013 182.488 85.8706 176.04 79.4372C169.592 73.0038 159.138 73.0038 152.69 79.4372C146.242 85.8706 146.242 96.3013 152.69 102.735Z" fill="#233D4D"/>
            <Body fillRule="evenodd" clipRule="evenodd" d="M217.628 73.1364C216.523 76.4365 215.241 79.7806 213.787 83.1528C205.95 78.1506 198.14 71.9115 190.771 64.559C183.602 57.4065 177.49 49.8383 172.547 42.2333C175.933 40.7747 179.29 39.4883 182.604 38.3789C187.061 44.7335 192.327 51.0192 198.334 57.013C204.536 63.2005 211.049 68.5995 217.628 73.1364Z" fill="#FBFBFB"/>
            <Body fillRule="evenodd" clipRule="evenodd" d="M110.378 179.768L75.8994 145.366C75.5675 146.375 75.2596 147.387 74.9611 148.387L74.9891 148.414C73.8762 152.141 72.996 155.802 72.3554 159.375L96.3374 183.302C100.878 182.492 105.605 181.584 110.378 179.768Z" fill="white"/>
            <Body d="M177.186 103.879C170.307 110.742 159.155 110.742 152.276 103.879C145.397 97.0153 145.397 85.8877 152.276 79.0245C159.155 72.1612 170.307 72.1612 177.186 79.0245C184.065 85.8877 184.065 97.0153 177.186 103.879Z" fill="white"/>
            <Body d="M180.869 80.22L182.967 86.0589L147.696 98.6745L145.598 92.8356L180.869 80.22Z" fill="#EFEFEF"/>
            <Body d="M179.29 76.6753L180.116 78.9728L144.424 91.7387L143.599 89.4411L179.29 76.6753Z" fill="#EFEFEF"/>
            <Body fillRule="evenodd" clipRule="evenodd" d="M148.613 106.803C157.312 115.483 171.417 115.483 180.117 106.803C188.817 98.1225 188.817 84.0494 180.117 75.3694C171.417 66.6894 157.312 66.6894 148.613 75.3694C139.913 84.0494 139.913 98.1225 148.613 106.803ZM152.69 102.735C159.138 109.168 169.592 109.168 176.04 102.735C182.488 96.3013 182.488 85.8706 176.04 79.4372C169.592 73.0038 159.138 73.0038 152.69 79.4372C146.242 85.8706 146.242 96.3013 152.69 102.735Z" fill="black"/>
            <Body fillRule="evenodd" clipRule="evenodd" d="M217.628 73.1364C216.523 76.4365 215.241 79.7806 213.787 83.1528C205.95 78.1506 198.14 71.9115 190.771 64.559C183.602 57.4065 177.49 49.8383 172.547 42.2333C175.933 40.7747 179.29 39.4883 182.604 38.3789C187.061 44.7335 192.327 51.0192 198.334 57.013C204.536 63.2005 211.049 68.5995 217.628 73.1364Z" fill="white"/>
            <Body fillRule="evenodd" clipRule="evenodd" d="M204.937 33.6129C178.829 35.7973 146.6 52.0337 118.648 79.3328L118.639 79.3243C118.373 79.5894 118.109 79.8548 117.845 80.1207C117.579 80.3838 117.313 80.6478 117.047 80.9129L117.055 80.9214C95.908 102.477 81.3843 126.582 74.8675 148.446L74.8738 148.452L74.8955 148.474C74.5187 149.738 74.1688 150.994 73.8458 152.242L73.8504 152.247C73.2196 154.679 72.6915 157.079 72.2681 159.44L77.7459 164.905C78.4818 162.616 79.3121 160.29 80.2345 157.932L80.2041 157.899C88.6144 136.365 104.704 112.167 126.774 89.3475L126.801 89.3758C130.126 85.9375 133.587 82.5305 137.179 79.1687L137.171 79.1601C137.496 78.8613 137.821 78.5637 138.146 78.2669C138.3 78.1241 138.454 77.9814 138.609 77.8388C138.689 77.7646 138.77 77.6903 138.85 77.6161C138.939 77.5339 139.029 77.4517 139.118 77.3695L139.126 77.3781C160.844 57.7577 183.785 42.843 204.937 33.6129Z" fill="black" fillOpacity="0.1"/>
            <Body fillRule="evenodd" clipRule="evenodd" d="M215.107 80.0089C217.666 73.5603 219.581 67.2372 220.818 61.1534C211.486 80.0785 197.825 100.109 180.505 119.194L180.514 119.202L180.267 119.469L180.044 119.71C179.901 119.864 179.758 120.018 179.615 120.171C179.317 120.496 179.019 120.821 178.719 121.145L178.711 121.137C175.341 124.72 171.927 128.174 168.48 131.492L168.509 131.518C145.638 153.538 121.385 169.591 99.8021 177.983L99.769 177.952C97.5828 178.803 95.4239 179.576 93.2968 180.268L96.346 183.311C100.887 182.5 105.614 181.592 110.387 179.776L110.387 179.775C128.422 173.877 147.805 162.705 165.931 147.009L165.903 146.981C168.981 144.316 172.022 141.52 175.015 138.597L175.023 138.605C175.289 138.34 175.554 138.075 175.817 137.809C175.944 137.684 176.071 137.558 176.198 137.432L176.396 137.235L176.616 137.017L176.607 137.008C194.409 118.863 207.518 98.9102 215.107 80.0089Z" fill="white" fillOpacity="0.2"/>
            <Body fillRule="evenodd" clipRule="evenodd" d="M221.8 34.7604L238.547 17.4374L221.168 34.1625C209.923 32.1499 196.66 33.6728 182.604 38.3788C187.061 44.7335 192.327 51.0192 198.334 57.0129C204.536 63.2004 211.049 68.5995 217.628 73.1364C222.314 59.1478 223.821 45.9507 221.8 34.7604Z" fill="black"/>
        </svg>
    )
}
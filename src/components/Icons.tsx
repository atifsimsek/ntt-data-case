import React from 'react';

interface FullScreenOffIconProps {
  size: number;
  color?: string;
}

const SearchIcon: React.FC<FullScreenOffIconProps> = ({ size }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.7422 10.3439C12.5329 9.2673 13 7.9382 13 6.5C13 2.91015 10.0899 0 6.5 0C2.91015 0 0 2.91015 0 6.5C0 10.0899 2.91015 13 6.5 13C7.93858 13 9.26801 12.5327 10.3448 11.7415L10.3439 11.7422C10.3734 11.7822 10.4062 11.8204 10.4424 11.8566L14.2929 15.7071C14.6834 16.0976 15.3166 16.0976 15.7071 15.7071C16.0976 15.3166 16.0976 14.6834 15.7071 14.2929L11.8566 10.4424C11.8204 10.4062 11.7822 10.3734 11.7422 10.3439ZM12 6.5C12 9.53757 9.53757 12 6.5 12C3.46243 12 1 9.53757 1 6.5C1 3.46243 3.46243 1 6.5 1C9.53757 1 12 3.46243 12 6.5Z"
        fill="white"
      />
    </svg>
  );
};

const ArrowUp: React.FC<FullScreenOffIconProps> = ({ size }) => {
  return (
    <svg
      width="12"
      height="9"
      viewBox="0 0 12 9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6 0.975L12 6.975L10.6 8.375L6 3.775L1.4 8.375L-1.22392e-07 6.975L6 0.975Z"
        fill="black"
      />
    </svg>
  );
};

const ArrowDown: React.FC<FullScreenOffIconProps> = ({ size }) => {
  return (
    <svg
      width="12"
      height="9"
      viewBox="0 0 12 9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6 8.37501L0 2.37501L1.4 0.975006L6 5.57501L10.6 0.975006L12 2.37501L6 8.37501Z"
        fill="black"
      />
    </svg>
  );
};

const Menu: React.FC<FullScreenOffIconProps> = ({ size }) => {
  return (
    <svg
      width="18"
      height="11"
      viewBox="0 0 18 11"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 11V9.16667H18V11H0ZM0 6.41667V4.58333H18V6.41667H0ZM0 1.83333V0H18V1.83333H0Z"
        fill="#1C1B1F"
      />
    </svg>
  );
};

const Deneme: React.FC<FullScreenOffIconProps> = ({ size, color }) => {
  return (
    <svg
      width="183"
      height="24"
      viewBox="0 0 183 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_12_67)">
        <path
          d="M165.884 18.528C165.023 18.528 163.946 18.144 163.946 16.128C163.946 14.112 164.915 13.728 165.884 13.728H177.079V18.432L165.884 18.528ZM174.496 0.191986H159.641V5.18399H174.173C176.326 5.18399 177.187 6.04799 177.187 8.25599V9.02399H165.131C160.502 9.02399 158.241 11.04 158.241 15.744V16.8C158.241 21.6 160.609 23.52 165.346 23.52H183V8.25599C182.892 2.39999 180.847 0.191986 174.496 0.191986Z"
          fill={color}
        />
        <path
          d="M134.882 0.191986V5.18399H143.278V23.52H149.199V5.18399H157.595V0.191986H134.882Z"
          fill={color}
        />
        <path
          d="M116.689 18.528C115.828 18.528 114.752 18.144 114.752 16.128C114.752 14.112 115.721 13.728 116.689 13.728H127.885V18.432L116.689 18.528ZM125.301 0.191986H110.446V5.18399H124.978C127.131 5.18399 127.992 6.04799 127.992 8.25599C127.992 8.25599 127.992 8.92799 127.992 9.02399H115.936C111.307 9.02399 109.046 11.04 109.046 15.744V16.8C109.046 21.6 111.415 23.52 116.151 23.52H133.805V8.25599C133.805 2.39999 131.545 0.191986 125.301 0.191986Z"
          fill={color}
        />
        <path
          d="M97.9588 0.191986H82.1347V23.424H98.2818C104.633 23.52 106.678 20.64 106.678 15.264V8.44799C106.678 2.30399 103.987 0.191986 97.9588 0.191986ZM100.65 15.456C100.65 17.664 99.7888 18.528 97.6359 18.528H88.0553V5.27999H97.6359C99.7888 5.27999 100.65 6.14399 100.65 8.35199V15.456Z"
          fill={color}
        />
        <path
          d="M52.3165 0.191986V5.18399H60.7129V23.52H66.6335V5.18399H75.03V0.191986H52.3165Z"
          fill={color}
        />
        <path
          d="M27.7729 0.191986V5.18399H36.1694V23.52H42.09V5.18399H50.4865V0.191986H27.7729Z"
          fill={color}
        />
        <path
          d="M19.3765 17.952C19.2688 17.76 11.3029 3.936 10.3341 2.688C9.25765 1.056 7.96588 0 5.27471 0C2.90647 0 0 0.96 0 6.144V23.52H5.92059V9.024C5.92059 7.968 5.81294 6.432 5.81294 6.144C5.81294 5.952 5.81294 5.664 5.92059 5.568C6.13588 5.472 6.24353 5.664 6.35118 5.76C6.45882 5.856 13.8865 18.912 15.3935 21.024C16.47 22.56 17.8694 23.712 20.4529 23.712C22.8212 23.712 25.7276 22.752 25.7276 17.568V0.192H19.8071V14.688C19.8071 15.744 19.9147 17.28 19.9147 17.568C19.9147 17.76 19.9147 18.048 19.8071 18.144C19.6994 18.336 19.5918 18.144 19.3765 17.952Z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="clip0_12_67">
          <rect width="183" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

interface IconProps {
  name: string;
  size?: number;
  color?: string;
}

export const Icon: React.FC<IconProps> = ({ name, size = 24, color }) => {
  const icons: { [key: string]: React.FC<FullScreenOffIconProps> } = {
    search: SearchIcon,
    arrowDown: ArrowDown,
    arrowUp: ArrowUp,
    menu: Menu,
    deneme: Deneme,
  };

  const Component = icons[name];
  return <Component size={size} color={color} />;
};

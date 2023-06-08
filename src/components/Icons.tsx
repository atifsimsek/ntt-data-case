import React from 'react';

interface FullScreenOffIconProps {
  size: number;
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

interface IconProps {
  name: string;
  size?: number;
}

export const Icon: React.FC<IconProps> = ({ name, size = 24 }) => {
  const icons: { [key: string]: React.FC<FullScreenOffIconProps> } = {
    search: SearchIcon,
    arrowDown: ArrowDown,
    arrowUp: ArrowUp,
    menu: Menu,
  };

  const Component = icons[name];
  return <Component size={size} />;
};

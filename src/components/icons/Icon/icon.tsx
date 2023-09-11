import * as React from 'react';

export type IconProps = React.SVGAttributes<SVGElement> & {
  className?: string;
  color?: 'primary' | 'secondary' | 'accent';
  width?: number;
  height?: number;
  // src?: string,
  children?: React.ReactNode;
};

const Icon: React.FC<React.PropsWithChildren<IconProps>> = ({ className, width, height, children }) => {
  return (
    <svg
      data-testid="icon"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
    >
      {children}
    </svg>
  );
};

export default Icon;

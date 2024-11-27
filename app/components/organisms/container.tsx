import { ComponentProps } from "react";

interface ContainerProps extends ComponentProps<"div"> {
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({
  children,
  className = "",
  ...restProps
}) => {
  return (
    <div
      {...restProps}
      className={`w-full max-w-[min(97vw,_1900px)] ${className}`}
    >
      {children}
    </div>
  );
};
export default Container;

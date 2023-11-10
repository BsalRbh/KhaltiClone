import { clsx } from "clsx";
const Button = ({ children, variant, onClick }) => {
  return (
    <button
      className={clsx([
        " rounded-2xl px-5 py-1 ml-2 w-[125px]",
        [
          variant === "darkBlue" && "bg-db border-white border-[1px]",
          variant === "orange" && "bg-orange",
          variant === "darkOrange" && "bg-darkOrange",
        ],
      ])}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;

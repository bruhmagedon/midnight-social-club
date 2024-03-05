import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Button.module.scss";
import { ButtonHTMLAttributes, FC } from "react";

export const enum ThemeButton {
  CLEAR = "clear", //кнопка - текст
}

// Расширяемся от типа кнопки по умолчанию
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ThemeButton;
}

export const Button: FC<ButtonProps> = (props) => {
  const { className, children, theme, ...otherProps } = props;

  return (
    <button
      className={classNames(cls.Button, {}, [className, cls[theme]])}
      {...otherProps}
    >
      {children}
    </button>
  );
};

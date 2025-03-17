import { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline';
    size?: 'sm' | 'md' | 'lg';
    fullWidth?: boolean;
}

const Button = ({
    children,
    variant = 'primary',
    size = 'md',
    fullWidth = false,
    className = '',
    ...props
}: ButtonProps) => {
    const baseStyles = 'flex items-center justify-center font-medium rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 cursor-pointer h-fit';

    const variants = {
        primary: 'bg-white text-[#710000] hover:bg-[#710000] hover:text-white focus:ring-[#710000]',
        secondary: 'bg-[#040000] text-white hover:bg-[#040000] focus:ring-[#710000]',
        outline: 'border border-white text-white hover:bg-transparent focus:ring-[#710000]'
    };

    const sizes = {
        sm: 'px-3 py-1.5 text-sm',
        md: 'px-[16px] lg:px-[32px] py-[8px] lg:py-[15px] text-sm lg:text-base',
        lg: 'px-6 py-3 text-lg'
    };

    const classes = [
        baseStyles,
        variants[variant],
        sizes[size],
        fullWidth ? 'w-full' : '',
        className
    ].join(' ');

    return (
        <button
            className={classes}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;
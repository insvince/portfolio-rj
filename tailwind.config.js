/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{html,js}'],
    theme: {
        screens: {
            // => @media (max-width)
            '2xl': { max: '1535px' },
            xl: { max: '1279px' },
            lg: { max: '1023px' },
            md: { max: '767px' },
            sm: { max: '639px' },
        },
        extend: {
            animation: {
                toastMessage:
                    'toastMessage 1s ease, fadeOut 1s linear 4s forwards',
                translateX: 'translateX 2s ease',
                translateXReverse: 'translateXReverse 2s ease',
                translateY: 'translateY 2s ease',
                translateYReverse: 'translateYReverse 2s ease',
                swimming: 'swimming 8s linear infinite',
                flash: 'flash 2s ease-in-out',
                progess: 'progess 2s ease-in-out',
            },
            keyframes: {
                toastMessage: {
                    from: { transform: 'translateX(500px)', opacity: 0.1 },
                    to: { transform: 'translateX(0px)', opacity: 1 },
                },
                fadeOut: {
                    to: { opacity: 0 },
                },
                translateX: {
                    '0%': { transform: 'translateX(-300px)', opacity: 0.1 },
                    '50%': { transform: 'translateX(30px)', opacity: 0.3 },
                    '100%': { transform: 'translateX(0px)', opacity: 1 },
                },
                translateXReverse: {
                    '0%': { transform: 'translateX(300px) ', opacity: 0.1 },
                    '50%': { transform: 'translateX(-40px) ', opacity: 0.3 },
                    '100%': { transform: 'translateX(0px)', opacity: 1 },
                },
                swimming: {
                    '0%': { transform: 'translateX(10px)' },
                    '25%': { transform: 'translateX(15px) translateY(-5px)' },
                    '50%': {
                        transform: 'translateY(15px) translateX(20px)',
                    },
                    '75%': {
                        transform: 'translateY(25px) translateX(-5px)',
                    },
                    '100%': { transform: 'translateX(10px)' },
                },
                flash: {
                    '0%': { opacity: 0.1 },
                    '50%': { opacity: 0.3 },
                    '100%': { opacity: 1 },
                },
                progess: {
                    '0%': { transform: 'translateX(-300px)' },
                    '100%': { transform: 'translateX(0px)' },
                },
                translateY: {
                    '0%': { transform: 'translateY(-300px)', opacity: 0.1 },
                    '50%': { transform: 'translateY(20px)', opacity: 0.3 },
                    '100%': { transform: 'translateY(0px)', opacity: 1 },
                },
                translateYReverse: {
                    '0%': { transform: 'translateY(300px) ', opacity: 0.1 },
                    '50%': { transform: 'translateY(-20px) ', opacity: 0.3 },
                    '100%': { transform: 'translateY(0px)', opacity: 1 },
                },
            },
        },
    },
    plugins: [],
};

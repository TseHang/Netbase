import { DefaultTheme } from 'styled-components';

export const colors = {
  primary: {
    100: '#ffeccb',
    200: '#fab664',
    500: '#eb6702',
    600: '#ca4e01',
  },
  secondary: {
    100: '#cbf7ff',
    200: '#53d2e8',
    500: '#37b8cf',
    600: '#309eb2',
  },
  danger: {
    100: '#ffe4d7',
    200: '#ff9872',
    500: '#fc3738',
    600: '#e11d3e',
  },
  success: {
    100: '#e5fddc',
    200: '#9ff194',
    500: '#4cd154',
    600: '#36b44b',
  },
  warning: {
    100: '#fef7cd',
    200: '#feeb9c',
    500: '#ffd033',
    600: '#f4b507',
  },
  gray: {
    100: '#EDF2F7',
    200: '#E2E8F0',
    500: '#718096',
    600: '#4A5568',
  },
};

export const theme: DefaultTheme = {
  borderRadius: '5px',

  colors: {
    documentColor: '#333333',
    main: colors.primary[500],
    lightMain: colors.primary[100],
    secondary: colors.secondary[500],
    border: colors.gray[600],
    contentBackground: '#121212',
  },
};
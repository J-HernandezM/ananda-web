'use client';
import * as fonts from '@/shared/utils/fonts';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: fonts.lato.style.fontFamily,
  },
});

export default theme;

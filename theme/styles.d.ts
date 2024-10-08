import 'styled-components/native';

declare module 'styled-components/native' {
  type ThemeType = {
    primary: string;
    surfaceTint: string;
    onPrimary: string;
    primaryContainer: string;
    onPrimaryContainer: string;
    secondary: string;
    onSecondary: string;
    secondaryContainer: string;
    onSecondaryContainer: string;
    tertiary: string;
    onTertiary: string;
    tertiaryContainer: string;
    onTertiaryContainer: string;
    error: string;
    onError: string;
    errorContainer: string;
    onErrorContainer: string;
    background: string;
    onBackground: string;
    surface: string;
    onSurface: string;
    surfaceVariant: string;
    onSurfaceVariant: string;
    outline: string;
    outlineVariant: string;
    shadow: string;
    scrim: string;
    inverseSurface: string;
    inverseOnSurface: string;
    inversePrimary: string;
    primaryFixed: string;
    onPrimaryFixed: string;
    primaryFixedDim: string;
    onPrimaryFixedVariant: string;
    secondaryFixed: string;
    onSecondaryFixed: string;
    secondaryFixedDim: string;
    onSecondaryFixedVariant: string;
    tertiaryFixed: string;
    onTertiaryFixed: string;
    tertiaryFixedDim: string;
    onTertiaryFixedVariant: string;
    surfaceDim: string;
    surfaceBright: string;
    surfaceContainerLowest: string;
    surfaceContainerLow: string;
    surfaceContainer: string;
    surfaceContainerHigh: string;
    surfaceContainerHighest: string;
    palettes: {
      primary: {
        0: '#000000';
        5: '#00131C';
        10: '#001E2B';
        15: '#002939';
        20: '#003547';
        25: '#004157';
        30: '#004D66';
        35: '#005976';
        40: '#006686';
        50: '#2F7FA1';
        60: '#4E99BC';
        70: '#6BB4D8';
        80: '#87D0F4';
        90: '#C0E8FF';
        95: '#E1F3FF';
        98: '#F4FAFF';
        99: '#FAFCFF';
        100: '#FFFFFF';
      };
      secondary: {
        0: '#000000';
        5: '#260600';
        10: '#380D00';
        15: '#491300';
        20: '#5B1A00';
        25: '#6D2202';
        30: '#7C2D0C';
        35: '#8C3917';
        40: '#9B4422';
        50: '#BB5C37';
        60: '#DB744E';
        70: '#FB8E65';
        80: '#FFB59B';
        90: '#FFDBCF';
        95: '#FFEDE8';
        98: '#FFF8F6';
        99: '#FFFBFF';
        100: '#FFFFFF';
      };
      tertiary: {
        0: '#000000';
        5: '#100E24';
        10: '#1B1930';
        15: '#26233A';
        20: '#302E46';
        25: '#3B3851';
        30: '#47445D';
        35: '#534F69';
        40: '#5F5B76';
        50: '#78748F';
        60: '#928DAA';
        70: '#ACA8C5';
        80: '#C8C3E2';
        90: '#E4DFFE';
        95: '#F3EEFF';
        98: '#FCF8FF';
        99: '#FFFBFF';
        100: '#FFFFFF';
      };
      neutral: {
        0: '#000000';
        5: '#0F1112';
        10: '#1A1C1D';
        15: '#242627';
        20: '#2F3132';
        25: '#3A3C3D';
        30: '#454748';
        35: '#515354';
        40: '#5D5E60';
        50: '#767779';
        60: '#909192';
        70: '#AAABAD';
        80: '#C6C6C8';
        90: '#E2E2E4';
        95: '#F1F0F2';
        98: '#F9F9FB';
        99: '#FCFCFD';
        100: '#FFFFFF';
      };
      neutralvariant: {
        0: '#000000';
        5: '#0C1215';
        10: '#171C1F';
        15: '#21262A';
        20: '#2C3134';
        25: '#373C40';
        30: '#42474B';
        35: '#4E5357';
        40: '#5A5F63';
        50: '#72787C';
        60: '#8C9195';
        70: '#A7ACB0';
        80: '#C2C7CB';
        90: '#DEE3E7';
        95: '#EDF1F6';
        98: '#F5FAFE';
        99: '#FAFCFF';
        100: '#FFFFFF';
      };
    };
  };

  export interface DefaultTheme extends ThemeType {}
}

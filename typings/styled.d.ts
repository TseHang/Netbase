// import original module declarations
import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    borderRadius: string;

    colors: {
      main: string;
      documentColor: string;
      lightMain: string;
      secondary: string;
      border: string;
      contentBackground: string;
    };
  }
}

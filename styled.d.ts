import "styled-components";

// and extend them!
declare module "styled-components" {
    export interface DefaultTheme {
        colors: {
            primary: string;
            secondary: string;
        };
        breakpoints: {
            xs: number;
            xm: number;
            sm: number;
            md: number;
            lg: number;
            xl: number;
        };
    }
}

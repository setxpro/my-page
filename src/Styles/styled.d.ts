import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    title: string;
    colors: {
      body: string;
      header: string;
      headerMobile: string;
      text: string;
      lightText: string;
      icons: string;
    };
  }
}

/// <reference types="nativewind/types" />

declare module "*.png";
declare module "*.svg";
declare module "*.jpeg";
declare module "*.jpg";
declare module "*.html" {
  const value: string;
  export default value;
}


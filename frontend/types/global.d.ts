// TypeScript declarations for style imports used as side effects
// This allows importing files like './App.css' without type errors.
declare module '*.css';

// Image file declarations for Next.js static imports
declare module '*.png' {
  const value: import('next/image').StaticImageData;
  export default value;
}

declare module '*.jpg' {
  const value: import('next/image').StaticImageData;
  export default value;
}

declare module '*.jpeg' {
  const value: import('next/image').StaticImageData;
  export default value;
}

declare module '*.gif' {
  const value: import('next/image').StaticImageData;
  export default value;
}

declare module '*.webp' {
  const value: import('next/image').StaticImageData;
  export default value;
}

declare module '*.svg' {
  const value: import('next/image').StaticImageData;
  export default value;
}
declare global {
  // eslint-disable-next-line no-unused-vars
  interface AnyObject {
    [key: string]: any
  }
}

declare module 'vue' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface GlobalComponents {}
}

export {}

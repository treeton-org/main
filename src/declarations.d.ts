declare module '*.svg' {
  const content: string
  export default content
}

declare module '*.sass' {
  const classes: { [key: string]: string }
  export default classes
}
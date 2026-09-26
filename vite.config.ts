import react from '@vitejs/plugin-react'

export default {
  plugins: [react()],

  ssgOptions: {
    entry: 'src/main.tsx',
    dirStyle: 'nested',

    concurrency: 1
  }
}
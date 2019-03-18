// https://umijs.org/zh/config/#plugins

export default {
  plugins: [
    [
      'umi-plugin-react', {
        antd: true,
      }
    ],
  ],
  routes: null,
  outputPath: "./dist",
  base: '/',
  publicPath: '/'
}
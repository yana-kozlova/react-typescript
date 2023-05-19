import webpack from 'webpack';
import { BuildOptions } from './types/config';

import { buildStyleLoader } from './loaders/buildStyleLoader';
import { buildSvgLoader } from './loaders/buildSvgLoader';

export function buildLoaders({ isDev }: BuildOptions): webpack.RuleSetRule[] {
  const typescriptLoader = {
    test: /\.tsx?$/, // .ts or .tsx
    use: 'ts-loader',
    exclude: /node_modules/
  };

  const styleLoader = buildStyleLoader(isDev);

  const svgLoader = buildSvgLoader();

  const fileLoader = {
    test: /\.(png|jpe?g|gif)$/i,
    use: [
      {
        loader: 'file-loader'
      }
    ]
  };
  
  const fontsLoader = {
    test: /\.(ttf)$/i,
    use: {
      loader: 'file-loader',
      options: {
        outputPath: 'fonts',
      },
    },
  };

  const babelLoader = {
    test: /\.m?js$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: [
          ['@babel/preset-env', { targets: 'defaults' }]
        ],
        plugins: [isDev && require.resolve('react-refresh/babel')].filter(Boolean)
      }
    }
  };

  return [
    svgLoader,
    fileLoader,
    typescriptLoader,
    babelLoader,
    fontsLoader,
    styleLoader
  ];
}

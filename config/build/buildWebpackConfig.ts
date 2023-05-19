import webpack from 'webpack';

import { BuildOptions } from './types/config';

import { buildLoaders } from './buildLoaders';
import { buildPlugins } from './buildPlugins';
import { buildResolve } from './buildResolve';
import { buildDevServer } from './buildDevServer';

export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {
  const { paths, mode, isDev } = options;
  return {
    mode,
    entry: paths.entry,
    devServer: isDev ? buildDevServer(options) : { historyApiFallback: true },
    output: {
      filename: '[name].[contenthash].js',
      path: paths.output,
      clean: true,
      publicPath: '/'
    },
    module: {
      rules: buildLoaders(options)
    },
    resolve: buildResolve(options),
    plugins: buildPlugins(options)
  };
}

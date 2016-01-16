react-widgets-webpack
=====================

[React-widgets](http://jquense.github.io/react-widgets/docs/) configuration and loading package for webpack, using
react-widgets (Less).

Based on bootstrap-webpack by Scott Bleck (@bline) and font-awesome-webpack by Gowrav Shekar (@gowravshekar).

Usage
-----

To properly load font-awesome fonts, you need to configure loaders in your `webpack.config.js`. Example:

``` javascript
module.exports = {
  module: {
    loaders: [
      // the url-loader uses DataUrls.
      // the file-loader emits files.
      { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&mimetype=application/font-woff" },
      { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader" }
    ]
  }
};
```

React widgets font urls are of the format `[dot][extension]?=[version-number]`, for example `.woff?v=4.2.0`

The Regex for font types are adjusted to support these formats. Regex also support urls ending with .woff, .ttf, .eot and .svg (Used by Bootstrap).


### Custom configuration

You can configurate react-widgets-webpack with two configuration files:

* `react-widgets.config.js`
* `react-widgets.config.less`

Add both files *next to each other* in your project. Then:

``` javascript
require("react-widgets-webpack!./path/to/react-widgets.config.js");
```

Or simple add it as entry point to your `webpack.config.js`:

``` javascript
module.exports = {
  entry: [
    "react-widgets-webpack!./path/to/react-widgets.config.js",
    "your-existing-entry-point"
  ]
};
```


#### `react-widgets.config.js`

Example:

``` javascript
module.exports = {
  styles: {
    'mixins': true,
    'normalize': true,
    'icons': true,

    'core': true,
    'popup': true,
    'datepicker': true
  }
};
```

#### `react-widgets.config.less`

Imported after React-widgets default variables, but before anything else.

You may customize React-widgets here.

Example:

``` less
@rw-css-prefix:       rw-i;
```

### extract-text-webpack-plugin

Configure style loader in `react-widgets.config.js`.

Example:

``` javascript
module.exports = {
  styleLoader: require('extract-text-webpack-plugin').extract('style-loader', 'css-loader!less-loader'),
  styles: {
    ...
  }
};
```
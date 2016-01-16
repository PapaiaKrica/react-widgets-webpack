var styles = [
    'mixins',
    'normalize',
    'icons',
    'core',
    'popup',
    'datepicker',
    'selectlist',
    'multiselect'
];

module.exports = function (content) {
    this.cacheable(true);
    var config = this.exec(content, this.resourcePath);
    var start =
        '@import "~react-widgets/lib/less/variables.less";\n'
        + '@rw-font-path: "~react-widgets/lib/fonts";\n'
        + '@import "~react-widgets/lib/less/bootstrap-theme.less";\n'
        + '@import "./react-widgets.config.less";\n';
    var source = start + styles.filter(function (style) {
            return config.styles[style];
        }).map(function (style) {
            return '@import "~react-widgets/lib/less/' + style + '.less";\n';
        }).join('\n');

    return source;
};
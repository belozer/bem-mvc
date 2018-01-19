modules.define(
    'i-bem-dom',
    ['inherit', 'jquery'],
    function(provide, inherit, $, bemDom) {

provide(inherit.self(bemDom, {}, {
    init: function() {
        var nodes = $('.model');

        if (nodes.length) nodes.bem('model');

        return this.__base.apply(this, arguments);
    }
}));

});

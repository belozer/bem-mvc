// TODO
// modules.define('glue-field', function(provide) {
//
// provide(GlueField.declMod({ modName : 'type', modVal : 'mod'}, {
//
//     onSetMod: {
//         js: {
//             inited: function() {
//                 this.__base();
//             }
//         }
//     },
//
//     init: function() {
//         this.__base.apply(this, arguments);
//
//         this._gluedBlock = this[this.params.elem ? 'findParrentBlock' : 'findMixedBlock'](this.domElem, this.params.block || this.__self.getName());
//         this._gluedElem = this.params.elem && this._gluedBlock.findElem(this.domElem, this.params.elem);
//
//         this._fieldType = this.model.getType(this.name);
//     },
//
//     onFieldChange: function(e, data) {
//         var modVal = this.model.get(this.name);
//
//         if (this._fieldType == 'boolean')
//             modVal = modVal ? true : false;
//
//         this._gluedBlock.setMod(this._gluedElem, this.params.modName, modVal);
//     }
//
// }));
//
// });

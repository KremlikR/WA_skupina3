/*! DataTables 1.12.1
 * Â©2008-2022 SpryMedia Ltd - datatables.net/license
 */

/**
 * @summary     DataTables
 * @description Paginate, search and order HTML tables
 * @version     1.12.1
 * @author      SpryMedia Ltd
 * @contact     www.datatables.net
 * @copyright   SpryMedia Ltd.
 *
 * This source file is free software, available under the following license:
 *   MIT license - http://datatables.net/license
 *
 * This source file is distributed in the hope that it will be useful, but
 * WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY
 * or FITNESS FOR A PARTICULAR PURPOSE. See the license files for details.
 *
 * For details please refer to: http://www.datatables.net
 */

/*jslint evil: true, undef: true, browser: true */
/*globals $,require,jQuery,define,_selector_run,_selector_opts,_selector_first,_selector_row_indexes,_ext,_Api,_api_register,_api_registerPlural,_re_new_lines,_re_html,_re_formatted_numeric,_re_escape_regex,_empty,_intVal,_numToDecimal,_isNumber,_isHtml,_htmlNumeric,_pluck,_pluck_order,_range,_stripHtml,_unique,_fnBuildAjax,_fnAjaxUpdate,_fnAjaxParameters,_fnAjaxUpdateDraw,_fnAjaxDataSrc,_fnAddColumn,_fnColumnOptions,_fnAdjustColumnSizing,_fnVisibleToColumnIndex,_fnColumnIndexToVisible,_fnVisbleColumns,_fnGetColumns,_fnColumnTypes,_fnApplyColumnDefs,_fnHungarianMap,_fnCamelToHungarian,_fnLanguageCompat,_fnBrowserDetect,_fnAddData,_fnAddTr,_fnNodeToDataIndex,_fnNodeToColumnIndex,_fnGetCellData,_fnSetCellData,_fnSplitObjNotation,_fnGetObjectDataFn,_fnSetObjectDataFn,_fnGetDataMaster,_fnClearTable,_fnDeleteIndex,_fnInvalidate,_fnGetRowElements,_fnCreateTr,_fnBuildHead,_fnDrawHead,_fnDraw,_fnReDraw,_fnAddOptionsHtml,_fnDetectHeader,_fnGetUniqueThs,_fnFeatureHtmlFilter,_fnFilterComplete,_fnFilterCustom,_fnFilterColumn,_fnFilter,_fnFilterCreateSearch,_fnEscapeRegex,_fnFilterData,_fnFeatureHtmlInfo,_fnUpdateInfo,_fnInfoMacros,_fnInitialise,_fnInitComplete,_fnLengthChange,_fnFeatureHtmlLength,_fnFeatureHtmlPaginate,_fnPageChange,_fnFeatureHtmlProcessing,_fnProcessingDisplay,_fnFeatureHtmlTable,_fnScrollDraw,_fnApplyToChildren,_fnCalculateColumnWidths,_fnThrottle,_fnConvertToWidth,_fnGetWidestNode,_fnGetMaxLenString,_fnStringToCss,_fnSortFlatten,_fnSort,_fnSortAria,_fnSortListener,_fnSortAttachListener,_fnSortingClasses,_fnSortData,_fnSaveState,_fnLoadState,_fnSettingsFromNode,_fnLog,_fnMap,_fnBindAction,_fnCallbackReg,_fnCallbackFire,_fnLengthOverflow,_fnRenderer,_fnDataSource,_fnRowAttributes*/

(function( factory ) {
"use strict";

if ( typeof define === 'function' && define.amd ) {
// AMD
define( ['jquery'], function ( $ ) {
return factory( $, window, document );
} );
}
else if ( typeof exports === 'object' ) {
// CommonJS
module.exports = function (root, $) {
if ( ! root ) {
// CommonJS environments without a window global must pass a
// root. This will give an error otherwise
root = window;
}

if ( ! $ ) {
$ = typeof window !== 'undefined' ? // jQuery's factory checks for a global window
require('jquery') :
require('jquery')( root );
}

return factory( $, root, root.document );
};
}
else {
// Browser
window.DataTable = factory( jQuery, window, document );
}
}
(function( $, window, document, undefined ) {
"use strict";


var DataTable = function ( selector, options )
{
// When creating with `new`, create a new DataTable, returning the API instance
if (this instanceof DataTable) {
return $(selector).DataTable(options);
}
else {
// Argument switching
options = selector;
}

/**
 * Perform a jQuery selector action on the table's TR elements (from the tbody) and
 * return the resulting jQuery object.
 *  @param {string|node|jQuery} sSelector jQuery selector or node collection to act on
 *  @param {object} [oOpts] Optional parameters for modifying the rows to be included
 *  @param {string} [oOpts.filter=none] Select TR elements that meet the current filter
 *    criterion ("applied") or all TR elements (i.e. no filter).
 *  @param {string} [oOpts.order=current] Order of the TR elements in the processed array.
 *    Can be either 'current', whereby the current sorting of the table is used, or
 *    'original' whereby the original order the data was read into the table is used.
 *  @param {string} [oOpts.page=all] Limit the selection to the currently displayed page
 *    ("current") or not ("all"). If 'current' is given, then order is assumed to be
 *    'current' and filter is 'applied', regardless of what they might be given as.
 *  @returns {object} jQuery object, filtered by the given selector.
 *  @dtopt API
 *  @deprecated Since v1.10
 *
 *  @example
 *    $(document).ready(function() {
 *      var oTable = $('#example').dataTable();
 *
 *      // Highlight every second row
 *      oTable.$('tr:odd').css('backgroundColor', 'blue');
 *    } );
 *
 *  @example
 *    $(document).ready(function() {
 *      var oTable = $('#example').dataTable();... (zbývá 420 KB)

/**
 * CyberSource Merged Spec
 * All CyberSource API specs merged together. These are available at https://developer.cybersource.com/api/reference/api-reference.html
 *
 * OpenAPI spec version: 0.0.1
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.0
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.CyberSource) {
      root.CyberSource = {};
    }
    root.CyberSource.Invoicingv2invoicesidInvoiceInformation = factory(root.CyberSource.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Invoicingv2invoicesidInvoiceInformation model module.
   * @module model/Invoicingv2invoicesidInvoiceInformation
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>Invoicingv2invoicesidInvoiceInformation</code>.
   * Contains the updatable invoice information.
   * @alias module:model/Invoicingv2invoicesidInvoiceInformation
   * @class
   */
  var exports = function() {
    var _this = this;





  };

  /**
   * Constructs a <code>Invoicingv2invoicesidInvoiceInformation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Invoicingv2invoicesidInvoiceInformation} obj Optional instance to populate.
   * @return {module:model/Invoicingv2invoicesidInvoiceInformation} The populated <code>Invoicingv2invoicesidInvoiceInformation</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('description')) {
        obj['description'] = ApiClient.convertToType(data['description'], 'String');
      }
      if (data.hasOwnProperty('dueDate')) {
        obj['dueDate'] = ApiClient.convertToType(data['dueDate'], 'Date');
      }
      if (data.hasOwnProperty('allowPartialPayments')) {
        obj['allowPartialPayments'] = ApiClient.convertToType(data['allowPartialPayments'], 'Boolean');
      }
      if (data.hasOwnProperty('deliveryMode')) {
        obj['deliveryMode'] = ApiClient.convertToType(data['deliveryMode'], 'String');
      }
    }
    return obj;
  }

  /**
   * The description included in the invoice.
   * @member {String} description
   */
  exports.prototype['description'] = undefined;
  /**
   * The invoice due date. This field is required for creating an invoice. Format: `YYYY-MM-DD`, where `YYYY` = year, `MM` = month, and `DD` = day 
   * @member {Date} dueDate
   */
  exports.prototype['dueDate'] = undefined;
  /**
   * If set to `true`, the payer can make a partial invoice payment.
   * @member {Boolean} allowPartialPayments
   */
  exports.prototype['allowPartialPayments'] = undefined;
  /**
   * If set to `None`, the invoice is created, and its status is set to 'CREATED', but no email is sent.    Possible values:        - `None`   - `Email`  
   * @member {String} deliveryMode
   */
  exports.prototype['deliveryMode'] = undefined;



  return exports;
}));



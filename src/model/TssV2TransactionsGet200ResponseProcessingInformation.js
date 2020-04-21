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
    define(['ApiClient', 'model/TssV2TransactionsGet200ResponseProcessingInformationAuthorizationOptions', 'model/TssV2TransactionsGet200ResponseProcessingInformationBankTransferOptions', 'model/TssV2TransactionsGet200ResponseProcessingInformationJapanPaymentOptions'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./TssV2TransactionsGet200ResponseProcessingInformationAuthorizationOptions'), require('./TssV2TransactionsGet200ResponseProcessingInformationBankTransferOptions'), require('./TssV2TransactionsGet200ResponseProcessingInformationJapanPaymentOptions'));
  } else {
    // Browser globals (root is window)
    if (!root.CyberSource) {
      root.CyberSource = {};
    }
    root.CyberSource.TssV2TransactionsGet200ResponseProcessingInformation = factory(root.CyberSource.ApiClient, root.CyberSource.TssV2TransactionsGet200ResponseProcessingInformationAuthorizationOptions, root.CyberSource.TssV2TransactionsGet200ResponseProcessingInformationBankTransferOptions, root.CyberSource.TssV2TransactionsGet200ResponseProcessingInformationJapanPaymentOptions);
  }
}(this, function(ApiClient, TssV2TransactionsGet200ResponseProcessingInformationAuthorizationOptions, TssV2TransactionsGet200ResponseProcessingInformationBankTransferOptions, TssV2TransactionsGet200ResponseProcessingInformationJapanPaymentOptions) {
  'use strict';




  /**
   * The TssV2TransactionsGet200ResponseProcessingInformation model module.
   * @module model/TssV2TransactionsGet200ResponseProcessingInformation
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>TssV2TransactionsGet200ResponseProcessingInformation</code>.
   * @alias module:model/TssV2TransactionsGet200ResponseProcessingInformation
   * @class
   */
  var exports = function() {
    var _this = this;







  };

  /**
   * Constructs a <code>TssV2TransactionsGet200ResponseProcessingInformation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TssV2TransactionsGet200ResponseProcessingInformation} obj Optional instance to populate.
   * @return {module:model/TssV2TransactionsGet200ResponseProcessingInformation} The populated <code>TssV2TransactionsGet200ResponseProcessingInformation</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('paymentSolution')) {
        obj['paymentSolution'] = ApiClient.convertToType(data['paymentSolution'], 'String');
      }
      if (data.hasOwnProperty('commerceIndicator')) {
        obj['commerceIndicator'] = ApiClient.convertToType(data['commerceIndicator'], 'String');
      }
      if (data.hasOwnProperty('businessApplicationId')) {
        obj['businessApplicationId'] = ApiClient.convertToType(data['businessApplicationId'], 'String');
      }
      if (data.hasOwnProperty('authorizationOptions')) {
        obj['authorizationOptions'] = TssV2TransactionsGet200ResponseProcessingInformationAuthorizationOptions.constructFromObject(data['authorizationOptions']);
      }
      if (data.hasOwnProperty('bankTransferOptions')) {
        obj['bankTransferOptions'] = TssV2TransactionsGet200ResponseProcessingInformationBankTransferOptions.constructFromObject(data['bankTransferOptions']);
      }
      if (data.hasOwnProperty('japanPaymentOptions')) {
        obj['japanPaymentOptions'] = TssV2TransactionsGet200ResponseProcessingInformationJapanPaymentOptions.constructFromObject(data['japanPaymentOptions']);
      }
    }
    return obj;
  }

  /**
   * Type of digital payment solution for the transaction. Possible Values:   - `visacheckout`: Visa Checkout. This value is required for Visa Checkout transactions. For details, see `payment_solution` field description in [Visa Checkout Using the SCMP API.](https://apps.cybersource.com/library/documentation/dev_guides/VCO_SCMP_API/html/)  - `001`: Apple Pay.  - `004`: Cybersource In-App Solution.  - `005`: Masterpass. This value is required for Masterpass transactions on OmniPay Direct. For details, see \"Masterpass\" in the [Credit Card Services Using the SCMP API Guide.](https://apps.cybersource.com/library/documentation/dev_guides/CC_Svcs_SCMP_API/html/)  - `006`: Android Pay.  - `007`: Chase Pay.  - `008`: Samsung Pay.  - `012`: Google Pay. 
   * @member {String} paymentSolution
   */
  exports.prototype['paymentSolution'] = undefined;
  /**
   * Type of transaction. Certain card associations use this information when determining discount rates to charge you. Required for Verified by Visa and MasterCard SecureCode transactions.      This field can contain one of these values:      * 5: `vbv` (Successful Verified by Visa transaction)     * 6: `spa` (MasterCard SecureCode transaction)     * 7: `internet` (default) (eCommerce order placed by     using a Web site)     * 8: `vbv_attempted` (Verified by Visa transaction     was attempted but not authenticated)     * E: `vbv_failure` (Depending on your payment     processor, you may receive this result if Visa’s     directory service is not available)     * F: `spa_failure` (MasterCard SecureCode     authentication failed)     * M: `moto` (Mail order or telephone order)     * P: `retail` (Point-of-sale transaction)     * R: `recurring` (Recurring transaction)     * S: `install` (Installment payment) 
   * @member {String} commerceIndicator
   */
  exports.prototype['commerceIndicator'] = undefined;
  /**
   * Payouts transaction type. Required for OCT transactions. This field is a pass-through, which means that CyberSource does not verify the value or modify it in any way before sending it to the processor. **Note** When the request includes this field, this value overrides the information in your CyberSource account.  For valid values, see the `invoiceHeader_businessApplicationID` field description in [Payouts Using the Simple Order API.](http://apps.cybersource.com/library/documentation/dev_guides/payouts_SO/Payouts_SO_API.pdf) 
   * @member {String} businessApplicationId
   */
  exports.prototype['businessApplicationId'] = undefined;
  /**
   * @member {module:model/TssV2TransactionsGet200ResponseProcessingInformationAuthorizationOptions} authorizationOptions
   */
  exports.prototype['authorizationOptions'] = undefined;
  /**
   * @member {module:model/TssV2TransactionsGet200ResponseProcessingInformationBankTransferOptions} bankTransferOptions
   */
  exports.prototype['bankTransferOptions'] = undefined;
  /**
   * @member {module:model/TssV2TransactionsGet200ResponseProcessingInformationJapanPaymentOptions} japanPaymentOptions
   */
  exports.prototype['japanPaymentOptions'] = undefined;



  return exports;
}));



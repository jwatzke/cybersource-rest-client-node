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
    define(['ApiClient', 'model/Ptsv2paymentsAcquirerInformation', 'model/Ptsv2paymentsRecurringPaymentInformation', 'model/Riskv1authenticationsBuyerInformation', 'model/Riskv1authenticationsClientReferenceInformation', 'model/Riskv1authenticationsConsumerAuthenticationInformation', 'model/Riskv1authenticationsDeviceInformation', 'model/Riskv1authenticationsMerchantInformation', 'model/Riskv1authenticationsOrderInformation', 'model/Riskv1authenticationsPaymentInformation', 'model/Riskv1authenticationsProcessingInformation', 'model/Riskv1authenticationsRiskInformation', 'model/Riskv1authenticationsTravelInformation', 'model/Riskv1decisionsMerchantDefinedInformation'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Ptsv2paymentsAcquirerInformation'), require('./Ptsv2paymentsRecurringPaymentInformation'), require('./Riskv1authenticationsBuyerInformation'), require('./Riskv1authenticationsClientReferenceInformation'), require('./Riskv1authenticationsConsumerAuthenticationInformation'), require('./Riskv1authenticationsDeviceInformation'), require('./Riskv1authenticationsMerchantInformation'), require('./Riskv1authenticationsOrderInformation'), require('./Riskv1authenticationsPaymentInformation'), require('./Riskv1authenticationsProcessingInformation'), require('./Riskv1authenticationsRiskInformation'), require('./Riskv1authenticationsTravelInformation'), require('./Riskv1decisionsMerchantDefinedInformation'));
  } else {
    // Browser globals (root is window)
    if (!root.CyberSource) {
      root.CyberSource = {};
    }
    root.CyberSource.CheckPayerAuthEnrollmentRequest = factory(root.CyberSource.ApiClient, root.CyberSource.Ptsv2paymentsAcquirerInformation, root.CyberSource.Ptsv2paymentsRecurringPaymentInformation, root.CyberSource.Riskv1authenticationsBuyerInformation, root.CyberSource.Riskv1authenticationsClientReferenceInformation, root.CyberSource.Riskv1authenticationsConsumerAuthenticationInformation, root.CyberSource.Riskv1authenticationsDeviceInformation, root.CyberSource.Riskv1authenticationsMerchantInformation, root.CyberSource.Riskv1authenticationsOrderInformation, root.CyberSource.Riskv1authenticationsPaymentInformation, root.CyberSource.Riskv1authenticationsProcessingInformation, root.CyberSource.Riskv1authenticationsRiskInformation, root.CyberSource.Riskv1authenticationsTravelInformation, root.CyberSource.Riskv1decisionsMerchantDefinedInformation);
  }
}(this, function(ApiClient, Ptsv2paymentsAcquirerInformation, Ptsv2paymentsRecurringPaymentInformation, Riskv1authenticationsBuyerInformation, Riskv1authenticationsClientReferenceInformation, Riskv1authenticationsConsumerAuthenticationInformation, Riskv1authenticationsDeviceInformation, Riskv1authenticationsMerchantInformation, Riskv1authenticationsOrderInformation, Riskv1authenticationsPaymentInformation, Riskv1authenticationsProcessingInformation, Riskv1authenticationsRiskInformation, Riskv1authenticationsTravelInformation, Riskv1decisionsMerchantDefinedInformation) {
  'use strict';




  /**
   * The CheckPayerAuthEnrollmentRequest model module.
   * @module model/CheckPayerAuthEnrollmentRequest
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>CheckPayerAuthEnrollmentRequest</code>.
   * @alias module:model/CheckPayerAuthEnrollmentRequest
   * @class
   */
  var exports = function() {
    var _this = this;














  };

  /**
   * Constructs a <code>CheckPayerAuthEnrollmentRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CheckPayerAuthEnrollmentRequest} obj Optional instance to populate.
   * @return {module:model/CheckPayerAuthEnrollmentRequest} The populated <code>CheckPayerAuthEnrollmentRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('clientReferenceInformation')) {
        obj['clientReferenceInformation'] = Riskv1authenticationsClientReferenceInformation.constructFromObject(data['clientReferenceInformation']);
      }
      if (data.hasOwnProperty('orderInformation')) {
        obj['orderInformation'] = Riskv1authenticationsOrderInformation.constructFromObject(data['orderInformation']);
      }
      if (data.hasOwnProperty('paymentInformation')) {
        obj['paymentInformation'] = Riskv1authenticationsPaymentInformation.constructFromObject(data['paymentInformation']);
      }
      if (data.hasOwnProperty('processingInformation')) {
        obj['processingInformation'] = Riskv1authenticationsProcessingInformation.constructFromObject(data['processingInformation']);
      }
      if (data.hasOwnProperty('buyerInformation')) {
        obj['buyerInformation'] = Riskv1authenticationsBuyerInformation.constructFromObject(data['buyerInformation']);
      }
      if (data.hasOwnProperty('deviceInformation')) {
        obj['deviceInformation'] = Riskv1authenticationsDeviceInformation.constructFromObject(data['deviceInformation']);
      }
      if (data.hasOwnProperty('merchantInformation')) {
        obj['merchantInformation'] = Riskv1authenticationsMerchantInformation.constructFromObject(data['merchantInformation']);
      }
      if (data.hasOwnProperty('acquirerInformation')) {
        obj['acquirerInformation'] = Ptsv2paymentsAcquirerInformation.constructFromObject(data['acquirerInformation']);
      }
      if (data.hasOwnProperty('recurringPaymentInformation')) {
        obj['recurringPaymentInformation'] = Ptsv2paymentsRecurringPaymentInformation.constructFromObject(data['recurringPaymentInformation']);
      }
      if (data.hasOwnProperty('consumerAuthenticationInformation')) {
        obj['consumerAuthenticationInformation'] = Riskv1authenticationsConsumerAuthenticationInformation.constructFromObject(data['consumerAuthenticationInformation']);
      }
      if (data.hasOwnProperty('riskInformation')) {
        obj['riskInformation'] = Riskv1authenticationsRiskInformation.constructFromObject(data['riskInformation']);
      }
      if (data.hasOwnProperty('travelInformation')) {
        obj['travelInformation'] = Riskv1authenticationsTravelInformation.constructFromObject(data['travelInformation']);
      }
      if (data.hasOwnProperty('merchantDefinedInformation')) {
        obj['merchantDefinedInformation'] = ApiClient.convertToType(data['merchantDefinedInformation'], [Riskv1decisionsMerchantDefinedInformation]);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/Riskv1authenticationsClientReferenceInformation} clientReferenceInformation
   */
  exports.prototype['clientReferenceInformation'] = undefined;
  /**
   * @member {module:model/Riskv1authenticationsOrderInformation} orderInformation
   */
  exports.prototype['orderInformation'] = undefined;
  /**
   * @member {module:model/Riskv1authenticationsPaymentInformation} paymentInformation
   */
  exports.prototype['paymentInformation'] = undefined;
  /**
   * @member {module:model/Riskv1authenticationsProcessingInformation} processingInformation
   */
  exports.prototype['processingInformation'] = undefined;
  /**
   * @member {module:model/Riskv1authenticationsBuyerInformation} buyerInformation
   */
  exports.prototype['buyerInformation'] = undefined;
  /**
   * @member {module:model/Riskv1authenticationsDeviceInformation} deviceInformation
   */
  exports.prototype['deviceInformation'] = undefined;
  /**
   * @member {module:model/Riskv1authenticationsMerchantInformation} merchantInformation
   */
  exports.prototype['merchantInformation'] = undefined;
  /**
   * @member {module:model/Ptsv2paymentsAcquirerInformation} acquirerInformation
   */
  exports.prototype['acquirerInformation'] = undefined;
  /**
   * @member {module:model/Ptsv2paymentsRecurringPaymentInformation} recurringPaymentInformation
   */
  exports.prototype['recurringPaymentInformation'] = undefined;
  /**
   * @member {module:model/Riskv1authenticationsConsumerAuthenticationInformation} consumerAuthenticationInformation
   */
  exports.prototype['consumerAuthenticationInformation'] = undefined;
  /**
   * @member {module:model/Riskv1authenticationsRiskInformation} riskInformation
   */
  exports.prototype['riskInformation'] = undefined;
  /**
   * @member {module:model/Riskv1authenticationsTravelInformation} travelInformation
   */
  exports.prototype['travelInformation'] = undefined;
  /**
   * @member {Array.<module:model/Riskv1decisionsMerchantDefinedInformation>} merchantDefinedInformation
   */
  exports.prototype['merchantDefinedInformation'] = undefined;



  return exports;
}));



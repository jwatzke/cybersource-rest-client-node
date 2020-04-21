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
    define(['ApiClient', 'model/Ptsv2paymentsClientReferenceInformation', 'model/Ptsv2paymentsMerchantDefinedInformation', 'model/Ptsv2paymentsPromotionInformation', 'model/Ptsv2paymentsidcapturesAggregatorInformation', 'model/Ptsv2paymentsidcapturesBuyerInformation', 'model/Ptsv2paymentsidcapturesDeviceInformation', 'model/Ptsv2paymentsidcapturesInstallmentInformation', 'model/Ptsv2paymentsidcapturesMerchantInformation', 'model/Ptsv2paymentsidcapturesOrderInformation', 'model/Ptsv2paymentsidcapturesPaymentInformation', 'model/Ptsv2paymentsidcapturesPointOfSaleInformation', 'model/Ptsv2paymentsidcapturesProcessingInformation', 'model/Ptsv2paymentsidcapturesTravelInformation'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Ptsv2paymentsClientReferenceInformation'), require('./Ptsv2paymentsMerchantDefinedInformation'), require('./Ptsv2paymentsPromotionInformation'), require('./Ptsv2paymentsidcapturesAggregatorInformation'), require('./Ptsv2paymentsidcapturesBuyerInformation'), require('./Ptsv2paymentsidcapturesDeviceInformation'), require('./Ptsv2paymentsidcapturesInstallmentInformation'), require('./Ptsv2paymentsidcapturesMerchantInformation'), require('./Ptsv2paymentsidcapturesOrderInformation'), require('./Ptsv2paymentsidcapturesPaymentInformation'), require('./Ptsv2paymentsidcapturesPointOfSaleInformation'), require('./Ptsv2paymentsidcapturesProcessingInformation'), require('./Ptsv2paymentsidcapturesTravelInformation'));
  } else {
    // Browser globals (root is window)
    if (!root.CyberSource) {
      root.CyberSource = {};
    }
    root.CyberSource.CapturePaymentRequest = factory(root.CyberSource.ApiClient, root.CyberSource.Ptsv2paymentsClientReferenceInformation, root.CyberSource.Ptsv2paymentsMerchantDefinedInformation, root.CyberSource.Ptsv2paymentsPromotionInformation, root.CyberSource.Ptsv2paymentsidcapturesAggregatorInformation, root.CyberSource.Ptsv2paymentsidcapturesBuyerInformation, root.CyberSource.Ptsv2paymentsidcapturesDeviceInformation, root.CyberSource.Ptsv2paymentsidcapturesInstallmentInformation, root.CyberSource.Ptsv2paymentsidcapturesMerchantInformation, root.CyberSource.Ptsv2paymentsidcapturesOrderInformation, root.CyberSource.Ptsv2paymentsidcapturesPaymentInformation, root.CyberSource.Ptsv2paymentsidcapturesPointOfSaleInformation, root.CyberSource.Ptsv2paymentsidcapturesProcessingInformation, root.CyberSource.Ptsv2paymentsidcapturesTravelInformation);
  }
}(this, function(ApiClient, Ptsv2paymentsClientReferenceInformation, Ptsv2paymentsMerchantDefinedInformation, Ptsv2paymentsPromotionInformation, Ptsv2paymentsidcapturesAggregatorInformation, Ptsv2paymentsidcapturesBuyerInformation, Ptsv2paymentsidcapturesDeviceInformation, Ptsv2paymentsidcapturesInstallmentInformation, Ptsv2paymentsidcapturesMerchantInformation, Ptsv2paymentsidcapturesOrderInformation, Ptsv2paymentsidcapturesPaymentInformation, Ptsv2paymentsidcapturesPointOfSaleInformation, Ptsv2paymentsidcapturesProcessingInformation, Ptsv2paymentsidcapturesTravelInformation) {
  'use strict';




  /**
   * The CapturePaymentRequest model module.
   * @module model/CapturePaymentRequest
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>CapturePaymentRequest</code>.
   * @alias module:model/CapturePaymentRequest
   * @class
   */
  var exports = function() {
    var _this = this;














  };

  /**
   * Constructs a <code>CapturePaymentRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CapturePaymentRequest} obj Optional instance to populate.
   * @return {module:model/CapturePaymentRequest} The populated <code>CapturePaymentRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('clientReferenceInformation')) {
        obj['clientReferenceInformation'] = Ptsv2paymentsClientReferenceInformation.constructFromObject(data['clientReferenceInformation']);
      }
      if (data.hasOwnProperty('processingInformation')) {
        obj['processingInformation'] = Ptsv2paymentsidcapturesProcessingInformation.constructFromObject(data['processingInformation']);
      }
      if (data.hasOwnProperty('paymentInformation')) {
        obj['paymentInformation'] = Ptsv2paymentsidcapturesPaymentInformation.constructFromObject(data['paymentInformation']);
      }
      if (data.hasOwnProperty('orderInformation')) {
        obj['orderInformation'] = Ptsv2paymentsidcapturesOrderInformation.constructFromObject(data['orderInformation']);
      }
      if (data.hasOwnProperty('buyerInformation')) {
        obj['buyerInformation'] = Ptsv2paymentsidcapturesBuyerInformation.constructFromObject(data['buyerInformation']);
      }
      if (data.hasOwnProperty('deviceInformation')) {
        obj['deviceInformation'] = Ptsv2paymentsidcapturesDeviceInformation.constructFromObject(data['deviceInformation']);
      }
      if (data.hasOwnProperty('merchantInformation')) {
        obj['merchantInformation'] = Ptsv2paymentsidcapturesMerchantInformation.constructFromObject(data['merchantInformation']);
      }
      if (data.hasOwnProperty('aggregatorInformation')) {
        obj['aggregatorInformation'] = Ptsv2paymentsidcapturesAggregatorInformation.constructFromObject(data['aggregatorInformation']);
      }
      if (data.hasOwnProperty('pointOfSaleInformation')) {
        obj['pointOfSaleInformation'] = Ptsv2paymentsidcapturesPointOfSaleInformation.constructFromObject(data['pointOfSaleInformation']);
      }
      if (data.hasOwnProperty('merchantDefinedInformation')) {
        obj['merchantDefinedInformation'] = ApiClient.convertToType(data['merchantDefinedInformation'], [Ptsv2paymentsMerchantDefinedInformation]);
      }
      if (data.hasOwnProperty('installmentInformation')) {
        obj['installmentInformation'] = Ptsv2paymentsidcapturesInstallmentInformation.constructFromObject(data['installmentInformation']);
      }
      if (data.hasOwnProperty('travelInformation')) {
        obj['travelInformation'] = Ptsv2paymentsidcapturesTravelInformation.constructFromObject(data['travelInformation']);
      }
      if (data.hasOwnProperty('promotionInformation')) {
        obj['promotionInformation'] = Ptsv2paymentsPromotionInformation.constructFromObject(data['promotionInformation']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/Ptsv2paymentsClientReferenceInformation} clientReferenceInformation
   */
  exports.prototype['clientReferenceInformation'] = undefined;
  /**
   * @member {module:model/Ptsv2paymentsidcapturesProcessingInformation} processingInformation
   */
  exports.prototype['processingInformation'] = undefined;
  /**
   * @member {module:model/Ptsv2paymentsidcapturesPaymentInformation} paymentInformation
   */
  exports.prototype['paymentInformation'] = undefined;
  /**
   * @member {module:model/Ptsv2paymentsidcapturesOrderInformation} orderInformation
   */
  exports.prototype['orderInformation'] = undefined;
  /**
   * @member {module:model/Ptsv2paymentsidcapturesBuyerInformation} buyerInformation
   */
  exports.prototype['buyerInformation'] = undefined;
  /**
   * @member {module:model/Ptsv2paymentsidcapturesDeviceInformation} deviceInformation
   */
  exports.prototype['deviceInformation'] = undefined;
  /**
   * @member {module:model/Ptsv2paymentsidcapturesMerchantInformation} merchantInformation
   */
  exports.prototype['merchantInformation'] = undefined;
  /**
   * @member {module:model/Ptsv2paymentsidcapturesAggregatorInformation} aggregatorInformation
   */
  exports.prototype['aggregatorInformation'] = undefined;
  /**
   * @member {module:model/Ptsv2paymentsidcapturesPointOfSaleInformation} pointOfSaleInformation
   */
  exports.prototype['pointOfSaleInformation'] = undefined;
  /**
   * The object containing the custom data that the merchant defines. 
   * @member {Array.<module:model/Ptsv2paymentsMerchantDefinedInformation>} merchantDefinedInformation
   */
  exports.prototype['merchantDefinedInformation'] = undefined;
  /**
   * @member {module:model/Ptsv2paymentsidcapturesInstallmentInformation} installmentInformation
   */
  exports.prototype['installmentInformation'] = undefined;
  /**
   * @member {module:model/Ptsv2paymentsidcapturesTravelInformation} travelInformation
   */
  exports.prototype['travelInformation'] = undefined;
  /**
   * @member {module:model/Ptsv2paymentsPromotionInformation} promotionInformation
   */
  exports.prototype['promotionInformation'] = undefined;



  return exports;
}));



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
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.CyberSource);
  }
}(this, function(expect, CyberSource) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new CyberSource.CreatePaymentRequest();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('CreatePaymentRequest', function() {
    it('should create an instance of CreatePaymentRequest', function() {
      // uncomment below and update the code to test CreatePaymentRequest
      //var instane = new CyberSource.CreatePaymentRequest();
      //expect(instance).to.be.a(CyberSource.CreatePaymentRequest);
    });

    it('should have the property clientReferenceInformation (base name: "clientReferenceInformation")', function() {
      // uncomment below and update the code to test the property clientReferenceInformation
      //var instane = new CyberSource.CreatePaymentRequest();
      //expect(instance).to.be();
    });

    it('should have the property processingInformation (base name: "processingInformation")', function() {
      // uncomment below and update the code to test the property processingInformation
      //var instane = new CyberSource.CreatePaymentRequest();
      //expect(instance).to.be();
    });

    it('should have the property issuerInformation (base name: "issuerInformation")', function() {
      // uncomment below and update the code to test the property issuerInformation
      //var instane = new CyberSource.CreatePaymentRequest();
      //expect(instance).to.be();
    });

    it('should have the property paymentInformation (base name: "paymentInformation")', function() {
      // uncomment below and update the code to test the property paymentInformation
      //var instane = new CyberSource.CreatePaymentRequest();
      //expect(instance).to.be();
    });

    it('should have the property orderInformation (base name: "orderInformation")', function() {
      // uncomment below and update the code to test the property orderInformation
      //var instane = new CyberSource.CreatePaymentRequest();
      //expect(instance).to.be();
    });

    it('should have the property buyerInformation (base name: "buyerInformation")', function() {
      // uncomment below and update the code to test the property buyerInformation
      //var instane = new CyberSource.CreatePaymentRequest();
      //expect(instance).to.be();
    });

    it('should have the property recipientInformation (base name: "recipientInformation")', function() {
      // uncomment below and update the code to test the property recipientInformation
      //var instane = new CyberSource.CreatePaymentRequest();
      //expect(instance).to.be();
    });

    it('should have the property deviceInformation (base name: "deviceInformation")', function() {
      // uncomment below and update the code to test the property deviceInformation
      //var instane = new CyberSource.CreatePaymentRequest();
      //expect(instance).to.be();
    });

    it('should have the property merchantInformation (base name: "merchantInformation")', function() {
      // uncomment below and update the code to test the property merchantInformation
      //var instane = new CyberSource.CreatePaymentRequest();
      //expect(instance).to.be();
    });

    it('should have the property aggregatorInformation (base name: "aggregatorInformation")', function() {
      // uncomment below and update the code to test the property aggregatorInformation
      //var instane = new CyberSource.CreatePaymentRequest();
      //expect(instance).to.be();
    });

    it('should have the property consumerAuthenticationInformation (base name: "consumerAuthenticationInformation")', function() {
      // uncomment below and update the code to test the property consumerAuthenticationInformation
      //var instane = new CyberSource.CreatePaymentRequest();
      //expect(instance).to.be();
    });

    it('should have the property pointOfSaleInformation (base name: "pointOfSaleInformation")', function() {
      // uncomment below and update the code to test the property pointOfSaleInformation
      //var instane = new CyberSource.CreatePaymentRequest();
      //expect(instance).to.be();
    });

    it('should have the property merchantDefinedInformation (base name: "merchantDefinedInformation")', function() {
      // uncomment below and update the code to test the property merchantDefinedInformation
      //var instane = new CyberSource.CreatePaymentRequest();
      //expect(instance).to.be();
    });

    it('should have the property installmentInformation (base name: "installmentInformation")', function() {
      // uncomment below and update the code to test the property installmentInformation
      //var instane = new CyberSource.CreatePaymentRequest();
      //expect(instance).to.be();
    });

    it('should have the property travelInformation (base name: "travelInformation")', function() {
      // uncomment below and update the code to test the property travelInformation
      //var instane = new CyberSource.CreatePaymentRequest();
      //expect(instance).to.be();
    });

    it('should have the property promotionInformation (base name: "promotionInformation")', function() {
      // uncomment below and update the code to test the property promotionInformation
      //var instane = new CyberSource.CreatePaymentRequest();
      //expect(instance).to.be();
    });

    it('should have the property tokenInformation (base name: "tokenInformation")', function() {
      // uncomment below and update the code to test the property tokenInformation
      //var instane = new CyberSource.CreatePaymentRequest();
      //expect(instance).to.be();
    });

    it('should have the property riskInformation (base name: "riskInformation")', function() {
      // uncomment below and update the code to test the property riskInformation
      //var instane = new CyberSource.CreatePaymentRequest();
      //expect(instance).to.be();
    });

    it('should have the property acquirerInformation (base name: "acquirerInformation")', function() {
      // uncomment below and update the code to test the property acquirerInformation
      //var instane = new CyberSource.CreatePaymentRequest();
      //expect(instance).to.be();
    });

    it('should have the property recurringPaymentInformation (base name: "recurringPaymentInformation")', function() {
      // uncomment below and update the code to test the property recurringPaymentInformation
      //var instane = new CyberSource.CreatePaymentRequest();
      //expect(instance).to.be();
    });

  });

}));

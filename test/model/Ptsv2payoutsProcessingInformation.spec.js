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
    instance = new CyberSource.Ptsv2payoutsProcessingInformation();
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

  describe('Ptsv2payoutsProcessingInformation', function() {
    it('should create an instance of Ptsv2payoutsProcessingInformation', function() {
      // uncomment below and update the code to test Ptsv2payoutsProcessingInformation
      //var instane = new CyberSource.Ptsv2payoutsProcessingInformation();
      //expect(instance).to.be.a(CyberSource.Ptsv2payoutsProcessingInformation);
    });

    it('should have the property businessApplicationId (base name: "businessApplicationId")', function() {
      // uncomment below and update the code to test the property businessApplicationId
      //var instane = new CyberSource.Ptsv2payoutsProcessingInformation();
      //expect(instance).to.be();
    });

    it('should have the property networkRoutingOrder (base name: "networkRoutingOrder")', function() {
      // uncomment below and update the code to test the property networkRoutingOrder
      //var instane = new CyberSource.Ptsv2payoutsProcessingInformation();
      //expect(instance).to.be();
    });

    it('should have the property commerceIndicator (base name: "commerceIndicator")', function() {
      // uncomment below and update the code to test the property commerceIndicator
      //var instane = new CyberSource.Ptsv2payoutsProcessingInformation();
      //expect(instance).to.be();
    });

    it('should have the property reconciliationId (base name: "reconciliationId")', function() {
      // uncomment below and update the code to test the property reconciliationId
      //var instane = new CyberSource.Ptsv2payoutsProcessingInformation();
      //expect(instance).to.be();
    });

    it('should have the property payoutsOptions (base name: "payoutsOptions")', function() {
      // uncomment below and update the code to test the property payoutsOptions
      //var instane = new CyberSource.Ptsv2payoutsProcessingInformation();
      //expect(instance).to.be();
    });

    it('should have the property transactionReason (base name: "transactionReason")', function() {
      // uncomment below and update the code to test the property transactionReason
      //var instane = new CyberSource.Ptsv2payoutsProcessingInformation();
      //expect(instance).to.be();
    });

    it('should have the property purposeOfPayment (base name: "purposeOfPayment")', function() {
      // uncomment below and update the code to test the property purposeOfPayment
      //var instane = new CyberSource.Ptsv2payoutsProcessingInformation();
      //expect(instance).to.be();
    });

  });

}));

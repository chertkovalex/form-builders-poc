import get from 'lodash/get';
import axios from 'axios';
import querystring from 'querystring';

const http = axios.create({
  baseURL: 'http://localhost:3004/api',
});

export default {
  /**
   * get contact data
   * @param  {String}  id contact id
   * @return {Promise<Object>}
   */
  async getContact(id) {
    const { data } = await http.get(`/contacts/${id}`);
    return data;
  },

  /**
   * get text code
   * @param  {String}  postalCode contact postal code
   * @return {Promise<Number>}
   */
  async getTaxCode(postalCode) {
    const { data } = await http.get(`/taxcode/${postalCode}`);
    return data.taxCode;
  },

  /**
   * get contact's experian score
   * @param  {String}  firstName first name
   * @param  {String}  lastName last name
   * @param  {String}  postalCode postal code
   * @return {Promise<Number>}
   */
  async getExperianScore(firstName, lastName, postalCode) {
    const queryParams = querystring.stringify({ firstname: firstName, surname: lastName, postalcode: postalCode });
    const { data } = await http.get(`/experian?${queryParams}`);

    return parseInt(data.experianScore);
  },

  /**
   * get product metadata
   * @param  {String}  productName product name
   * @return {Promise<Object>}
   */
  async getProdutcMetadata(productName) {
    const { data: productMetadata } = await http.get(`/products/${productName}/metadata`);
    return productMetadata;
  },

  /**
   * calculate monthly premium
   * @param  {String}  contactId        contact id
   * @param  {Object}  coverData        chosen covers
   * @param  {Object}  personalDetails  user data
   * @return {Promise<Number>}
   */
  async calculatePremium(contactId, coverData, personalDetails) {
    const params = {
      covers: coverData,
      ...personalDetails,
    };

    const { data } = await http.post(`policies/${contactId}/quote/calculate`, params);
    const monthlyPremium = get(data, ['response', 'monthlyPremium'], 0);
    return monthlyPremium;
  },

  /**
   * update contact
   * @param  {String}  contactId      contact id
   * @param  {[type]}  contactData    contact data
   * @param  {[type]}  employmentData employment data
   * @return {Promise}
   */
  async updateContact(contactId, contactData, employmentData) {
    const params = {
      id: contactId,
      ...contactData,
      ...employmentData,
    };

    await http.put('/contacts/employment', params);
  },

  /**
   * [generateQuote description]
   * @param  {String}  contactId       contact id
   * @param  {Object}  coverData       selected covers
   * @param  {Object}  personalDetails personal details
   * @param  {Object}  paymentData     payment details
   * @return {Promise<Number>}
   */
  async generateQuote(contactId, coverData, personalDetails, paymentData) {
    const params = {
      paymentData,
      covers: coverData,
      ...personalDetails,
    };

    const { data } = await http.post(`policies/${contactId}/quote`, params);
    const policyId = get(data, ['response', 'policyNo'], 0);
    return policyId;
  },
};

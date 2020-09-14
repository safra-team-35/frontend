import http from '../http-common';

// http://34.71.109.67:3000/user/:user_id/order_summary

const getUserAddresses = (userId) => {
  return http.get(`/user/${userId}/address`);
};

export default {
  getUserAddresses,
};

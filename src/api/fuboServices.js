import axios from "axios";
import ENDPOINTS from "./endpoints";

export function getCall1() {
  return axios.get(`${ENDPOINTS.FUBO.CALL1}`);
}
export function getCall2() {
  return axios.get(`${ENDPOINTS.FUBO.CALL2}`);
}
export function getCall3() {
  return axios.get(`${ENDPOINTS.FUBO.CALL3}`);
}

/*
 * @Author: NhuHH 
 * @Date: 2018-11-13 09:19:53 
 * @Last Modified by:   NhuHH 
 * @Last Modified time: 2018-11-13 09:19:53 
 */
import { createAsyncTypes } from 'utils/actionUtils';

export const GET_VEHICLE_ALERT_LIST = createAsyncTypes(
  'GET_VEHICLE_ALERT_LIST',
);

const PREFIX = 'VEHICLE_CAR_ALERTS_';
export const actionTypes = {
  GET_VEHICLE_ALERT: createAsyncTypes(`${PREFIX}GET_VEHICLE_ALERT`),
  GET_NORMAL_FILTER: createAsyncTypes(`${PREFIX}GET_NORMAL_FILTER`),
  GET_DATA_ECU: createAsyncTypes(`${PREFIX}GET_DATA_ECU`),
  GET_VEHICLE_ALERT_FILTER: createAsyncTypes(
    `${PREFIX}GET_VEHICLE_ALERT_FILTER`,
  ),
  GET_VEHICLE_ALERT_FILTER_ECU: createAsyncTypes(
    `${PREFIX}GET_VEHICLE_ALERT_FILTER_ECU`,
  ),
  IGNORE_ALERT: createAsyncTypes(`${PREFIX}IGNORE_ALERT`),
  GET_DATA: `${PREFIX}GET_DATA`,
  GET_INFOR: `${PREFIX}GET_INFOR`,
  GET_ALERT_LIST: `${PREFIX}GET_ALERT_LIST`,
  GET_CLICK_BUTTON: `${PREFIX}GET_CLICK_BUTTON`,
  GET_ACTIVE_ALERT: `${PREFIX}GET_ACTIVE_ALERT`,
  CHANGE_FILTER_ALERT: `${PREFIX}CHANGE_FILTER_ALERT`,
  HANDLE_CHANGE_TOGGLE: `${PREFIX}HANDLE_CHANGE_TOGGLE`,
  GET_ECU_ID: `${PREFIX}GET_ECU_ID`,
  CHANGE_CHECK_BOX: `${PREFIX}CHANGE_CHECK_BOX`,
  GET_ALERT_ECU: `${PREFIX}GET_ALERT_ECU`,
  RESET_CHECK_BOX: `${PREFIX}RESET_CHECK_BOX`,
};

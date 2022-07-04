/* 
    Created by thaolt
*/

import { post, fetch } from "../common/networking/api-helper";
import { URL_PATHS } from "../common/networking/url-paths";

//API
const HOME = "/api_name";

export default class HomeServices {
  private static instance: HomeServices;

  static getInstance(): HomeServices {
    if (!HomeServices.instance) {
      HomeServices.instance = new HomeServices();
    }
    return HomeServices.instance;
  }

  // create new machine model
  createMachineModel(data: any) {
    return post(URL_PATHS.MACHINE_MODEL, data, true);
  }

  //get list machine model
  getListMachineModel() {
    return fetch(URL_PATHS.MACHINE_MODEL, null, true);
  }

  // create new machine
  createMachine(data: any) {
    return post(URL_PATHS.MACHINE, data, true);
  }

  // get list machine
  getListMachine() {
    return fetch(URL_PATHS.MACHINE, null, true);
  }

  // send hearthbeat
  sendHearthBeat(data: any) {
    return fetch(URL_PATHS.MACHINE_SEND_HEARTHBEAT, data, true);
  }

  // assgin machine to employee
  assginMachine(data: any) {
    return post(URL_PATHS.ASSIGNMENT_MACHINE, data, true);
  }

  // get list product
  getListProduct(params: any) {
    return fetch(URL_PATHS.PRODUCT, params, true);
  }

  // create prooduct
  createProduct(data: any) {
    return post(URL_PATHS.PRODUCT, data, true);
  }

  // get product map
  getProductMapById() {
    return fetch(URL_PATHS.PRODUCT_MAP);
  }

  // create task
  createTask(data: any) {
    return post(URL_PATHS.TASK, data, true);
  }

  // getlist task
  getListTask(params: any) {
    return fetch(URL_PATHS.TASK, params, true);
  }

  // get list order
  getListOrder() {
    return fetch(URL_PATHS.ORDER, null, true);
  }

  // get count machine
  getCountMachine() {
    return fetch(URL_PATHS.COUNT_MACHINE, null, true);
  }

  // get statistial
  getStatistialProduct(data: any) {
    return fetch(URL_PATHS.STATISTICAL_PRODUCT, data, true);
  }

  getStatistialPayment(data: any) {
    return fetch(URL_PATHS.STATISTIAL_PAYMENT, data, true);
  }
}

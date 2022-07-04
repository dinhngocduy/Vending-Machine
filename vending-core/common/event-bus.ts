import { Subject } from "rxjs";

export interface EventBusType {
  type: EventBusName;
  payload?: any;
}

export enum EventBusName {
  //Token
  EXPIRE_TOKEN = "EXPIRE_TOKEN",
  REDIRECT_SSO = "REDIRECT_SSO",
  REDIRECT_APP = "REDIRECT_APP",
  LOGOUT_APP = "LOGOUT_APP",
  GET_USER_INFO_SUCCESS = "GET_USER_INFO_SUCCESS",
  // machine
  CREATE_MACHINE = "CREATE_MACHINE",
  UPDATE_MACHINE = "UPDATE_MACHINE",
  ADD_PRODUCT_MAP_ITEM = "ADD_PRODUCT_MAP_ITEM",
  UPDATE_PRODUCT_MAP_ITEM = "UPDATE_PRODUCT_MAP_ITEM",
  DELETE_PRODUCT_MAP_ITEM = "DELETE_PRODUCT_MAP_ITEM",
  UPDATE_PRODUCT = "UPDATE_PRODUCT",
  ADD_BANNER = "ADD_BANNER",
  SELECT_MACHINE_IN_LIST = "SELECT_MACHINE_IN_LIST",
  //
  NEW_NOTIFICATION = 'NEW_NOTIFICATION',
  READ_NOTIFICATION = 'READ_NOTIFICATION'
}

export default class EventBus {
  private static instance: EventBus;
  private eventSubject = new Subject<EventBusType>();

  static getInstance(): EventBus {
    if (!EventBus.instance) {
      EventBus.instance = new EventBus();
    }
    return EventBus.instance;
  }

  get events() {
    return this.eventSubject.asObservable();
  }

  post(event: EventBusType) {
    this.eventSubject.next(event);
  }
}

import config from '../config';
import EventEmitter from 'eventemitter3';

const EVENTS = {
  APP_READY: 'app_ready',
};

/**
 * App entry point.
 * All configurations are described in src/config.js
 */
export default class Application extends EventEmitter {
  constructor() {
    super();

    this.config = config;
    this.arr = [];
    this.data = {};

    this.init();
  }

  static get events() {
    return EVENTS;
  }

  /**
   * Initializes the app.
   * Called when the DOM has loaded. You can initiate your custom classes here
   * and manipulate the DOM tree. Task data should be assigned to Application.data.
   * The APP_READY event should be emitted at the end of this method.
   */

 
  async init() {
    const arr = [];
    // Initiate classes and wait for async operations here.
    for(var i = 1;i<61;i++){
    const response = await fetch('https://swapi.booost.bg/api/planets/' + i + '/')
    const data = await response.json()
    arr.push(data);
    // this.arr = this.arr.push(data.name)
    }
    this.data = {count : arr.length, planets : arr}
    console.log(this.data)
    

    this.emit(Application.events.APP_READY);
  }
}


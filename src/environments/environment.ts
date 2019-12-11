// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const url = 'http://192.168.1.66:8001/api/v1/user/';
const url2 = 'http://192.168.1.66:8000/api/v1/client/'

export const environment = {
  production: false,

  login: url + 'login',
  listUsers: url + 'list_users',
  getSex: url2 + 'get_sex',
  updateUser: url + 'update_user',

};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.

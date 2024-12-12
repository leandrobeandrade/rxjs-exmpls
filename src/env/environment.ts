// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import { environmentType } from './environment.type';


export const environment: environmentType = {
  production: false,
	supabaseUrl: 'https://hiqvrhtdkpjkqxkrasna.supabase.co',
	supabaseKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhpcXZyaHRka3Bqa3F4a3Jhc25hIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjA5MTI1ODEsImV4cCI6MjAzNjQ4ODU4MX0.X2jU3i1X3ua_VAU64vjQdP6erxl3B_cf622Xrx4uVJI',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
import 'zone.js/dist/zone-error'; // Included with Angular CLI.import { environmentType } from './environment.type';


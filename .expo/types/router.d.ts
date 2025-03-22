/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string | object = string> {
      hrefInputParams: { pathname: Router.RelativePathString, params?: Router.UnknownInputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownInputParams } | { pathname: `/_sitemap`; params?: Router.UnknownInputParams; } | { pathname: `${'/(assessment)'}/age` | `/age`; params?: Router.UnknownInputParams; } | { pathname: `${'/(assessment)'}/completed` | `/completed`; params?: Router.UnknownInputParams; } | { pathname: `${'/(assessment)'}/current-weight` | `/current-weight`; params?: Router.UnknownInputParams; } | { pathname: `${'/(assessment)'}/delivery` | `/delivery`; params?: Router.UnknownInputParams; } | { pathname: `${'/(assessment)'}/diet-habits` | `/diet-habits`; params?: Router.UnknownInputParams; } | { pathname: `${'/(assessment)'}/energy-levels` | `/energy-levels`; params?: Router.UnknownInputParams; } | { pathname: `${'/(assessment)'}/gender` | `/gender`; params?: Router.UnknownInputParams; } | { pathname: `${'/(assessment)'}/goal` | `/goal`; params?: Router.UnknownInputParams; } | { pathname: `${'/(assessment)'}/height` | `/height`; params?: Router.UnknownInputParams; } | { pathname: `${'/(assessment)'}/meal-preferences` | `/meal-preferences`; params?: Router.UnknownInputParams; } | { pathname: `${'/(assessment)'}/physical-activity` | `/physical-activity`; params?: Router.UnknownInputParams; } | { pathname: `${'/(assessment)'}/sleep` | `/sleep`; params?: Router.UnknownInputParams; } | { pathname: `${'/(assessment)'}/stress` | `/stress`; params?: Router.UnknownInputParams; } | { pathname: `${'/(assessment)'}/target-weight` | `/target-weight`; params?: Router.UnknownInputParams; } | { pathname: `${'/(assessment)'}/welcome` | `/welcome`; params?: Router.UnknownInputParams; } | { pathname: `${'/(auth)'}/login` | `/login`; params?: Router.UnknownInputParams; } | { pathname: `${'/(auth)'}/onboarding` | `/onboarding`; params?: Router.UnknownInputParams; } | { pathname: `${'/(auth)'}/signup` | `/signup`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/dashboard` | `/dashboard`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/explore` | `/explore`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}` | `/`; params?: Router.UnknownInputParams; } | { pathname: `/main/homepage`; params?: Router.UnknownInputParams; } | { pathname: `/+not-found`, params: Router.UnknownInputParams & {  } };
      hrefOutputParams: { pathname: Router.RelativePathString, params?: Router.UnknownOutputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownOutputParams } | { pathname: `/_sitemap`; params?: Router.UnknownOutputParams; } | { pathname: `${'/(assessment)'}/age` | `/age`; params?: Router.UnknownOutputParams; } | { pathname: `${'/(assessment)'}/completed` | `/completed`; params?: Router.UnknownOutputParams; } | { pathname: `${'/(assessment)'}/current-weight` | `/current-weight`; params?: Router.UnknownOutputParams; } | { pathname: `${'/(assessment)'}/delivery` | `/delivery`; params?: Router.UnknownOutputParams; } | { pathname: `${'/(assessment)'}/diet-habits` | `/diet-habits`; params?: Router.UnknownOutputParams; } | { pathname: `${'/(assessment)'}/energy-levels` | `/energy-levels`; params?: Router.UnknownOutputParams; } | { pathname: `${'/(assessment)'}/gender` | `/gender`; params?: Router.UnknownOutputParams; } | { pathname: `${'/(assessment)'}/goal` | `/goal`; params?: Router.UnknownOutputParams; } | { pathname: `${'/(assessment)'}/height` | `/height`; params?: Router.UnknownOutputParams; } | { pathname: `${'/(assessment)'}/meal-preferences` | `/meal-preferences`; params?: Router.UnknownOutputParams; } | { pathname: `${'/(assessment)'}/physical-activity` | `/physical-activity`; params?: Router.UnknownOutputParams; } | { pathname: `${'/(assessment)'}/sleep` | `/sleep`; params?: Router.UnknownOutputParams; } | { pathname: `${'/(assessment)'}/stress` | `/stress`; params?: Router.UnknownOutputParams; } | { pathname: `${'/(assessment)'}/target-weight` | `/target-weight`; params?: Router.UnknownOutputParams; } | { pathname: `${'/(assessment)'}/welcome` | `/welcome`; params?: Router.UnknownOutputParams; } | { pathname: `${'/(auth)'}/login` | `/login`; params?: Router.UnknownOutputParams; } | { pathname: `${'/(auth)'}/onboarding` | `/onboarding`; params?: Router.UnknownOutputParams; } | { pathname: `${'/(auth)'}/signup` | `/signup`; params?: Router.UnknownOutputParams; } | { pathname: `${'/(tabs)'}/dashboard` | `/dashboard`; params?: Router.UnknownOutputParams; } | { pathname: `${'/(tabs)'}/explore` | `/explore`; params?: Router.UnknownOutputParams; } | { pathname: `${'/(tabs)'}` | `/`; params?: Router.UnknownOutputParams; } | { pathname: `/main/homepage`; params?: Router.UnknownOutputParams; } | { pathname: `/+not-found`, params: Router.UnknownOutputParams & {  } };
      href: Router.RelativePathString | Router.ExternalPathString | `/_sitemap${`?${string}` | `#${string}` | ''}` | `${'/(assessment)'}/age${`?${string}` | `#${string}` | ''}` | `/age${`?${string}` | `#${string}` | ''}` | `${'/(assessment)'}/completed${`?${string}` | `#${string}` | ''}` | `/completed${`?${string}` | `#${string}` | ''}` | `${'/(assessment)'}/current-weight${`?${string}` | `#${string}` | ''}` | `/current-weight${`?${string}` | `#${string}` | ''}` | `${'/(assessment)'}/delivery${`?${string}` | `#${string}` | ''}` | `/delivery${`?${string}` | `#${string}` | ''}` | `${'/(assessment)'}/diet-habits${`?${string}` | `#${string}` | ''}` | `/diet-habits${`?${string}` | `#${string}` | ''}` | `${'/(assessment)'}/energy-levels${`?${string}` | `#${string}` | ''}` | `/energy-levels${`?${string}` | `#${string}` | ''}` | `${'/(assessment)'}/gender${`?${string}` | `#${string}` | ''}` | `/gender${`?${string}` | `#${string}` | ''}` | `${'/(assessment)'}/goal${`?${string}` | `#${string}` | ''}` | `/goal${`?${string}` | `#${string}` | ''}` | `${'/(assessment)'}/height${`?${string}` | `#${string}` | ''}` | `/height${`?${string}` | `#${string}` | ''}` | `${'/(assessment)'}/meal-preferences${`?${string}` | `#${string}` | ''}` | `/meal-preferences${`?${string}` | `#${string}` | ''}` | `${'/(assessment)'}/physical-activity${`?${string}` | `#${string}` | ''}` | `/physical-activity${`?${string}` | `#${string}` | ''}` | `${'/(assessment)'}/sleep${`?${string}` | `#${string}` | ''}` | `/sleep${`?${string}` | `#${string}` | ''}` | `${'/(assessment)'}/stress${`?${string}` | `#${string}` | ''}` | `/stress${`?${string}` | `#${string}` | ''}` | `${'/(assessment)'}/target-weight${`?${string}` | `#${string}` | ''}` | `/target-weight${`?${string}` | `#${string}` | ''}` | `${'/(assessment)'}/welcome${`?${string}` | `#${string}` | ''}` | `/welcome${`?${string}` | `#${string}` | ''}` | `${'/(auth)'}/login${`?${string}` | `#${string}` | ''}` | `/login${`?${string}` | `#${string}` | ''}` | `${'/(auth)'}/onboarding${`?${string}` | `#${string}` | ''}` | `/onboarding${`?${string}` | `#${string}` | ''}` | `${'/(auth)'}/signup${`?${string}` | `#${string}` | ''}` | `/signup${`?${string}` | `#${string}` | ''}` | `${'/(tabs)'}/dashboard${`?${string}` | `#${string}` | ''}` | `/dashboard${`?${string}` | `#${string}` | ''}` | `${'/(tabs)'}/explore${`?${string}` | `#${string}` | ''}` | `/explore${`?${string}` | `#${string}` | ''}` | `${'/(tabs)'}${`?${string}` | `#${string}` | ''}` | `/${`?${string}` | `#${string}` | ''}` | `/main/homepage${`?${string}` | `#${string}` | ''}` | { pathname: Router.RelativePathString, params?: Router.UnknownInputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownInputParams } | { pathname: `/_sitemap`; params?: Router.UnknownInputParams; } | { pathname: `${'/(assessment)'}/age` | `/age`; params?: Router.UnknownInputParams; } | { pathname: `${'/(assessment)'}/completed` | `/completed`; params?: Router.UnknownInputParams; } | { pathname: `${'/(assessment)'}/current-weight` | `/current-weight`; params?: Router.UnknownInputParams; } | { pathname: `${'/(assessment)'}/delivery` | `/delivery`; params?: Router.UnknownInputParams; } | { pathname: `${'/(assessment)'}/diet-habits` | `/diet-habits`; params?: Router.UnknownInputParams; } | { pathname: `${'/(assessment)'}/energy-levels` | `/energy-levels`; params?: Router.UnknownInputParams; } | { pathname: `${'/(assessment)'}/gender` | `/gender`; params?: Router.UnknownInputParams; } | { pathname: `${'/(assessment)'}/goal` | `/goal`; params?: Router.UnknownInputParams; } | { pathname: `${'/(assessment)'}/height` | `/height`; params?: Router.UnknownInputParams; } | { pathname: `${'/(assessment)'}/meal-preferences` | `/meal-preferences`; params?: Router.UnknownInputParams; } | { pathname: `${'/(assessment)'}/physical-activity` | `/physical-activity`; params?: Router.UnknownInputParams; } | { pathname: `${'/(assessment)'}/sleep` | `/sleep`; params?: Router.UnknownInputParams; } | { pathname: `${'/(assessment)'}/stress` | `/stress`; params?: Router.UnknownInputParams; } | { pathname: `${'/(assessment)'}/target-weight` | `/target-weight`; params?: Router.UnknownInputParams; } | { pathname: `${'/(assessment)'}/welcome` | `/welcome`; params?: Router.UnknownInputParams; } | { pathname: `${'/(auth)'}/login` | `/login`; params?: Router.UnknownInputParams; } | { pathname: `${'/(auth)'}/onboarding` | `/onboarding`; params?: Router.UnknownInputParams; } | { pathname: `${'/(auth)'}/signup` | `/signup`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/dashboard` | `/dashboard`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/explore` | `/explore`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}` | `/`; params?: Router.UnknownInputParams; } | { pathname: `/main/homepage`; params?: Router.UnknownInputParams; } | `/+not-found` | { pathname: `/+not-found`, params: Router.UnknownInputParams & {  } };
    }
  }
}

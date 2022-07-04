import { I18nManager } from 'react-native';
import * as RNLocalize from 'react-native-localize';
import i18n from 'i18n-js';
import memoize from 'lodash.memoize';
import { capitalizeFirstLetter } from 'helpers/utils';

const translationGetters: any = {
  // TODO: after translate edit this path
  en: () => require('./translations/en.json'),
  // vi: () => require('./translations/vi.json'),
};

export const translate: any = memoize(
  (key: any, config?: any) => {
    const value = i18n.t(key, config);
    return capitalizeFirstLetter(value);
  },
  (key: any, config?: any) => (config ? key + JSON.stringify(config) : key)
);
export const setI18nConfig = () => {
  // fallback if no available language fits
  const fallback = { languageTag: 'en', isRTL: false };

  const { languageTag, isRTL } =
    RNLocalize.findBestAvailableLanguage(Object.keys(translationGetters)) || fallback;

    console.log('test_setI18nConfig: ', languageTag, isRTL);
  // clear translation cache
  translate.cache.clear();

  // update layout direction
  I18nManager.forceRTL(isRTL);
  // set i18n-js config
  i18n.translations = {
    [languageTag]: translationGetters[languageTag](),
  };
  i18n.locale = languageTag;
};

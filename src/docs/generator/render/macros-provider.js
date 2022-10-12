export const setMacros = (html, data) => {
  let result = html;

  result = result.replaceAll('{% css-hash %}', data.cssTimeStamp);
  result = result.replaceAll('{% js-hash %}', data.jsTimeStamp);
  result = result.replaceAll('{% website-name %}', data.mainConfig.website.name);
  result = result.replaceAll('{% github %}', data.mainConfig.social.github);
  result = result.replaceAll('{% twitter %}', data.mainConfig.social.twitter);
  result = result.replaceAll('{% email %}', data.mainConfig.social.email);
  result = result.replaceAll('{% google-analytics-gtag %}', data.mainConfig.analytics.gtag);

  return result;
};
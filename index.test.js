const treeApiRequest = require('./index');
const event = require('./test/event.json');

const result = treeApiRequest.option(event);

test('treeApiRequest.option should return object with method', () => {

  expect(result.method).toEqual('GET');

});


test('treeApiRequest.option should return object with data', () => {

  expect(result.data).toEqual({});

})



test('treeApiRequest.option should return object with path', () => {

  expect(result.path).toEqual('/unit/list');

})



test('treeApiRequest.option should return object with headers', () => {

  expect(result.headers).toEqual({
    "Accept": "*/*",
    "Accept-Encoding": "deflate, gzip",
    "CloudFront-Forwarded-Proto": "https",
    "CloudFront-Is-Desktop-Viewer": "true",
    "CloudFront-Is-Mobile-Viewer": "false",
    "CloudFront-Is-SmartTV-Viewer": "false",
    "CloudFront-Is-Tablet-Viewer": "false",
    "CloudFront-Viewer-Country": "HK",
    "Content-Type": "application/json",
    "Host": "t09apno53l.execute-api.ap-southeast-1.amazonaws.com",
    "Referer": "https://t09apno53l.execute-api.ap-southeast-1.amazonaws.com/Prod/postCapture",
    "User-Agent": "WooCommerce/5.8.0 Hookshot (WordPress/5.8.1)",
    "Via": "1.1 f2a8133584178fc004547ef003d97efc.cloudfront.net (CloudFront)",
    "X-Amz-Cf-Id": "oeesWZh0uKssZ27bFdNbuVBpsbrGIO3w1Q7VZralZrmeV0br1PDEuQ==",
    "X-Amzn-Trace-Id": "Root=1-6185353b-6b2a84ec27577d154cf55634",
    "X-Forwarded-For": "18.162.205.195, 130.176.93.155",
    "X-Forwarded-Port": "443",
    "X-Forwarded-Proto": "https",
    "X-WC-Webhook-Delivery-ID": "eb1e3a083588e3ce6b6d1728ea6d20bc",
    "X-WC-Webhook-Event": "created",
    "X-WC-Webhook-ID": "1",
    "X-WC-Webhook-Resource": "order",
    "X-WC-Webhook-Signature": "CGUNw1MdC32yGqxE0jseGYJ0FX9gS9LUl+AVChCS/pU=",
    "X-WC-Webhook-Source": "https://winfullybms.com/masterbathroom/",
    "X-WC-Webhook-Topic": "order.created"
  });

})
import dd from 'gdt-jsapi';

export function getDingSdk(cb) {
  return new Promise((res, rej) => {
    if (navigator.appVersion.includes('dingtalk')) {
      const result = { dd, success: true, msg: 'ok' };

      res(result);
      cb && cb(result);
    } else {
      const result = { success: false, msg: '当前环境无法调用钉钉API' };
      
      rej(result);
      cb && cb(result);
    };
  });
};
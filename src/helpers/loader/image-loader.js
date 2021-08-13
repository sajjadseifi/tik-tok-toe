export let logo=null;
export let loadingInfinity=null;
export let infinity = null;
export function imageLoader() {
  logo = require("../../assets/images/logo.jpg");
  loadingInfinity = require("../../assets/gif/loading-infinity.gif");
  infinity = require("../../assets/gif/infinity.gif");

  return [logo,loadingInfinity,infinity]
}

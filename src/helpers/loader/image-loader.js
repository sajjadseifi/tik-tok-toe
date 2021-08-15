export let logo=null;
export let infinity = null;
export function imageLoader() {
  logo = require("../../assets/images/logo.jpg");
  infinity = require("../../assets/gif/infinity.gif");

  return [logo,infinity]
}

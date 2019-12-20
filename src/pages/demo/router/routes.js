const routers = require.context('../views', true, /\.vue$/).keys();
const routes = [];
for (let index= 0; index < routers.length; index++) {
  const element = routers[index];
  const pathSplitArr = element.match(/^.(\S*)(.vue)$/);
  const pathName = pathSplitArr[1].replace(/\/index$/, "");
  routes.push({
    path: pathName,
    name: `${element.slice(1)}`,
    component(resolve) {
      require([`../views${element.slice(1)}`], resolve)
    },
  })
}
export default routes;
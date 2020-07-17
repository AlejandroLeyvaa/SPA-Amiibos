const resolveRoutes = (route) => {
  if (route.length <= route.length) {
    let validRoute = route === '/' ? route : '/name';
    return validRoute;
  }
  return `/${route}`;
}

export default resolveRoutes;
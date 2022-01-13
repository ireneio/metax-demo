export enum RouteMap {
  Home = '/',
  Tags = '/Tags',
  Result = '/Result',
  UiKit = '/UiKit'
}

export const RouteNameTitleMap = {
  [RouteMap.Home]: '',
  [RouteMap.Tags]: 'Home Page',
  [RouteMap.Result]: 'Home Page',
  [RouteMap.UiKit]: 'UiKit Page'
}


export enum ZIndexLevel {
  AppHeader = 101,
  AppNav = 101
}
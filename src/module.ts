import {
  Dashboard,
} from "./ui";
import { ConfigCtrl } from "./ConfigCtrl";

// import { loadPluginCss } from '@grafana/runtime';
// Patch since @grafana/runtime is giving error on build
declare const window: any;
export function loadPluginCss() {
  if (window.grafanaBootData.user.lightTheme) {
    require("./css/compliancemanager.light.css");
  } else {
    require("./css/compliancemanager.dark.css");
  }
}

loadPluginCss();

export {
  ConfigCtrl,
  Dashboard,
};
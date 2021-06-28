import {
  Tabs,
  TabPane,
  Notification,
  Image,
  Pagination,
  Collapse,
  CollapseItem,
  Drawer,
} from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import _ from "lodash";

export default ({
  Vue, // VuePress 正在使用的 Vue 构造函数
  options, // 附加到根实例的一些选项
  router, // 当前应用的路由实例
  siteData, // 站点元数据
}) => {
  Vue.use(Tabs);
  Vue.use(TabPane);
  Vue.use(Image);
  Vue.use(Pagination);
  Vue.use(Collapse);
  Vue.use(CollapseItem);
  Vue.use(Drawer);

  Vue.prototype.$notify = Notification;
  Vue.prototype.$_ = _;
};

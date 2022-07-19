import Vue from "vue";
import App from "./App.vue";
import {Button,Container,Main,Header,Aside,Menu,Submenu,MenuItemGroup,MenuItem,Dropdown,DropdownItem,DropdownMenu} from "element-ui";
import 'element-ui/lib/theme-chalk/index.css'
import './assets/less/index.less'

import router from "./router";
import store from ''

Vue.config.productionTip = false;
Vue.use(Button);
Vue.use(Container);
Vue.use(Main);
Vue.use(Header);
Vue.use(Aside);
Vue.use(Menu);
Vue.use(Submenu);
Vue.use(MenuItemGroup);
Vue.use(MenuItem);
Vue.use(Dropdown);
Vue.use(DropdownItem);
Vue.use(DropdownMenu);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");

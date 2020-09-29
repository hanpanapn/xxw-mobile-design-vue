/**
 * @author monkeywang
 * Date: 17/11/9
 */
import Msg from './src/msg.vue';

Msg.install = function (Vue) {
  Vue.component(Msg.name, Msg);
};

export default Msg;

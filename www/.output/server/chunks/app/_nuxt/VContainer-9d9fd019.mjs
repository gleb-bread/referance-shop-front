import { createVNode } from 'vue';
import { p as propsFactory, m as makeComponentProps, b as makeTagProps, g as genericComponent, q as useRtl, f as useRender } from '../server.mjs';

const makeVContainerProps = propsFactory({
  fluid: {
    type: Boolean,
    default: false
  },
  ...makeComponentProps(),
  ...makeTagProps()
}, "VContainer");
const VContainer = genericComponent()({
  name: "VContainer",
  props: makeVContainerProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const {
      rtlClasses
    } = useRtl();
    useRender(() => createVNode(props.tag, {
      "class": ["v-container", {
        "v-container--fluid": props.fluid
      }, rtlClasses.value, props.class],
      "style": props.style
    }, slots));
    return {};
  }
});

export { VContainer as V };
//# sourceMappingURL=VContainer-9d9fd019.mjs.map

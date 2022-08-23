import Input from "@/components/Input/Input.vue";
export default {
  component: Input,
  title: "Input",
  argTypes: {
    quickSearch: { control: { type: "text" } },
    username: { control: { type: "select" }, options: ["Mitesh", "Meet"] },
    password: { control: { type: "text" } },
    search: { control: { type: "text" } },
  },
  onClick: {},
};

const Template = (args) => ({
  components: { Input },
  setup() {
    return { args };
  },
  template: `<Input v-bind="args" v-slot="slotProps">${args.slotTemplate}</Input>`,
});

export const Default = Template.bind({});
Default.args = {
  quickSearch: "",
  username: "",
  password: "",
  search: "",
  slotTemplate: "",
};

import { mount, createLocalVue } from "@vue/test-utils";
import HelloWorld from "@/components/HelloWorld.vue";
import Vuetify from "vuetify";

const localVue = createLocalVue();
localVue.use(Vuetify);

const createComponent = () => {
  const vuetify = new Vuetify({});
  return mount(HelloWorld, { vuetify, localVue });
};

describe("HelloWorld.vue", () => {
  it("renders props.msg when passed", async () => {
    const wrapper = createComponent();

    await wrapper.find('[data-testid="activator"]').trigger("click");
    await wrapper.find('[data-testid="cancel"]').trigger("click");
  });
});

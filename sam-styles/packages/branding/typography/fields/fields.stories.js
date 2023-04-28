import DefaultField from "./templates/default.html";
import ExampleField from "./templates/example.html";

export default {
  title: "Branding/Typography/Fields",
};

export const Default = () => {
  return DefaultField;
};

export const Example = () => {
    return ExampleField;
};
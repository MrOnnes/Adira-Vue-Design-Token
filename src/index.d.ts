import Vue, { PluginFunction, PluginObject } from "vue";

// Define Component Option
export interface AdiraDesignSystemComponentOptions {
  [key: string]: any;
}

// Define plogin options
export interface AdiraDesignSystemPluginOptions {
  components?: AdiraDesignSystemComponentOptions;
}

// Define your component base class if needed
export class AdiraDesignSystemComponent extends Vue {
  [key: string]: any;
}

// Define your plugin definition
export interface AdiraDesignSystemPlugin
  extends PluginObject<AdiraDesignSystemPluginOptions> {
  install: PluginFunction<AdiraDesignSystemPluginOptions>;
}

// Export your components, directives, and other utilities
export * from "./components"; // You can adjust the path as needed

// Export the plugin
declare const AdiraDesignSystem: AdiraDesignSystemPlugin;
export default AdiraDesignSystem;

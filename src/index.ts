import { App, inject, InjectionKey, isVue2 } from 'vue-demi';
import AwesomeInput from './components/AwesomeInput';

export interface AwesomeOptions {
  option1: boolean;
}

export interface AwesomePlugin {
  options?: AwesomeOptions;
  install(app: App): void;
}

export const AwesomePluginSymbol: InjectionKey<AwesomePlugin> = Symbol();

export function useAwesomePlugin(): AwesomePlugin {
  const AwesomePlugin = inject(AwesomePluginSymbol);
  if (!AwesomePlugin) throw new Error('No AwesomePlugin provided!!!');

  return AwesomePlugin;
}

export function createAwesomePlugin(options?: AwesomeOptions): AwesomePlugin {
  const plugin: AwesomePlugin = {
    options,
    install(app: App) {
      app.component('awesome-input', AwesomeInput);

      if (isVue2) {
        // Vue 2 only
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (app as any).prototype.$awesomePlugin = this;
        console.log('IS VUEEEE 222');
      } else {
        // Vue 3 only
        app.provide(AwesomePluginSymbol, this);
        console.log('IS VUEEEE 333');
      }
    },
  };

  return plugin;
}

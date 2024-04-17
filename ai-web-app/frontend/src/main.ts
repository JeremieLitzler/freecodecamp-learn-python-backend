import { createApp } from 'vue';
import './assets/style.css';
import App from './App.vue';

const app = createApp(App);

const componentFiles = import.meta.glob('@/components/App*.vue', {
  eager: true,
});
const componentFilesEntries = Object.entries(componentFiles);

for (const [componentPath, moduleImport] of componentFilesEntries) {
  const componentName: string | undefined = componentPath
    .split('/')
    .pop()
    ?.replace('.vue', '');

  if (!componentName) {
    console.warn(
      `The componentName couldn't be extracted from path > ${componentPath} `
    );
    continue;
  }
  app.component(
    componentName!,
    (moduleImport as ModuleImportInterface).default
  );
  console.info(`Registered component <${componentName!}> globally.`);
}

app.mount('#app');

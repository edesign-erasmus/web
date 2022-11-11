import DefaultTheme from 'vitepress/theme'
import DurationSnippet from "../../components/DurationSnippet.vue";
import Note from "../../components/Note.vue";

export default {
  ...DefaultTheme,
  enhanceApp(ctx) {
    DefaultTheme.enhanceApp(ctx)
    ctx.app.component('DurationSnippet', DurationSnippet)
    ctx.app.component('Note', Note)
  }
}

import type { DefaultTheme } from "vitepress";

const algoliaOptions: DefaultTheme.AlgoliaSearchOptions = {
  appId: "HTWB9AR1CG",
  apiKey: "97863c8fc40e33feb1982826bb59ca85",
  indexName: "dnzzk2",
  placeholder: "请输入关键词",
  translations: {
    button: {
      buttonText: "请输入关键词",
    },
  },
};

export default algoliaOptions;

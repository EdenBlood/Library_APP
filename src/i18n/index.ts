import es from "@/i18n/es.json";

interface Languages {
  [key: string]: {[key: string]: string}
};

const languages: Languages = {es};
let currentLanguage: string = "es";

export function setLanguage(language:string):void {
  currentLanguage = language
}

export function translate(key:string) {
  return languages[currentLanguage][key] || key;
}
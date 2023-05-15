import { z, ZodError } from "zod";
import translation from "zod-i18n-map/locales/pt/zod.json";
import { zodI18nMap } from "zod-i18n-map";
import i18next from "i18next";
import { fromZodError } from "zod-validation-error";

export function setUpi18n() {
  i18next.init({
    lng: "pt",
    resources: {
      pt: { zod: translation },
    },
  });

  z.setErrorMap(zodI18nMap);
}

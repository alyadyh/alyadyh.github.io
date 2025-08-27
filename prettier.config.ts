import { type Config } from "prettier";

const config: Config = {
    trailingComma: "none",
    tabWidth: 4,
    semi: true,
    singleQuote: false,
    plugins: [
        "prettier-plugin-tailwindcss"
    ]
};

export default config;
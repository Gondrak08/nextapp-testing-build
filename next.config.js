// eslint-disable-next-line @typescript-eslint/no-require-imports
// const { redirect } = require("next/dist/server/api-utils");
// const path = require("path");

const nextConfig = {
  output: "export", // Para exportação estática (obrigatório para Netlify)
  distDir: "dist", // Opcional - pasta de output personalizada
  images: {
    unoptimized: true, // Necessário quando usando 'output: export'
  },
  sassOptions: {
    includePaths: [require("path").join(__dirname, "styles")],
    prependData: `@import "~@/app/styles/variables.scss";`,
  },
  // Outras configurações específicas do seu projeto...
  trailingSlash: true, // Recomendado para export estático
};
module.exports = nextConfig;
// module.exports = (phase, { defaultConfig }) => {
//   if ("sassOptions" in defaultConfig) {
//     defaultConfig["sassOptions"] = {
//       includePaths: [path.join(__dirname, "styles")],
//       prependData: `@import "~@/app/styles/variables.scss";`,
//     };
//   }
//   return {
//     ...defaultConfig,
//     output: "export",
//     distDir: "dist",
//   };
// };

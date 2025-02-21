export default async (app) => {
  app
    .setPath({
      "@src": `src`,
      "@modules": `node_modules`,
      "@scripts": `@src/scripts`,
      "@styles": `@src/scss`,
      "@dist": `dist`,
    })

    .alias({
      "@modules": app.path(`@modules`),
      "@scripts": app.path(`@scripts`),
      "@styles": app.path(`@styles`),
    })

    /**
     * Application entrypoints.
     *
     * @see {@link https://bud.js.org/docs/bud.entry}
     * @see {@link https://bud.js.org/docs/bud.assets}
     */
    .entry({
      app: ["@scripts/app", "@styles/style"],
      // app: ["@scripts/app.js", "@styles/style.scss"],
      // app: ["./scripts/app", "./scss/style"],
    })

    /**
     * Reload when editing PHP and SCSS files
     */
    .watch(["@src/**/*", app.path("**/*.php")])

    /**
     * Enable sourcemaps in development
     */
    .when(app.isDevelopment, () => app.devtool())

    /**
     * Minimize CSS and JS
     */
    .when(app.isProduction, () => app.minimize())

    /**
     * Set your SSL_CERT AND SSL_KEY paths in .env.local in root site folder
     *
     * @see {@link https://bud.js.org/reference/bud.setUrl}
     * @see {@link https://bud.js.org/reference/bud.setProxyUrl}
     * @see {@link https://bud.js.org/reference/bud.watch}
     */
    .setUrl("http://localhost:3000")
    .setProxyUrl("https://example.test");
};

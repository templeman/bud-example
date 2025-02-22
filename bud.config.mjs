export default async (app) => {
  app
    .setPath({
      "@src": `src`,
      "@modules": `node_modules`,
      "@scripts": `@src/scripts`,
      "@styles": `@src/css`,
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

    // Use the build.before action to ensure Sass is available
    // https://discourse.roots.io/t/bud-6-3-0-and-sass/23570/3
    .hooks.action("build.before", async (app) => {
      // Set custom Sass options
      app.build.items.sass.setOptions({
        sassOptions: {
          // Silence legacy API warning
          // https://sass-lang.com/documentation/breaking-changes/legacy-js-api/
          // https://github.com/roots/bud/issues/2671
          silenceDeprecations: ["legacy-js-api"],
        },
        sourceMap: true,
      });
    })

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
    .setProxyUrl("https://example.test")
    .watch([app.path("**/*.php")]);
};

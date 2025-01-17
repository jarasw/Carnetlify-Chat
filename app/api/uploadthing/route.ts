import { createRouteHandler } from "uploadthing/next";

import { ourFileRouter } from "./core";

// Exportar rutas para el enrutador de aplicaciones de Next.js
export const { GET, POST } = createRouteHandler({
  router: ourFileRouter,
});

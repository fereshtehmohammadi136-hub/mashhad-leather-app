export function assetPath(path) {
  const basePath =
    process.env.NODE_ENV === "production" ? "/mashhad-leather-app" : "";

  return `${basePath}${path}`;
}
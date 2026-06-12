import path from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = path.dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  outputFileTracingRoot: projectRoot,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io"
      }
    ]
  },
  async redirects() {
    return [
      {
        source: "/quiero-vender",
        destination: "/vender",
        permanent: true
      },
      {
        source: "/quiero-rentar-mi-propiedad",
        destination: "/rentar-mi-propiedad",
        permanent: true
      },
      {
        source: "/asesoria-inmobiliaria",
        destination: "/asesoria",
        permanent: true
      },
      {
        source: "/guias-inmobiliarias",
        destination: "/guias",
        permanent: true
      }
    ];
  }
};

export default nextConfig;

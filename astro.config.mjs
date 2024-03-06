import { defineConfig } from 'astro/config';
import icon from "astro-icon";

const isProd = import.meta.env.PROD;
const isDev = import.meta.env.DEV;
const SERVER_PORT = 8888;
const LOCALHOST_URL = `http://localhost:${SERVER_PORT}/`;
const PROD_URL = 'https://cunctae.com';

let BASE_URL;
if (isProd)
{
    BASE_URL = PROD_URL;
} else if (isDev)
{
    BASE_URL = LOCALHOST_URL;
}

/**
 * This are the current configurations for the project
 * More info: https://astro.build/config
 */
export default defineConfig({
    site: BASE_URL,
    server: {
        port: SERVER_PORT,
        host: true
    },
    integrations: [
        icon(),
    ],
    image: {
        domains: ["astro.build"],
      }
});
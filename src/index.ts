import express from 'express';
import compress from 'compression';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

import options from "./cli/options.js";
import logger from "./logger/logger.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);



const publicPath = join(__dirname, 'public');

(async () => {
    try{
        const app = express();

        app.use(compress());

        logger.info(`Listening on port: ${options.port}`);
        

        app.listen(options.port);
        
        app.use(express.static(publicPath));
        logger.info(JSON.stringify(options));
    } catch (err) {
        
    }

})();
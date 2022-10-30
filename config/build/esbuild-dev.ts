import ESBuild from 'esbuild';
import path from 'path';
import config from './esbuild-config'

const PORT = Number(process.env.PORT) || 3000;

ESBuild.serve({
    servedir: config.outdir,
    port: PORT
}, {
    ...config,
}).then(() => {
    console.log('server started on http://localhost:' + PORT)
}).catch(err => {
    console.log(err);
})

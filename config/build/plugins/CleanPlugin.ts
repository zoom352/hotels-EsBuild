import {Plugin} from 'esbuild'
import {rm} from "fs/promises";

export const CleanPlugin: Plugin = {
    name: 'CleanPlugin',
    setup(build) {
        build.onStart(async () => {
            try {
                const outdir = build.initialOptions.outdir;
                if(outdir){
                    await rm(outdir, {recursive: true})
                }
            } catch (e){
                console.log('cannot clean a file')
            }
        })

        build.onEnd(() => {
            console.log('BUILD END')
        })
    },
}

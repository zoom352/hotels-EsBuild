import {Plugin} from 'esbuild'
import {rm, writeFile} from "fs/promises";
import path from 'path'

export const HTMLPlugin: Plugin = {
    name: 'HTMLPlugin',
    setup(build) {
        const outdir = build.initialOptions.outdir;

        build.onStart(async () => {
            try {
                if(outdir){
                    await rm(outdir, {recursive: true})
                }
            } catch (e){
                console.log('cannot clean a file')
            }
        })
        build.onEnd((result) => {

        })

        build.onEnd(() => {
            console.log('BUILD END')
        })
    },
}

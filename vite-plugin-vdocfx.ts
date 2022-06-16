import { Plugin } from 'vite'
import { spawnSync } from 'child_process'

//This is our custom Vite plugin that will build the Docfx sample project for us

export default function viteVDocfx(): Plugin {
    return {
        name: 'vite-plugin-vdocfx',
        buildEnd() {
          exec('docfx build sample/')
        }
    }
} 
  
function exec(cmd) {
    if (spawnSync(cmd, { stdio: 'inherit', shell: true }).status !== 0) {
        throw Error(`exec error: '${cmd}'`)
    }
}
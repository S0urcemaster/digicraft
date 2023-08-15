# digicraft

## Setup
- ```pnpm install```
- ```pnpm build```
- ```pnpm dev```

### Watch
Use ```tsc -w``` in root dir to watch package changes. (Only works on windows.)

### Create New Package
- copy/paste ```/_templates/repo/<name>``` to new name into ```/packages/<new name>```
- adjust ```/package.json/name```
- register in ```app/**/package.json/dependencies```: ```"@digicraft/svg": "*"```
- run ```pnpm install```
- change script build:packages in ```/package.json``` for new package
- Import in other packages with ```import { <name> } from '@digicraft/<name>'```
- run ```pnpm -F @digicraft/<name> build``` (-> ```<name>/dist``` created)
or ```pnpm build:packages```
- 


### Errors
#### Module parse failed
```Module parse failed: Unexpected token (5:5)
You may need an appropriate loader to handle this file type, 
currently no loaders are configured to process this file.
See https://webpack.js.org/concepts#loaders

| import { clog } from '@digicraft/lib'  
> type Environment = {  |
```  
*Solution:*  
Wrong import: ```import { clog } from '@digicraft/lib/src/...'```  
instead of ```import { clog } from '@digicraft/lib'```

#### ERR_PNPM_RECURSIVE_RUN_FIRST_FAIL
... @digicraft/digicraft3@1.0.0 build: `next build`  
The same as above  
*Solution:*  
Check imports - Must be the name declared in package.json

#### None of the selected packages has a "./packages/digi-dev" script
Running ```pnpm build:packages```  
*Solution:*
```"build:packages": "pnpm -F ./packages/** build"``` -> ```"build:packages": "pnpm -F \"./packages/**\" build"```

#### rimraf not found
WSL dosn't seem to work properly.

### SVG Implementation
| Panel | &lt;svg> |
|-------|----------|
|       |          |


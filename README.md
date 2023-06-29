# digicraft

## Setup
- ```pnpm install```
- ```pnpm build```
- ```pnpm dev```

### File Watchers
There are watchers instead of build scripts for the packages that invoke tsc which
in turn trigger the next dev watcher that also checks the dist directories.

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
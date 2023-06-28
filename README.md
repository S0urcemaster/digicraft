# digicraft

## Setup
- ```pnpm install```
- ```pnpm build```
- ```pnpm dev```

### File Watchers
There are watchers instead of build scripts for the packages that invoke tsc which
in turn trigger the next dev watcher that also checks the dist directories.


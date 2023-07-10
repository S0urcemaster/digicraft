
## Todo
- responsive
- Bleistift-icons
- Server fetch table names
- Hinweise als details-summary
- "Mindset" -> "Erfolge"
- Meta

## Ideen
- 

## Deployment

- cd /var/www/digi-craft2
- sudo git pull
- (sudo yarn install)
- sudo yarn build
- pm2 restart digi-craft2

## server
- sudo yarn build
- node dist/server.js

### git
- git pull (GitHub Token in credentials)
- yarn build

### pm2
- pm2 list
- pm2 restart app_name
- pm2 restart id --name newName //rename
- pm2 start yarn -- start
- pm2 start --name server node -- dist/server.js
- pm2 save
- pm2 resurrect
- sudo pkill -f PM2

### apache
- sudo service apache2 restart


#!/bin/bash

set -eu

yarn install

yarn run build-prod
yarn run admin-build-prod

ssh tpmh sudo rm -rf /var/www/tpmh
ssh tpmh mkdir -p /var/www/tpmh/admin
scp -r ./dist ./img ./index.html ./style.css tpmh:/var/www/tpmh
scp -r ./admin/dist ./admin/img ./admin/index.html ./admin/style.css tpmh:/var/www/tpmh/admin

#!/bin/bash

set -eu

yarn install

yarn run build-prod
yarn run admin-build-prod

sudo rm -rf /var/www/tpmh
sudo mkdir -p /var/www/tpmh/admin
sudo cp -R ./dist ./img ./index.html ./style.css /var/www/tpmh
cp -R ./admin/dist ./admin/img ./admin/index.html ./admin/style.css /var/www/tpmh/admin
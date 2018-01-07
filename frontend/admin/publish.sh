#!/bin/bash

set -eu

yarn run admin-build-prod

DST='gs://hunt2018-tpmh-static/admin-d8da0e62c4d89847ce076'
gsutil rsync -r ./dist $DST/dist
gsutil rsync -r ./img $DST/img
gsutil cp ./index.html ./style.css $DST

gsutil acl ch -r -u AllUsers:R $DST
gsutil setmeta -h "Cache-Control:private, max-age=0, no-transform" $DST/index.html
gsutil setmeta -h "Cache-Control:private, max-age=0, no-transform" $DST/style.css
gsutil setmeta -h "Content-Type:application/javascript" -h "Cache-Control:private, max-age=0, no-transform" $DST/dist/tpmh.js

#!/bin/bash

cd "$(dirname "$0")"
source ./devEnv.source.sh
source ./goEnv.source.sh

cd src/hunt/tpmhsim

nodemon --exec "bash -c 'pkill tpmhsim; go build . && ./tpmhsim'" --watch . -e go

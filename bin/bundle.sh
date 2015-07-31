#!/bin/bash

DIR=$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )

browserify -t hbsfy $DIR/../app.js -o $DIR/../dist/bundle.js
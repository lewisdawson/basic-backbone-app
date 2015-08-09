#!/bin/bash

DIR=$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )

if [ ! -d "$DIR/../dist" ]; then
  mkdir $DIR/../dist
fi

browserify -t hbsfy $DIR/../app.js -o $DIR/../dist/bundle.js
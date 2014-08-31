#!/bin/bash

ARG_DEFS=(init prepare publish)
REPO="git@github.com:angularifyjs/bower-angular-closure.git"
NAME="bower-angular-closure"

function init {
  ROOT_DIR=$(resolveDir ../..)
  NEW_VERSION=$(cat $ROOT_DIR/package.json | underscore extract 'version')
}

function prepare {
  # build
  cd $ROOT_DIR
  npm install
  bower install
  gulp test
  gulp build

  # clear up publish directory
  cd $ROOT_DIR
  rm -rf .publish
  mkdir .publish

  # checkout bower repo
  cd .publish
  git clone $REPO 
  
  # update bower version
  echo "-- Updating version in $NAME to $NEW_VERSION"
  cd $NAME
  replaceJsonProp "bower.json" "version" ".*" "$NEW_VERSION"   

  
}

function publish {
  echo moto
}

source $(dirname $0)/../utils.inc

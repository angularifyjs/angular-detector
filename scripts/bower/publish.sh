#!/bin/bash

ARG_DEFS=(init prepare publish)
REPO="git@github.com:angularifyjs/bower-angular-closure.git"
NAME="angular-closure"

function init {
  ROOT_DIR=$(resolveDir ../..)
  NEW_VERSION=$(cat $ROOT_DIR/package.json | underscore extract version | tr -d '"')
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
  cd bower-$NAME
  replaceJsonProp "bower.json" "version" ".*" $NEW_VERSION   

  # remove old script and copy new script
  cp -R ../../LICENSE .
  cp -R ../../dist/* .
  
  # commit bower repo
  echo "-- Commit bower repo"
  git add --all
  git commit -m "v$NEW_VERSION"
  git tag v$NEW_VERSION 
}

function publish {
  cd $ROOT_DIR/.publish/bower-$NAME
  git push origin master
  git push origin v$NEW_VERSION
  bower update $NAME
}

source $(dirname $0)/../utils.inc

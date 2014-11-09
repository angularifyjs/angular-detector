#!/bin/bash

# Usage:
# ./publish.sh

ARG_DEFS=(init prepare publish cleanup)
REPO="git@github.com:angularifyjs/bower-angular-detector.git"
NAME="angular-detector"

function init {
  ROOT_DIR=$(resolveDir ../..)
  NEW_VERSION=$(cat $ROOT_DIR/package.json | underscore extract version | tr -d '"')
}

function prepare {
  echo "------------------------------------------------"
  echo "-- Run test & build"
  cd $ROOT_DIR
  npm install
  bower install
  gulp test
  gulp build

  echo ""
  echo "------------------------------------------------"
  echo "-- Clear up publish directory"
  cd $ROOT_DIR
  rm -rf .publish
  mkdir .publish

  echo ""
  echo "------------------------------------------------"
  echo "-- Checkout bower repo"
  cd .publish
  git clone $REPO 
  
  echo ""
  echo "------------------------------------------------"
  echo "-- Updating version in $NAME to $NEW_VERSION"
  cd bower-$NAME
  replaceJsonProp "bower.json" "version" ".*" $NEW_VERSION   

  echo ""
  echo "------------------------------------------------"
  echo "-- Remove old scripts and copy new scripts"
  rm -rf detector*
  cp -R ../../LICENSE .
  cp -R ../../dist/* .
}

function publish {
  echo ""
  echo "------------------------------------------------"
  echo "-- Commit bower repo"
  git add --all
  git commit -m "v$NEW_VERSION"
  git tag v$NEW_VERSION

  echo ""
  echo "------------------------------------------------"
  echo "-- publish"
  cd $ROOT_DIR/.publish/bower-$NAME
  git push origin master
  git push origin v$NEW_VERSION
}

function cleanup {
  echo ""
  echo "------------------------------------------------"
  echo "-- clean up"
  cd $ROOT_DIR
  rm -rf .publish
}

source $(dirname $0)/../utils.inc

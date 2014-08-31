#!/bin/bash

ARG_DEFS=(init prepare publish clearup)
REPO="git@github.com:angularifyjs/bower-angular-closure.git"
NAME="angular-closure"

function init {
  ROOT_DIR=$(resolveDir ../..)
  NEW_VERSION=$(cat $ROOT_DIR/package.json | underscore extract version | tr -d '"')
}

function prepare {
  echo "------------------------------------------------"
  echo "-- Run test & build"
  echo "------------------------------------------------"
  cd $ROOT_DIR
  npm install
  bower install
  gulp test
  gulp build

  echo "------------------------------------------------"
  echo "-- Clear up publish directory"
  echo "------------------------------------------------"
  cd $ROOT_DIR
  rm -rf .publish
  mkdir .publish

  echo "------------------------------------------------"
  echo "-- Checkout bower repo"
  echo "------------------------------------------------"
  cd .publish
  git clone $REPO 
  
  echo "------------------------------------------------"
  echo "-- Updating version in $NAME to $NEW_VERSION"
  echo "------------------------------------------------"
  cd bower-$NAME
  replaceJsonProp "bower.json" "version" ".*" $NEW_VERSION   

  echo "------------------------------------------------"
  echo "-- Remove old scripts and copy new scripts"
  echo "------------------------------------------------"
  rm -rf closure*
  cp -R ../../LICENSE .
  cp -R ../../dist/* .
}

function publish {
  echo "------------------------------------------------"
  echo "-- Commit bower repo"
  echo "------------------------------------------------"
  git add --all
  git commit -m "v$NEW_VERSION"
  git tag v$NEW_VERSION   

  echo "------------------------------------------------"
  echo "-- publish"
  echo "------------------------------------------------"
  cd $ROOT_DIR/.publish/bower-$NAME
  git push origin master
  git push origin v$NEW_VERSION
}

function clearup {
  echo "------------------------------------------------"
  echo "-- clear up"
  echo "------------------------------------------------"
  cd $ROOT_DIR
  rm -rf .publish
}

source $(dirname $0)/../utils.inc

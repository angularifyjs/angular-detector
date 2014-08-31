# This file provides:
# - a default control flow
# - utility functions
#
# Usage:
# - define the variable ARGS_DEF (see below) with the arguments for your script
# - include this file using `source utils.inc` at the end of your script.


# replaceJsonProp(jsonFile, propertyRegex, valueRegex, replacePattern)
# - note: propertyRegex will be automatically placed into a
#   capturing group! -> all other groups start at index 2!
function replaceJsonProp {
  replaceInFile $1 '"('$2')"[ ]*:[ ]*"'$3'"' '"\1": "'$4'"'
}


# replaceInFile(file, findPattern, replacePattern)
function replaceInFile {
  sed -i .tmp -E "s/$2/$3/" $1
  rm $1.tmp
}


# resolveDir(relativeDir)
# - resolves a directory relative to the current script
function resolveDir {
  echo $(cd $SCRIPT_DIR; cd $1; pwd)
}


# main 
# - kick start bash script
function main {
  cd $(dirname $0);SCRIPT_DIR=$(pwd)
  for arg in ${ARG_DEFS[*]}
  do
    eval $arg
  done
}
main "$@"

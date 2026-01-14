#!/usr/bin/env bash

shopt -s globstar

workdir=$(pwd)

if ! command -v minify > /dev/null; then
  echo 'error: need install minify' >&2
  exit 1
fi

if [[ ! -d "$workdir"  ]]; then
  echo "error: need dir '$workdir'"
fi

for file in "$workdir/public/"**/*.{css,html,js}; do
  [[ -f "$file"  ]] && minify "$file" -o "$file"
done

echo -e '\nminify complete'
exit 0

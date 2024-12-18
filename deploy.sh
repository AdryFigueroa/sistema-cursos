#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist

git init
git add -A
git commit -m 'deploy'

# if you are deploying to https://AdryFigueroa.github.io/sistema-cursos
git push -f https://@github.com:AdryFigueroa/sistema-cursos.git main:gh-pages

cd -
#!/bin/bash

PROJECT_LOCKFILE=${PROJECT_LOCKFILE:-"package-lock.json"}

# if [[ $TRAVIS_PULL_REQUEST_BRANCH != *"greenkeeper"* ]]; then
#  exit 0
# fi

echo "" >> $PROJECT_LOCKFILE
# if ! git diff-index --quiet HEAD $PROJECT_LOCKFILE --; then
  # git config user.email "$GITHUB_EMAIL"
  # git config user.name "Circle CI"
  # git config push.default simple

  git add $PROJECT_LOCKFILE
  git commit -m "chore(*): update lockfile [ci skip]" -m "See: $CIRCLE_BUILD_URL" --author="$GITHUB_AUTHOR"
  git push origin $CIRCLE_BRANCH
# fi

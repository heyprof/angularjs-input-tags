#!/bin/bash

if [[ $TRAVIS_PULL_REQUEST_BRANCH != *"greenkeeper"* ]]; then
	# Not a GreenKeeper Pull Request, aborting
	exit 0
fi

if ! git diff-index --quiet HEAD --; then
  echo "Commit and push lockfile"
  git config --global user.email "$GITHUB_EMAIL"
  git config --global user.name "Travis CI"
  git config --global push.default simple

  git add package-lock.json
  git commit -m "chore(*): update lockfile"
  git push
fi

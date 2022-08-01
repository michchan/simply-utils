#!/bin/sh
git status

if [ -z "$(git status --porcelain)" ]; then 
  echo "Working directory clean";
  exit 0;
else 
  echo "ERROR: Some uncommited changes. Please commit everything including generated indexing/documentation changes.";
  exit 1;
fi
#!/bin/bash

echo "=> Install dependent packages"
npm install

echo "=> Build for production"
npm run build

exec "$@"

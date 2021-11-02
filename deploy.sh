#!/bin/bash

ng build --prod=true --output-path dist --base-href /ngx-display/;
npx angular-cli-ghpages --dir="dist";


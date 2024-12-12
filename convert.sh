#!/bin/bash

if ! command -v pandoc >&2; then
    echo "Pandoc not installed. Pandoc is required to run this script."
    exit 1
fi

echo "Pandoc installed, converting task-3.md to task-3.html"

pandoc -f markdown task-3.md > task-3.html

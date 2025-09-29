#!/bin/bash

# Lint Fix Script
# This script runs ESLint with the --fix flag to automatically fix linting issues

echo "Running ESLint with auto-fix..."
npm run lint:fix

if [ $? -eq 0 ]; then
    echo "✅ Lint fix completed successfully!"
else
    echo "❌ Lint fix failed. Please check the errors above."
    exit 1
fi
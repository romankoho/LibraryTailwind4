SHELL := /bin/bash
.PHONY: help clean clean-build clean-test init/pre_commit_install init lint lint-flake8 coverage check/pre-commit check fmt/py validate build publish .init-git-repository
.DEFAULT_GOAL := help

define PRINT_HELP_PYSCRIPT
import re, sys

targets = []
for line in sys.stdin:
	match = re.match(r'^([a-zA-Z_-]+):.*?## (.*)$$', line)
	if match:
		target, help = match.groups()
		targets.append((target, help))

for target, help in sorted(targets, key=lambda x: x[0]):
	print("%-20s %s" % (target, help))
endef
export PRINT_HELP_PYSCRIPT

define BROWSER_PYSCRIPT
import os, webbrowser, sys

from urllib.request import pathname2url

webbrowser.open("file://" + pathname2url(os.path.abspath(sys.argv[1])))
endef
export BROWSER_PYSCRIPT

BROWSER := python3 -c "$$BROWSER_PYSCRIPT"

TFlINT_INSTALLED=$(if $(shell which $(exec)),0,1)

help:
	@python3 -c "$$PRINT_HELP_PYSCRIPT" < $(MAKEFILE_LIST)

init: .init-git-repository ## initialize project
	npm install
	pip install -U pre-commit
	git config --unset-all core.hooksPath
	pre-commit install --hook-type commit-msg
	npm run prepare

clean: clean-build clean-coverage ## remove all build, test and coverage artifacts

clean-build: ## remove build artifacts
	rm -fr dist/

clean-coverage: ## remove test coverage data
	rm -rf coverage/

.init-git-repository: ## initialize git repository
	if [ -d ".git" ]; then \
		echo "git repository already exists, nothing to do"; \
	else \
		echo "not a git repo, creating new one"; \
		git init; \
		git checkout -b main; \
		git add .; \
		git commit -m "initial commit, startproject"; \
	fi

typecheck: ## typescript typecheck with tsc
	npm run typecheck

lint: ## static code analysis with eslint
	npm run lint

coverage: ## check code coverage quickly with the default Python
	-npm run test:cov
	$(BROWSER) coverage/index.html

check-pre-commit: ## perform checks based on pre-commit settings
	pre-commit run --all-files

check: typecheck lint check-pre-commit ## check code for linting, static code analysis errors and formatting errors

format: ## format source files (see https://prettier.io/docs/en/options.html, check package.json section 'prettier')
	npx prettier --write src

fmt: format ## see target 'format'

test: ## run tests
	npm run test:cov

stories: ## open storybook in watch mode
	npm run dev


validate: check test ## validate code by performing test and check tasks

build: ## Builds the app for production to the build folder. It correctly bundles React in production mode and optimizes the build for the best performance.
	rm -rf dist
	npm run build:lib

publish: ## publish all resources built by build command
	@echo 'TODO: implement a publish target'

publish-d3: build
	aws s3 cp --recursive dist s3://metaroom-studio-gitlab-ci-bucket --cache-control "private, max-age=86400, s-maxage=86400, must-revalidate, stale-while-revalidate=600, stale-if-error=86400"
	aws s3 cp dist/index.html s3://metaroom-studio-gitlab-ci-bucket/index.html --cache-control "private, no-cache, max-age=0, s-maxage=0"
	aws s3 cp dist/config.json s3://metaroom-studio-gitlab-ci-bucket/config.json --cache-control "private, no-cache, max-age=0, s-maxage=0"
	aws cloudfront create-invalidation --distribution-id E12KX2ZIQIFMHG --paths "/*"

publish-d1: build
	aws s3 cp --recursive dist s3://cloudfront-tweiss-metaroom --exclude "ort-*" --cache-control "private, max-age=86400, s-maxage=86400, must-revalidate, stale-while-revalidate=600, stale-if-error=86400"
	aws s3 cp dist/index.html s3://cloudfront-tweiss-metaroom/index.html --cache-control "private, no-cache, max-age=0, s-maxage=0"
	aws s3 cp dist/config.json s3://cloudfront-tweiss-metaroom/config.json --cache-control "private, no-cache, max-age=0, s-maxage=0"
	aws s3 cp dist s3://cloudfront-tweiss-metaroom --recursive --exclude "*" --include "ort*" --cache-control "private, no-cache, max-age=0, s-maxage=0" --content-type "application/octet-stream"
	aws cloudfront create-invalidation --distribution-id E363IHOYYMRZ6Y --paths "/*"

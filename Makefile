.PHONY: build
build:
	rm -rf ./designerti.zip
	cd ./wp/themes/designerti; \
	zip -r ../../../designerti.zip ./
.DEFAULT_GOAL := build
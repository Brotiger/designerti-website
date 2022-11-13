.PHONY: build
build:
	rm -rf ./designerti.zip
	zip -r designerti.zip ./wp/themes/designerti 
.DEFAULT_GOAL := build
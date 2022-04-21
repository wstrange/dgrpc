#!/usr/bin/env bash

protoc --dart_out=grpc:lib/src/generated -I. *.proto
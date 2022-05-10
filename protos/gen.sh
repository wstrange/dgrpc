#!/usr/bin/env bash


GP=/opt/homebrew/Cellar/protobuf/3.19.4/include/google/protobuf

protoc --dart_out=grpc:lib/src/generated \
  -I. *.proto \
  google/protobuf/timestamp.proto \
  google/protobuf/field_mask.proto
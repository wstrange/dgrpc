#!/usr/bin/env bash


GP=/opt/homebrew/Cellar/protobuf/3.19.4/include/google/protobuf

protoc --dart_out=grpc:lib/src/generated \
  -I. *.proto --proto_path=$GP \
  google/protobuf/timestamp.proto \
  google/protobuf/field_mask.proto


(cd ../client && flutter pub get)

(cd ../serv && dart pub get)
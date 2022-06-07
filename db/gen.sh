#!/usr/bin/env bash

rm db.sqlite
rm lib/*.g.dart
dart run build_runner watch


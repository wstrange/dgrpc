///
//  Generated code. Do not modify.
//  source: auth.proto
//
// @dart = 2.12
// ignore_for_file: annotate_overrides,camel_case_types,unnecessary_const,non_constant_identifier_names,library_prefixes,unused_import,unused_shown_name,return_of_invalid_type,unnecessary_this,prefer_final_fields,deprecated_member_use_from_same_package

import 'dart:core' as $core;
import 'dart:convert' as $convert;
import 'dart:typed_data' as $typed_data;
@$core.Deprecated('Use authRequestDescriptor instead')
const AuthRequest$json = const {
  '1': 'AuthRequest',
  '2': const [
    const {'1': 'id_token', '3': 1, '4': 1, '5': 9, '10': 'idToken'},
  ],
};

/// Descriptor for `AuthRequest`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List authRequestDescriptor = $convert.base64Decode('CgtBdXRoUmVxdWVzdBIZCghpZF90b2tlbhgBIAEoCVIHaWRUb2tlbg==');
@$core.Deprecated('Use authResponseDescriptor instead')
const AuthResponse$json = const {
  '1': 'AuthResponse',
  '2': const [
    const {'1': 'session_id', '3': 1, '4': 1, '5': 9, '10': 'sessionId'},
    const {'1': 'error', '3': 2, '4': 1, '5': 14, '6': '.dgrpc.AuthResponse.AuthErrors', '10': 'error'},
    const {'1': 'messages', '3': 3, '4': 3, '5': 9, '10': 'messages'},
  ],
  '4': const [AuthResponse_AuthErrors$json],
};

@$core.Deprecated('Use authResponseDescriptor instead')
const AuthResponse_AuthErrors$json = const {
  '1': 'AuthErrors',
  '2': const [
    const {'1': 'OK', '2': 0},
    const {'1': 'ERROR', '2': 1},
  ],
};

/// Descriptor for `AuthResponse`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List authResponseDescriptor = $convert.base64Decode('CgxBdXRoUmVzcG9uc2USHQoKc2Vzc2lvbl9pZBgBIAEoCVIJc2Vzc2lvbklkEjQKBWVycm9yGAIgASgOMh4uZGdycGMuQXV0aFJlc3BvbnNlLkF1dGhFcnJvcnNSBWVycm9yEhoKCG1lc3NhZ2VzGAMgAygJUghtZXNzYWdlcyIfCgpBdXRoRXJyb3JzEgYKAk9LEAASCQoFRVJST1IQAQ==');

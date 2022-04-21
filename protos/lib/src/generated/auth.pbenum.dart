///
//  Generated code. Do not modify.
//  source: auth.proto
//
// @dart = 2.12
// ignore_for_file: annotate_overrides,camel_case_types,unnecessary_const,non_constant_identifier_names,library_prefixes,unused_import,unused_shown_name,return_of_invalid_type,unnecessary_this,prefer_final_fields

// ignore_for_file: UNDEFINED_SHOWN_NAME
import 'dart:core' as $core;
import 'package:protobuf/protobuf.dart' as $pb;

class AuthResponse_AuthErrors extends $pb.ProtobufEnum {
  static const AuthResponse_AuthErrors OK = AuthResponse_AuthErrors._(0, const $core.bool.fromEnvironment('protobuf.omit_enum_names') ? '' : 'OK');
  static const AuthResponse_AuthErrors ERROR = AuthResponse_AuthErrors._(1, const $core.bool.fromEnvironment('protobuf.omit_enum_names') ? '' : 'ERROR');

  static const $core.List<AuthResponse_AuthErrors> values = <AuthResponse_AuthErrors> [
    OK,
    ERROR,
  ];

  static final $core.Map<$core.int, AuthResponse_AuthErrors> _byValue = $pb.ProtobufEnum.initByValue(values);
  static AuthResponse_AuthErrors? valueOf($core.int value) => _byValue[value];

  const AuthResponse_AuthErrors._($core.int v, $core.String n) : super(v, n);
}


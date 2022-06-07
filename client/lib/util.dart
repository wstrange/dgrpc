import 'dart:html';

import 'package:protos/protos.dart';
import 'package:intl/intl.dart';

var _formatter = DateFormat.yMMMd();

extension TimeStampOperators on Timestamp {
  bool isAfterNow() => this.toDateTime().isAfter(DateTime.now());

  bool isBeforeNow() => this.toDateTime().isBefore(DateTime.now());


  String yMMMd() => _formatter.format(this.toDateTime());
}
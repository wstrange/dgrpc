import 'package:protos/protos.dart';
import 'package:intl/intl.dart';

var _formatter = DateFormat.yMMMd();

extension TimeStampOperators on Timestamp {
  bool isAfterNow() => toDateTime().isAfter(DateTime.now());

  bool isBeforeNow() => toDateTime().isBefore(DateTime.now());

  String yMMMd() => _formatter.format(toDateTime());
}

extension EventDetailsExt on EventDetailsResponse {

  // Users in the role...
  List<PersonInfo> usersInEventRole(EventPersonInfo_EventRole eventRole) =>
      eventPersonInfos
          .where((pi) => pi.eventRole == eventRole)
          .map((pi) => pi.personInfo)
          .toList();
  // set of persons who are registered for an event
  List<PersonInfo> registeredUsers() =>  usersInEventRole(EventPersonInfo_EventRole.REGISTERED);
  // Set of users who are waitlisted
  List<PersonInfo> waitlistedUsers() => usersInEventRole(EventPersonInfo_EventRole.WAITLISTED);

}



import 'package:flutter/material.dart';
import 'package:flutter/src/widgets/framework.dart';
import 'package:hooks_riverpod/hooks_riverpod.dart';

class UserAdminPage extends ConsumerWidget {
  @override
  Widget build(BuildContext context, WidgetRef ref) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Admin'),
      ),
      // drawer:
      // show table - of user(email, id, etc.) section membership,
      body: Column(children: [ Text('User Admin')],),
    );
  }
}
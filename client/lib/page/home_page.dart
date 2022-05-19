import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

class HomePage extends ConsumerWidget {
  const HomePage({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    return Scaffold(
      body: Row(children: [
        Text('Home Page'),
        TextButton(child: Text('Login'), onPressed: () => print('press')),
      ],)
    );
  }
}
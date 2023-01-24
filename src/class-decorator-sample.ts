function classDecorator(): Function {
  return () => {};
}

@classDecorator()
class ClassDecoratorSample {
  v = '';
}

function methodDecorator(): Function {
  return () => {};
}

class MethodDecoratorSample {
  @methodDecorator()
  hello(): string {
    return 'hello';
  }
}

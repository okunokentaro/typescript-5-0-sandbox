function propertyDecoratorSample(): Function {
  return () => {};
}

class PropertyDecoratorSample {
  @propertyDecoratorSample()
  v = '';
}

function constructorParameterDecoratorSample(): Function {
  return () => {};
}

class ConstructorParameterDecoratorSample {
  constructor(@constructorParameterDecoratorSample() readonly v: string) {}
}

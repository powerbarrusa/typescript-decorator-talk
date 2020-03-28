class Greeter {
  @AddIAm('Barr')
  @AddNameCustom('Josh')
  greet() {
    return 'Hello';
  }
}


function AddIAm(myName) {
  return function (constructor, methodName, methodDescriptor) {
    const originalMethod = methodDescriptor.value;
    const newMethodDescriptor = {
      configurable: methodDescriptor.configurable,
      enumerable: methodDescriptor.enumerable,
      value: () => `${originalMethod()} I am ${myName}`
    };
    return newMethodDescriptor;
  }
  /**
   * Exercise:  Add another decorator that appends "I am myName" to the end
   * Eg: "Hello Josh I am Andy"
   * Hint: This will be a decorator factory (refer to AddNameCustom below)
   */
}


function AddNameCustom(name) { // wrapping in a function: This is the Decorator-Maker (or Decorator-Factory)
  return function (constructor, methodName, methodDescriptor) {
    const originalMethod = methodDescriptor.value;
    const newMethodDescriptor = {
      configurable: methodDescriptor.configurable,
      enumerable: methodDescriptor.enumerable,
      value: () => `${originalMethod()} ${name}`
    };
    return newMethodDescriptor;
  }
}


function buttonPress() {
  const greet = new Greeter();
  return greet.greet();
}


document.getElementById('create-greeter-button')!.addEventListener("click", (e) => {
  e.preventDefault();
  alert(buttonPress());
})
// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});
describe('sayHello',function () {
    it('should be a defined function', function () {
        expect(typeof sayHello).toBe("function");
    });
    it('should return a string when called.', function () {
        expect(typeof sayHello()).toBe("string");
    });
    it('should never return undefined when called', function () {
        expect(sayHello()).not.toBe(undefined);
    });
    it('should say "Hello Jane" when called', function () {
        expect(sayHello("Jane")).toBe("Hello, Jane!");
    });
    it('should say "Hello Alex" when called', function () {
        expect(sayHello("Alex")).toBe("Hello, Alex!");
    });
    it('should say "Hello Pat" when called', function () {
        expect(sayHello("Pat")).toBe("Hello, Pat!")
    });
    it('should say "Hello, World" when called', function () {
        expect(sayHello("World")).toBe("Hello, World!");
    });
    it('should say "Hello, World" when called', function () {
        expect(sayHello(true)).toBe("Hello, World!");
    });
    it('should say "Hello, World" when called', function () {
        expect(sayHello(false)).toBe("Hello, World!");
    });
});
// Now, add expect(sayHello(false)).toBe("Hello, World!") to the tests.js file. Refresh to see the failing test.
// Add just enough code to code.js to green this test.

















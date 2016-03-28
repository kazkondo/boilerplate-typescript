/// <reference path="../typings/main.d.ts" />
import * as assert from 'power-assert';
import Hello from '../src/hello';

describe("Hello", () => {
    it("hello() should return 'hello world!'", () => {
        var hello = new Hello();        
        assert.equal(hello.hello(), "hello world!");
    });
});
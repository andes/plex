"use strict";
/* tslint:disable:no-unused-variable */
var app_component_1 = require('./app.component');
var testing_1 = require('@angular/core/testing');
var testing_2 = require('@angular/core/testing');
var platform_browser_1 = require('@angular/platform-browser');
////////  SPECS  /////////////
/// Delete this
describe('Smoke test', function () {
    it('should run a passing test', function () {
        expect(true).toEqual(true, 'should pass');
    });
});
describe('AppComponent with TCB', function () {
    it('should instantiate component', testing_1.async(testing_1.inject([testing_2.TestComponentBuilder], function (tcb) {
        tcb.createAsync(app_component_1.AppComponent).then(function (fixture) {
            expect(fixture.componentInstance instanceof app_component_1.AppComponent).toBe(true, 'should create AppComponent');
        });
    })));
    it('should have expected <h1> text', testing_1.async(testing_1.inject([testing_2.TestComponentBuilder], function (tcb) {
        tcb.createAsync(app_component_1.AppComponent).then(function (fixture) {
            // fixture.detectChanges();  // would need to resolve a binding but we don't have a binding
            var h1 = fixture.debugElement.query(function (el) { return el.name === 'h1'; }).nativeElement; // it works
            h1 = fixture.debugElement.query(platform_browser_1.By.css('h1')).nativeElement; // preferred
            expect(h1.innerText).toMatch(/angular 2 app/i, '<h1> should say something about "Angular 2 App"');
        });
    })));
});
//# sourceMappingURL=app.component.spec.js.map
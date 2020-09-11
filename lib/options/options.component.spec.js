"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var options_component_1 = require("./options.component");
var module_1 = require("../module");
var forms_1 = require("@angular/forms");
describe('PlexOptionsComponent', function () {
    var fixture;
    var options;
    beforeEach(testing_1.fakeAsync(function () {
        fixture = createTestingModule(PlexOptionsTestComponent, "<plex-options [items]=\"items\"  (activated)=\"onChange($event)\"></plex-options>");
        options = fixture.componentInstance.component;
        tickAndDetectChanges(fixture);
    }));
    it('have 3 buttons', testing_1.fakeAsync(function () {
        var elements = getElementAll(fixture, 'plex-options button');
        expect(elements.length).toBe(fixture.componentInstance.items.length);
    }));
    it('first item is active', testing_1.fakeAsync(function () {
        expect(options.active).toBe(fixture.componentInstance.items[0].key);
    }));
    it('display label', testing_1.fakeAsync(function () {
        var elements = getElementAll(fixture, 'plex-options button');
        elements.forEach(function (elem, index) {
            var elementRef = elem.nativeElement;
            var text = elementRef.innerText;
            expect(text).toBe(fixture.componentInstance.items[index].label);
        });
    }));
    it('activated must be called on click', testing_1.fakeAsync(function () {
        spyOn(fixture.componentInstance, 'onChange');
        var elements = getElementAll(fixture, 'plex-options button');
        var secondButton = elements[1].nativeElement;
        secondButton.dispatchEvent(new Event('click'));
        tickAndDetectChanges(fixture);
        expect(fixture.componentInstance.onChange).toHaveBeenCalledWith('b');
        expect(options.active).toBe('b');
    }));
    it('change item must update active', testing_1.fakeAsync(function () {
        fixture.componentInstance.items = [
            { key: 'd', label: 'D' },
            { key: 'e', label: 'E' },
        ];
        spyOn(fixture.componentInstance, 'onChange');
        tickAndDetectChanges(fixture);
        var elements = getElementAll(fixture, 'plex-options button');
        expect(options.active).toBe('d');
        elements.forEach(function (elem, index) {
            var elementRef = elem.nativeElement;
            var text = elementRef.innerText;
            expect(text).toBe(fixture.componentInstance.items[index].label);
        });
        expect(fixture.componentInstance.onChange).toHaveBeenCalledWith('d');
    }));
    it('change item but preserve active key', testing_1.fakeAsync(function () {
        fixture.componentInstance.items = [
            { key: 'a', label: 'A' },
            { key: 'j', label: 'J' },
        ];
        spyOn(fixture.componentInstance, 'onChange');
        tickAndDetectChanges(fixture);
        expect(options.active).toBe('a');
        expect(fixture.componentInstance.onChange).toHaveBeenCalledTimes(0);
    }));
});
function tickAndDetectChanges(fixture) {
    fixture.detectChanges();
    testing_1.tick();
}
exports.tickAndDetectChanges = tickAndDetectChanges;
function getElement(fixture, selector) {
    return fixture.debugElement.query(platform_browser_1.By.css(selector));
}
exports.getElement = getElement;
function getElementAll(fixture, selector) {
    return fixture.debugElement.queryAll(platform_browser_1.By.css(selector));
}
exports.getElementAll = getElementAll;
var PlexOptionsTestComponent = /** @class */ (function () {
    function PlexOptionsTestComponent() {
        this.items = [
            { key: 'a', label: 'A' },
            { key: 'b', label: 'B' },
            { key: 'C', label: 'C' },
        ];
    }
    PlexOptionsTestComponent.prototype.onChange = function (_) {
    };
    __decorate([
        core_1.ViewChild(options_component_1.PlexOptionsComponent, { static: false }),
        __metadata("design:type", options_component_1.PlexOptionsComponent)
    ], PlexOptionsTestComponent.prototype, "component", void 0);
    PlexOptionsTestComponent = __decorate([
        core_1.Component({
            template: ""
        })
    ], PlexOptionsTestComponent);
    return PlexOptionsTestComponent;
}());
function createTestingModule(cmp, template) {
    testing_1.TestBed.configureTestingModule({
        imports: [platform_browser_1.BrowserModule, module_1.PlexModule, forms_1.FormsModule],
        declarations: [cmp]
    })
        .overrideComponent(cmp, {
        set: {
            template: template
        }
    });
    testing_1.TestBed.compileComponents();
    var fixture = testing_1.TestBed.createComponent(cmp);
    fixture.detectChanges();
    return fixture;
}
//# sourceMappingURL=../../../src/lib/options/options.component.spec.js.map
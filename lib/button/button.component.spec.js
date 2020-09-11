"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var button_component_1 = require("./button.component");
var module_1 = require("../module");
var forms_1 = require("@angular/forms");
describe('PlexButtonComponent', function () {
    describe('input simple text', function () {
        var fixture;
        var button;
        var native;
        beforeEach(testing_1.fakeAsync(function () {
            fixture = createTestingModule(PlexButtonTestComponent, "<plex-button (click)=\"onChange($event)\" label=\"HOLA\"></plex-button>");
            button = fixture.componentInstance.plexButton;
            native = getElement(fixture, 'plex-button').nativeElement;
        }));
        it('button click fired', testing_1.fakeAsync(function () {
            spyOn(fixture.componentInstance, 'onChange');
            tickAndDetectChanges(fixture);
            dispatchClick(native);
            expect(fixture.componentInstance.onChange).toHaveBeenCalledTimes(1);
        }));
        it('button label', testing_1.fakeAsync(function () {
            tickAndDetectChanges(fixture);
            var element = getElement(fixture, 'plex-button span');
            expect(element.nativeElement.textContent).toBe(' HOLA ');
        }));
    });
    describe('button icon', function () {
        var fixture;
        it('button icon', testing_1.fakeAsync(function () {
            fixture = createTestingModule(PlexButtonTestComponent, "<plex-button icon=\"pencil\"></plex-button>");
            tickAndDetectChanges(fixture);
            var element = getElement(fixture, 'plex-button');
            expect(element.nativeElement).toBeDefined();
            expect(element.nativeElement.getAttribute('icon')).toBe('pencil');
        }));
    });
    describe('button text in ng-content', function () {
        it('button icon', testing_1.fakeAsync(function () {
            var fixture = createTestingModule(PlexButtonTestComponent, "<plex-button>HOLA</plex-button>");
            tickAndDetectChanges(fixture);
            var element = getElement(fixture, 'plex-button button');
            expect(element.nativeElement).toBeDefined();
            expect(element.nativeElement.textContent).toBe('HOLA');
        }));
    });
});
function dispatchClick(element) {
    element.dispatchEvent(new Event('click'));
}
function tickAndDetectChanges(fixture) {
    fixture.detectChanges();
    testing_1.tick();
}
exports.tickAndDetectChanges = tickAndDetectChanges;
function getPlexElement(fixture) {
    return fixture.debugElement.query(platform_browser_1.By.css('plex-button'));
}
exports.getPlexElement = getPlexElement;
function getElement(fixture, selector) {
    return fixture.debugElement.query(platform_browser_1.By.css(selector));
}
exports.getElement = getElement;
function triggerKeyEvent(event, element, which, key) {
    if (key === void 0) { key = ''; }
    element.triggerEventHandler(event, {
        which: which,
        key: key,
        preventDefault: function () { },
    });
}
exports.triggerKeyEvent = triggerKeyEvent;
var PlexButtonTestComponent = /** @class */ (function () {
    function PlexButtonTestComponent() {
        this.text = 'hola';
    }
    PlexButtonTestComponent.prototype.onChange = function (_) {
    };
    PlexButtonTestComponent.prototype.onFocus = function (_) {
    };
    PlexButtonTestComponent.prototype.onBlur = function (_) {
    };
    PlexButtonTestComponent.prototype.onOpen = function () {
    };
    PlexButtonTestComponent.prototype.onClose = function () {
    };
    PlexButtonTestComponent.prototype.onAdd = function () {
    };
    PlexButtonTestComponent.prototype.onRemove = function () {
    };
    PlexButtonTestComponent.prototype.onClear = function () {
    };
    PlexButtonTestComponent.prototype.onSearch = function () {
    };
    PlexButtonTestComponent.prototype.onScroll = function () {
    };
    PlexButtonTestComponent.prototype.onScrollToEnd = function () {
    };
    __decorate([
        core_1.ViewChild(button_component_1.PlexButtonComponent, { static: false }),
        __metadata("design:type", button_component_1.PlexButtonComponent)
    ], PlexButtonTestComponent.prototype, "plexButton", void 0);
    PlexButtonTestComponent = __decorate([
        core_1.Component({
            template: ""
        })
    ], PlexButtonTestComponent);
    return PlexButtonTestComponent;
}());
var EncapsulatedPlexButtonTestComponent = /** @class */ (function (_super) {
    __extends(EncapsulatedPlexButtonTestComponent, _super);
    function EncapsulatedPlexButtonTestComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        core_1.ViewChild(button_component_1.PlexButtonComponent, { static: true }),
        __metadata("design:type", button_component_1.PlexButtonComponent)
    ], EncapsulatedPlexButtonTestComponent.prototype, "select", void 0);
    EncapsulatedPlexButtonTestComponent = __decorate([
        core_1.Component({
            template: "",
            encapsulation: core_1.ViewEncapsulation.Native,
        })
    ], EncapsulatedPlexButtonTestComponent);
    return EncapsulatedPlexButtonTestComponent;
}(PlexButtonTestComponent));
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
function createEvent(target) {
    if (target === void 0) { target = {}; }
    return {
        preventDefault: function () {
        },
        target: __assign({ className: '', tagName: '', classList: {
                contains: function () {
                }
            } }, target)
    };
}
//# sourceMappingURL=../../../src/lib/button/button.component.spec.js.map
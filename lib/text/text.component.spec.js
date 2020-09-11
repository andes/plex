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
// import { ConsoleService } from './console.service';
// import { FormsModule } from '@angular/forms';
// import { getNgSelectElement, selectOption, TestsErrorHandler, tickAndDetectChanges, triggerKeyDownEvent } from '../testing/helpers';
// import { MockConsole, MockNgZone } from '../testing/mocks';
var text_component_1 = require("./text.component");
var module_1 = require("../module");
var forms_1 = require("@angular/forms");
describe('PlexTextComponent', function () {
    describe('input simple text', function () {
        var fixture;
        var text;
        var input;
        var nativeText;
        beforeEach(testing_1.fakeAsync(function () {
            fixture = createTestingModule(PlexTextTestComponent, "<plex-text [(ngModel)]=\"text\" (change)=\"onChange($event)\" (focus)=\"onFocus()\">\n                </plex-text>");
            text = fixture.componentInstance.plexText;
            input = getElement(fixture, 'plex-text input').nativeElement;
            nativeText = getElement(fixture, 'plex-text').nativeElement;
        }));
        it('writing must update Input variable', testing_1.fakeAsync(function () {
            tickAndDetectChanges(fixture);
            writePlexText(nativeText, 'hola');
            tickAndDetectChanges(fixture);
            expect(fixture.componentInstance.text).toBe('hola');
        }));
        it('changing input var must update html DOM', testing_1.fakeAsync(function () {
            tickAndDetectChanges(fixture);
            fixture.componentInstance.text = 'hola';
            tickAndDetectChanges(fixture);
            expect(input.value).toBe('hola');
        }));
        it('after write change must be called', testing_1.fakeAsync(function () {
            spyOn(fixture.componentInstance, 'onChange');
            writePlexText(input, 'hola');
            tickAndDetectChanges(fixture);
            expect(fixture.componentInstance.onChange).toHaveBeenCalledWith({ value: 'hola' });
        }));
        it('focus on click', testing_1.fakeAsync(function () {
            spyOn(fixture.componentInstance, 'onFocus');
            nativeText.dispatchEvent(new Event('focus'));
            tickAndDetectChanges(fixture);
            expect(fixture.componentInstance.onFocus).toHaveBeenCalled();
        }));
    });
    describe('readonly check', function () {
        var fixture;
        var input;
        beforeEach(testing_1.fakeAsync(function () {
            fixture = createTestingModule(PlexTextTestComponent, "<plex-text [(ngModel)]=\"text\" (change)=\"onChange($event)\" [readonly]=\"true\">\n                </plex-text>");
            input = getElement(fixture, 'plex-text input').nativeElement;
        }));
        it('readonly properties', testing_1.fakeAsync(function () {
            var readonly = getElement(fixture, 'plex-text input').nativeElement.getAttribute('readonly');
            expect(readonly).toBeDefined();
        }));
    });
    describe('input debounce text', function () {
        var fixture;
        var text;
        var input;
        var nativeText;
        beforeEach(testing_1.fakeAsync(function () {
            fixture = createTestingModule(PlexTextTestComponent, "<plex-text [(ngModel)]=\"text\" (change)=\"onChange($event)\" [debounce]=\"1000\">\n                </plex-text>");
            text = fixture.componentInstance.plexText;
            input = getElement(fixture, 'plex-text input').nativeElement;
            nativeText = getElement(fixture, 'plex-text').nativeElement;
        }));
        it('after write change must be called', testing_1.fakeAsync(function () {
            spyOn(fixture.componentInstance, 'onChange');
            writePlexText(input, 'hola');
            tickAndDetectChanges(fixture);
            expect(fixture.componentInstance.onChange).toHaveBeenCalledTimes(0);
            testing_1.tick(1100);
            expect(fixture.componentInstance.onChange).toHaveBeenCalledWith({ value: 'hola' });
        }));
    });
});
function writePlexText(element, text) {
    element.value = text;
    element.dispatchEvent(new Event('input'));
}
function tickAndDetectChanges(fixture) {
    fixture.detectChanges();
    testing_1.tick();
}
exports.tickAndDetectChanges = tickAndDetectChanges;
function getPlexTextElement(fixture) {
    return fixture.debugElement.query(platform_browser_1.By.css('plex-text'));
}
exports.getPlexTextElement = getPlexTextElement;
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
var PlexTextTestComponent = /** @class */ (function () {
    function PlexTextTestComponent() {
        this.text = 'hola';
    }
    PlexTextTestComponent.prototype.onChange = function (_) {
    };
    PlexTextTestComponent.prototype.onFocus = function (_) {
    };
    PlexTextTestComponent.prototype.onBlur = function (_) {
    };
    PlexTextTestComponent.prototype.onOpen = function () {
    };
    PlexTextTestComponent.prototype.onClose = function () {
    };
    PlexTextTestComponent.prototype.onAdd = function () {
    };
    PlexTextTestComponent.prototype.onRemove = function () {
    };
    PlexTextTestComponent.prototype.onClear = function () {
    };
    PlexTextTestComponent.prototype.onSearch = function () {
    };
    PlexTextTestComponent.prototype.onScroll = function () {
    };
    PlexTextTestComponent.prototype.onScrollToEnd = function () {
    };
    __decorate([
        core_1.ViewChild(text_component_1.PlexTextComponent, { static: false }),
        __metadata("design:type", text_component_1.PlexTextComponent)
    ], PlexTextTestComponent.prototype, "plexText", void 0);
    PlexTextTestComponent = __decorate([
        core_1.Component({
            template: ""
        })
    ], PlexTextTestComponent);
    return PlexTextTestComponent;
}());
var EncapsulatedPlexTextTestComponent = /** @class */ (function (_super) {
    __extends(EncapsulatedPlexTextTestComponent, _super);
    function EncapsulatedPlexTextTestComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        core_1.ViewChild(text_component_1.PlexTextComponent, { static: true }),
        __metadata("design:type", text_component_1.PlexTextComponent)
    ], EncapsulatedPlexTextTestComponent.prototype, "select", void 0);
    EncapsulatedPlexTextTestComponent = __decorate([
        core_1.Component({
            template: "",
            encapsulation: core_1.ViewEncapsulation.Native,
        })
    ], EncapsulatedPlexTextTestComponent);
    return EncapsulatedPlexTextTestComponent;
}(PlexTextTestComponent));
function createTestingModule(cmp, template) {
    testing_1.TestBed.configureTestingModule({
        imports: [platform_browser_1.BrowserModule, module_1.PlexModule, forms_1.FormsModule],
        declarations: [cmp],
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
//# sourceMappingURL=../../../src/lib/text/text.component.spec.js.map
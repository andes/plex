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
var datetime_component_1 = require("./datetime.component");
var module_1 = require("../module");
var forms_1 = require("@angular/forms");
describe('PlexDateTimeComponent', function () {
    describe('input simple text', function () {
        var fixture;
        var datetime;
        var input;
        var nativeText;
        beforeEach(testing_1.fakeAsync(function () {
            fixture = createTestingModule(PlexDateTimeTestComponent, "<plex-datetime [(ngModel)]=\"text\" type=\"date\" (change)=\"onChange($event)\" (focus)=\"onFocus()\">\n                </plex-datetime>");
            datetime = fixture.componentInstance.plexDateTime;
            input = getElement(fixture, 'plex-datetime input').nativeElement;
            nativeText = getElement(fixture, 'plex-datetime').nativeElement;
        }));
        it('writing must update Input variable', testing_1.fakeAsync(function () {
            tickAndDetectChanges(fixture);
            writeText(input, '01/01/2019');
            tickAndDetectChanges(fixture);
            expect(fixture.componentInstance.text.toJSON().substr(0, 10)).toBe('2019-01-01');
        }));
        it('changing input var must update html DOM', testing_1.fakeAsync(function () {
            tickAndDetectChanges(fixture);
            fixture.componentInstance.text = new Date(2019, 0, 1);
            tickAndDetectChanges(fixture);
            expect(input.value).toBe('01/01/2019');
        }));
        it('after write change must be called', testing_1.fakeAsync(function () {
            spyOn(fixture.componentInstance, 'onChange');
            writeText(input, '01/01/2019');
            tickAndDetectChanges(fixture);
            expect(fixture.componentInstance.onChange).toHaveBeenCalled();
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
            fixture = createTestingModule(PlexDateTimeTestComponent, "<plex-datetime [(ngModel)]=\"text\" (change)=\"onChange($event)\" [readonly]=\"true\">\n                </plex-datetime>");
            input = getElement(fixture, 'plex-datetime input').nativeElement;
        }));
        it('readonly properties', testing_1.fakeAsync(function () {
            var readonly = getElement(fixture, 'plex-datetime input').nativeElement.getAttribute('readonly');
            expect(readonly).toBeDefined();
        }));
    });
    describe('input debounce text', function () {
        var fixture;
        var text;
        var input;
        var nativeText;
        beforeEach(testing_1.fakeAsync(function () {
            fixture = createTestingModule(PlexDateTimeTestComponent, "<plex-datetime [(ngModel)]=\"text\" (change)=\"onChange($event)\" [debounce]=\"1000\">\n                </plex-datetime>");
            text = fixture.componentInstance.plexDateTime;
            input = getElement(fixture, 'plex-datetime input').nativeElement;
            nativeText = getElement(fixture, 'plex-datetime').nativeElement;
        }));
        it('after write change must be called', testing_1.fakeAsync(function () {
            spyOn(fixture.componentInstance, 'onChange');
            writeText(input, '01/01/2019');
            tickAndDetectChanges(fixture);
            expect(fixture.componentInstance.onChange).toHaveBeenCalledTimes(0);
            testing_1.tick(1100);
            expect(fixture.componentInstance.onChange).toHaveBeenCalled();
        }));
    });
});
function writeText(element, text) {
    element.value = text;
    element.dispatchEvent(new Event('input'));
}
function tickAndDetectChanges(fixture) {
    fixture.detectChanges();
    testing_1.tick();
}
function getElement(fixture, selector) {
    return fixture.debugElement.query(platform_browser_1.By.css(selector));
}
var PlexDateTimeTestComponent = /** @class */ (function () {
    function PlexDateTimeTestComponent() {
    }
    PlexDateTimeTestComponent.prototype.onChange = function (_) {
    };
    PlexDateTimeTestComponent.prototype.onFocus = function (_) {
    };
    PlexDateTimeTestComponent.prototype.onBlur = function (_) {
    };
    PlexDateTimeTestComponent.prototype.onOpen = function () {
    };
    PlexDateTimeTestComponent.prototype.onClose = function () {
    };
    PlexDateTimeTestComponent.prototype.onAdd = function () {
    };
    PlexDateTimeTestComponent.prototype.onRemove = function () {
    };
    PlexDateTimeTestComponent.prototype.onClear = function () {
    };
    PlexDateTimeTestComponent.prototype.onSearch = function () {
    };
    PlexDateTimeTestComponent.prototype.onScroll = function () {
    };
    PlexDateTimeTestComponent.prototype.onScrollToEnd = function () {
    };
    __decorate([
        core_1.ViewChild(datetime_component_1.PlexDateTimeComponent, { static: false }),
        __metadata("design:type", datetime_component_1.PlexDateTimeComponent)
    ], PlexDateTimeTestComponent.prototype, "plexDateTime", void 0);
    PlexDateTimeTestComponent = __decorate([
        core_1.Component({
            template: ""
        })
    ], PlexDateTimeTestComponent);
    return PlexDateTimeTestComponent;
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
//# sourceMappingURL=../../../src/lib/datetime/datetime.component.spec.js.map
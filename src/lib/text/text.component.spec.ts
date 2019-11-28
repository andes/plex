
import { async, ComponentFixture, discardPeriodicTasks, fakeAsync, flush, flushMicrotasks, TestBed, tick } from '@angular/core/testing';
import { By, BrowserModule } from '@angular/platform-browser';
import { Component, DebugElement, ErrorHandler, NgZone, Type, ViewChild, ViewEncapsulation } from '@angular/core';
// import { ConsoleService } from './console.service';
// import { FormsModule } from '@angular/forms';
// import { getNgSelectElement, selectOption, TestsErrorHandler, tickAndDetectChanges, triggerKeyDownEvent } from '../testing/helpers';
// import { MockConsole, MockNgZone } from '../testing/mocks';

import { PlexTextComponent } from './text.component';
import { PlexModule } from '../module';
import { Subject } from 'rxjs';
import { FormsModule } from '@angular/forms';

describe('PlexTextComponent', () => {
    describe('input simple text', () => {
        let fixture: ComponentFixture<PlexTextTestComponent>;
        let text: PlexTextComponent;
        let input: HTMLInputElement;
        let nativeText: HTMLInputElement;

        beforeEach(fakeAsync(() => {
            fixture = createTestingModule(
                PlexTextTestComponent,
                `<plex-text [(ngModel)]="text" (change)="onChange($event)" (focus)="onFocus()">
                </plex-text>`);
            text = fixture.componentInstance.plexText;
            input = getElement(fixture, 'plex-text input').nativeElement;
            nativeText = getElement(fixture, 'plex-text').nativeElement;
        }));

        it('writing must update Input variable', fakeAsync(() => {
            tickAndDetectChanges(fixture);
            writePlexText(nativeText, 'hola');
            tickAndDetectChanges(fixture);
            expect(fixture.componentInstance.text).toBe('hola');
        }));

        it('changing input var must update html DOM', fakeAsync(() => {
            tickAndDetectChanges(fixture);
            fixture.componentInstance.text = 'hola';
            tickAndDetectChanges(fixture);
            expect(input.value).toBe('hola');
        }));

        it('after write change must be called', fakeAsync(() => {
            spyOn(fixture.componentInstance, 'onChange');
            writePlexText(input, 'hola');
            tickAndDetectChanges(fixture);
            expect(fixture.componentInstance.onChange).toHaveBeenCalledWith({ value: 'hola' });
        }));

        it('focus on click', fakeAsync(() => {
            spyOn(fixture.componentInstance, 'onFocus');
            nativeText.dispatchEvent(new Event('focus'));

            tickAndDetectChanges(fixture);
            expect(fixture.componentInstance.onFocus).toHaveBeenCalled();
        }));
    });

    describe('input debounce text', () => {
        let fixture: ComponentFixture<PlexTextTestComponent>;
        let input: HTMLInputElement;

        beforeEach(fakeAsync(() => {
            fixture = createTestingModule(
                PlexTextTestComponent,
                `<plex-text [(ngModel)]="text" (change)="onChange($event)" [readonly]="true">
                </plex-text>`);
            input = getElement(fixture, 'plex-text input').nativeElement;
        }));

        it('readonly properties', fakeAsync(() => {
            const readonly = getElement(fixture, 'plex-text input').nativeElement.getAttribute('readonly');
            expect(readonly).toBeDefined();
        }));

    });

    describe('input debounce text', () => {
        let fixture: ComponentFixture<PlexTextTestComponent>;
        let text: PlexTextComponent;
        let input: HTMLInputElement;
        let nativeText: HTMLInputElement;

        beforeEach(fakeAsync(() => {
            fixture = createTestingModule(
                PlexTextTestComponent,
                `<plex-text [(ngModel)]="text" (change)="onChange($event)" [debounce]="1000">
                </plex-text>`);
            text = fixture.componentInstance.plexText;
            input = getElement(fixture, 'plex-text input').nativeElement;
            nativeText = getElement(fixture, 'plex-text').nativeElement;
        }));

        it('after write change must be called', fakeAsync(() => {
            spyOn(fixture.componentInstance, 'onChange');
            writePlexText(input, 'hola');
            tickAndDetectChanges(fixture);
            expect(fixture.componentInstance.onChange).toHaveBeenCalledTimes(0);
            tick(1100);
            expect(fixture.componentInstance.onChange).toHaveBeenCalledWith({ value: 'hola' });
        }));

    });
});

function writePlexText(element, text) {
    element.value = text;
    element.dispatchEvent(new Event('input'));
}

export function tickAndDetectChanges(fixture: ComponentFixture<any>) {
    fixture.detectChanges();
    tick();
}

export function getPlexTextElement(fixture: ComponentFixture<any>): DebugElement {
    return fixture.debugElement.query(By.css('plex-text'));
}

export function getElement(fixture: ComponentFixture<any>, selector: string): DebugElement {
    return fixture.debugElement.query(By.css(selector));
}

export function triggerKeyEvent(event: string, element: DebugElement, which: number, key = ''): void {
    element.triggerEventHandler(event, {
        which,
        key,
        preventDefault: () => { },
    });
}

@Component({
    template: ``
})
class PlexTextTestComponent {
    @ViewChild(PlexTextComponent, { static: false }) plexText: PlexTextComponent;
    text = 'hola';

    onChange(_: Event) {
    }

    onFocus(_: Event) {
    }

    onBlur(_: Event) {
    }

    onOpen() {
    }

    onClose() {
    }

    onAdd() {
    }

    onRemove() {
    }

    onClear() {
    }

    onSearch() {
    }

    onScroll() {
    }

    onScrollToEnd() {
    }
}

@Component({
    template: ``,
    encapsulation: ViewEncapsulation.Native,
})
class EncapsulatedPlexTextTestComponent extends PlexTextTestComponent {
    @ViewChild(PlexTextComponent, { static: true }) select: PlexTextComponent;
}

function createTestingModule<T>(cmp: Type<T>, template: string): ComponentFixture<T> {

    TestBed.configureTestingModule({
        imports: [BrowserModule, PlexModule, FormsModule],
        declarations: [cmp],
        // providers: [
        // { provide: ErrorHandler, useClass: TestsErrorHandler },
        // { provide: NgZone, useFactory: () => new MockNgZone() },
        // { provide: ConsoleService, useFactory: () => new MockConsole() }
        // ]
    })
        .overrideComponent(cmp, {
            set: {
                template
            }
        });


    TestBed.compileComponents();

    const fixture = TestBed.createComponent(cmp);
    fixture.detectChanges();
    return fixture;
}

function createEvent(target = {}) {
    return {
        preventDefault: () => {
        },
        target: {
            className: '',
            tagName: '',
            classList: {
                contains: () => {
                }
            },
            ...target
        }
    };
}

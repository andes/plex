
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { By, BrowserModule } from '@angular/platform-browser';
import { Component, DebugElement, Type, ViewChild, ViewEncapsulation } from '@angular/core';
import { PlexButtonComponent } from './button.component';
import { PlexModule } from '../module';
import { FormsModule } from '@angular/forms';

describe('PlexButtonComponent', () => {

    describe('input simple text', () => {
        let fixture: ComponentFixture<PlexButtonTestComponent>;
        let button: PlexButtonComponent;
        let native: HTMLInputElement;

        beforeEach(fakeAsync(() => {
            fixture = createTestingModule(
                PlexButtonTestComponent,
                `<plex-button (click)="onChange($event)" label="HOLA"></plex-button>`);
            button = fixture.componentInstance.plexButton;
            native = getElement(fixture, 'plex-button').nativeElement;
        }));

        it('button click fired', fakeAsync(() => {
            spyOn(fixture.componentInstance, 'onChange');
            tickAndDetectChanges(fixture);
            dispatchClick(native);
            expect(fixture.componentInstance.onChange).toHaveBeenCalledTimes(1);
        }));

        it('button label', fakeAsync(() => {
            tickAndDetectChanges(fixture);
            const element = getElement(fixture, 'plex-button span');
            expect(element.nativeElement.textContent).toBe(' HOLA ');
        }));
    });

    describe('button icon', () => {
        let fixture;
        it('button icon', fakeAsync(() => {
            fixture = createTestingModule(
                PlexButtonTestComponent,
                `<plex-button icon="pencil"></plex-button>`);

            tickAndDetectChanges(fixture);
            const element = getElement(fixture, 'plex-button');
            expect(element.nativeElement).toBeDefined();
            expect(element.nativeElement.getAttribute('icon')).toBe('pencil');
        }));
    });

    describe('button text in ng-content', () => {
        it('button icon', fakeAsync(() => {
            const fixture = createTestingModule(
                PlexButtonTestComponent,
                `<plex-button>HOLA</plex-button>`);

            tickAndDetectChanges(fixture);
            const element = getElement(fixture, 'plex-button button');
            expect(element.nativeElement).toBeDefined();
            expect(element.nativeElement.textContent).toBe('HOLA');
        }));
    });
});


function dispatchClick(element) {
    element.dispatchEvent(new Event('click'));
}

export function tickAndDetectChanges(fixture: ComponentFixture<any>) {
    fixture.detectChanges();
    tick();
}

export function getPlexElement(fixture: ComponentFixture<any>): DebugElement {
    return fixture.debugElement.query(By.css('plex-button'));
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
class PlexButtonTestComponent {
    @ViewChild(PlexButtonComponent) plexButton: PlexButtonComponent;
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
class EncapsulatedPlexButtonTestComponent extends PlexButtonTestComponent {
    @ViewChild(PlexButtonComponent, { static: true }) select: PlexButtonComponent;
}

function createTestingModule<T>(cmp: Type<T>, template: string): ComponentFixture<T> {

    TestBed.configureTestingModule({
        imports: [BrowserModule, PlexModule, FormsModule],
        declarations: [cmp]
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

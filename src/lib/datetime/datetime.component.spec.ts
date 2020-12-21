
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { By, BrowserModule } from '@angular/platform-browser';
import { Component, DebugElement, Type, ViewChild } from '@angular/core';

import { PlexDateTimeComponent } from './datetime.component';
import { PlexModule } from '../module';
import { FormsModule } from '@angular/forms';
import { Plex } from '../core/service';

describe('PlexDateTimeComponent', () => {
    describe('input simple text', () => {
        let fixture: ComponentFixture<PlexDateTimeTestComponent>;
        let datetime: PlexDateTimeComponent;
        let input: HTMLInputElement;
        let nativeText: HTMLInputElement;

        beforeEach(fakeAsync(() => {
            fixture = createTestingModule(
                PlexDateTimeTestComponent,
                `<plex-datetime [(ngModel)]="text" type="date" (change)="onChange($event)" (focus)="onFocus()">
                </plex-datetime>`);
            datetime = fixture.componentInstance.plexDateTime;
            input = getElement(fixture, 'plex-datetime input').nativeElement;
            nativeText = getElement(fixture, 'plex-datetime').nativeElement;
        }));

        it('writing must update Input variable', fakeAsync(() => {
            tickAndDetectChanges(fixture);
            writeText(input, '01/01/2019');
            tickAndDetectChanges(fixture);
            expect(fixture.componentInstance.text.toJSON().substr(0, 10)).toBe('2019-01-01');
        }));

        it('changing input var must update html DOM', fakeAsync(() => {
            tickAndDetectChanges(fixture);
            fixture.componentInstance.text = new Date(2019, 0, 1);
            tickAndDetectChanges(fixture);
            expect(input.value).toBe('01/01/2019');
        }));

        it('after write change must be called', fakeAsync(() => {
            spyOn(fixture.componentInstance, 'onChange');
            writeText(input, '01/01/2019');
            tickAndDetectChanges(fixture);
            expect(fixture.componentInstance.onChange).toHaveBeenCalled();
        }));

        it('focus on click', fakeAsync(() => {
            spyOn(fixture.componentInstance, 'onFocus');
            nativeText.dispatchEvent(new Event('focus'));

            tickAndDetectChanges(fixture);
            expect(fixture.componentInstance.onFocus).toHaveBeenCalled();
        }));
    });

    describe('readonly check', () => {
        let fixture: ComponentFixture<PlexDateTimeTestComponent>;
        let input: HTMLInputElement;

        beforeEach(fakeAsync(() => {
            fixture = createTestingModule(
                PlexDateTimeTestComponent,
                `<plex-datetime [(ngModel)]="text" (change)="onChange($event)" [readonly]="true">
                </plex-datetime>`);
            input = getElement(fixture, 'plex-datetime input').nativeElement;
        }));

        it('readonly properties', fakeAsync(() => {
            const readonly = getElement(fixture, 'plex-datetime input').nativeElement.getAttribute('readonly');
            expect(readonly).toBeDefined();
        }));

    });

    describe('input debounce text', () => {
        let fixture: ComponentFixture<PlexDateTimeTestComponent>;
        let text: PlexDateTimeComponent;
        let input: HTMLInputElement;
        let nativeText: HTMLInputElement;

        beforeEach(fakeAsync(() => {
            fixture = createTestingModule(
                PlexDateTimeTestComponent,
                `<plex-datetime [(ngModel)]="text" (change)="onChange($event)" [debounce]="1000">
                </plex-datetime>`);
            text = fixture.componentInstance.plexDateTime;
            input = getElement(fixture, 'plex-datetime input').nativeElement;
            nativeText = getElement(fixture, 'plex-datetime').nativeElement;
        }));

        it('after write change must be called', fakeAsync(() => {
            spyOn(fixture.componentInstance, 'onChange');
            writeText(input, '01/01/2019');
            tickAndDetectChanges(fixture);
            expect(fixture.componentInstance.onChange).toHaveBeenCalledTimes(0);
            tick(1100);
            expect(fixture.componentInstance.onChange).toHaveBeenCalled();
        }));

    });
});

function writeText(element, text) {
    element.value = text;
    element.dispatchEvent(new Event('input'));
}

function tickAndDetectChanges(fixture: ComponentFixture<any>) {
    fixture.detectChanges();
    tick();
}

function getElement(fixture: ComponentFixture<any>, selector: string): DebugElement {
    return fixture.debugElement.query(By.css(selector));
}


@Component({
    template: ``
})
class PlexDateTimeTestComponent {
    @ViewChild(PlexDateTimeComponent) plexDateTime: PlexDateTimeComponent;
    text;

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

function createTestingModule<T>(cmp: Type<T>, template: string): ComponentFixture<T> {

    TestBed.configureTestingModule({
        imports: [BrowserModule, PlexModule, FormsModule],
        declarations: [cmp],
        providers: [Plex]
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


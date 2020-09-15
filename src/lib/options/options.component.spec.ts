
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { By, BrowserModule } from '@angular/platform-browser';
import { Component, DebugElement, Type, ViewChild, ViewEncapsulation } from '@angular/core';

import { PlexOptionsComponent, IPlexOptionsItems } from './options.component';
import { PlexModule } from '../module';
import { FormsModule } from '@angular/forms';

describe('PlexOptionsComponent', () => {
    let fixture: ComponentFixture<PlexOptionsTestComponent>;
    let options: PlexOptionsComponent;

    beforeEach(fakeAsync(() => {
        fixture = createTestingModule(
            PlexOptionsTestComponent,
            `<plex-options [items]="items"  (activated)="onChange($event)"></plex-options>`
        );
        options = fixture.componentInstance.component;
        tickAndDetectChanges(fixture);
    }));


    it('have 3 buttons', fakeAsync(() => {
        const elements = getElementAll(fixture, 'plex-options button');
        expect(elements.length).toBe(fixture.componentInstance.items.length);
    }));

    it('first item is active', fakeAsync(() => {
        expect(options.active).toBe(fixture.componentInstance.items[0].key);
    }));

    it('display label', fakeAsync(() => {
        const elements = getElementAll(fixture, 'plex-options button');

        elements.forEach((elem, index) => {
            const elementRef = elem.nativeElement;
            const text = elementRef.innerText;
            expect(text).toBe(fixture.componentInstance.items[index].label);
        });
    }));

    it('activated must be called on click', fakeAsync(() => {

        spyOn(fixture.componentInstance, 'onChange');

        const elements = getElementAll(fixture, 'plex-options button');
        const secondButton = elements[1].nativeElement;
        secondButton.dispatchEvent(new Event('click'));

        tickAndDetectChanges(fixture);

        expect(fixture.componentInstance.onChange).toHaveBeenCalledWith('b');

        expect(options.active).toBe('b');

    }));

    it('change item must update active', fakeAsync(() => {
        fixture.componentInstance.items = [
            { key: 'd', label: 'D' },
            { key: 'e', label: 'E' },
        ];

        spyOn(fixture.componentInstance, 'onChange');

        tickAndDetectChanges(fixture);

        const elements = getElementAll(fixture, 'plex-options button');

        expect(options.active).toBe('d');

        elements.forEach((elem, index) => {
            const elementRef = elem.nativeElement;
            const text = elementRef.innerText;
            expect(text).toBe(fixture.componentInstance.items[index].label);
        });

        expect(fixture.componentInstance.onChange).toHaveBeenCalledWith('d');
    }));

    it('change item but preserve active key', fakeAsync(() => {
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


export function tickAndDetectChanges(fixture: ComponentFixture<any>) {
    fixture.detectChanges();
    tick();
}


export function getElement(fixture: ComponentFixture<any>, selector: string): DebugElement {
    return fixture.debugElement.query(By.css(selector));
}

export function getElementAll(fixture: ComponentFixture<any>, selector: string): DebugElement[] {
    return fixture.debugElement.queryAll(By.css(selector));
}


@Component({
    template: ``
})
class PlexOptionsTestComponent {
    @ViewChild(PlexOptionsComponent) component: PlexOptionsComponent;

    items: IPlexOptionsItems[] = [
        { key: 'a', label: 'A' },
        { key: 'b', label: 'B' },
        { key: 'C', label: 'C' },
    ];

    onChange(_: Event) {
    }


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


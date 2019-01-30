import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NavbarComponent } from './navbar.component';
import { exists } from 'fs';

describe('Navbar', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                RouterTestingModule
            ],
            declarations: [
                NavbarComponent
            ]
        }).compileComponents();
    }));

    it('should create the component', () => {
        const fixture = TestBed.createComponent(NavbarComponent);
        const navbar = fixture.debugElement.componentInstance;
        expect(navbar).toBeTruthy();
    });

    it('should have an array of links to home and blog', () => {
        const fixture = TestBed.createComponent(NavbarComponent);
        const navbar = fixture.debugElement.componentInstance;
        expect(navbar.routes).toEqual([{ name: 'home', route: 'home' }, { name: 'blog', route: 'blog' }]);
    });

    it('should have route with name home that routes to home', () => {
        const fixture = TestBed.createComponent(NavbarComponent);
        const navbar = fixture.debugElement.componentInstance;
        expect(navbar.routes[0]).toEqual({ name: 'home', route: 'home' });
    });

    it('should have a route object called blog that redirects to blog', () => {
        const fixture = TestBed.createComponent(NavbarComponent);
        const navbar = fixture.componentInstance;
        expect(navbar.routes[1]).toEqual({ name: 'blog', route: 'blog' });
    });
});

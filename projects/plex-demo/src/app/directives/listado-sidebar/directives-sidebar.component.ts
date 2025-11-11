import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
    templateUrl: './directives-sidebar.component.html'
})
export class DemoDirectivesSidebarComponent implements OnInit {

    constructor(private router: Router, private route: ActivatedRoute) { }

    ngOnInit(): void {
    }

    verDirectiva(id) {
        this.router.navigate(['directives', 'listado-sidebar', id]);
    }


}

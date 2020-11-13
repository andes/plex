import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
    templateUrl: './directives.component.html'
})
export class DemoDirectivesComponent implements OnInit {

    constructor(private router: Router, private route: ActivatedRoute) { }

    ngOnInit(): void {
    }


    verDirectiva(id) {
        this.router.navigate(['directives', 'listado-sidebar', id], { relativeTo: this.route });
    }

}

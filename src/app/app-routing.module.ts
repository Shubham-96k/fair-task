import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { FairsComponent } from "./components/fairs/fairs.component";
import { TofairComponent } from "./components/tofair/tofair.component";
import { FairdetailsComponent } from "./components/fairs/fairdetails/fairdetails.component";


const appRoutes : Routes = [
    {
        path: '',
        component: TofairComponent
    },
    {
        path: 'fairs',
        component: FairsComponent,
        children : [
            {
                path : ':fairId',
                component: FairdetailsComponent
            }
        ]
    },
]


@NgModule({
    imports : [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule{}
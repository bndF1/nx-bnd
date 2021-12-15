import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HomeMainModule } from './home-main/home-main.module';

@NgModule({
  imports: [CommonModule],
  exports: [HomeMainModule],
})
export class BndWebHomeFeatureModule {}

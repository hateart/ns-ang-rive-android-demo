import { Component, OnInit } from '@angular/core'
import { RiveView } from '@nativescript/rive'

import { registerElement } from '@nativescript/angular'
registerElement('RiveView', () => RiveView)


import { Item } from './item'
import { ItemService } from './item.service'

@Component({
  selector: 'ns-items',
  templateUrl: './items.component.html',
})
export class ItemsComponent implements OnInit {
  items: Array<Item>

  constructor(private itemService: ItemService) {}

  ngOnInit(): void {
    this.items = this.itemService.getItems()
  }
}
